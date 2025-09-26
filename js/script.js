(function ()
{


	//document.getElementById('standLayer').innerHTML = STAND_BODY;


	const FORM_KEY = "wheel_users";

	const formWrap = document.getElementById("userFormWrap");
	const form = document.getElementById("userForm");
	const wheelWrap = document.getElementById("wheelWrap");
	const congratsMsg = document.getElementById('congratsMsg');
	const soldOutMsg = document.getElementById('soldOutMsg');


	// --- Landing overlay (tap-only, no auto-advance) ---
	const landing = document.getElementById('landing');
	const landingVideo = document.getElementById('landingVideo');

	const introVideos = [
		"videos/intro.mp4", // intro video
	];

	let introIndex = 0;
	let landingFinished = false;
	let advancing = false; // debounce rapid double-taps

	function showLanding()
	{
		landing?.classList.remove('hide');
		formWrap?.classList.remove('show');
		wheelWrap?.classList.remove('show');
		congratsMsg?.classList.remove('show');
	}

	function setLandingPlaying(on)
	{
		if (!landing) return;
		landing.classList.toggle('playing', !!on); // hide the "Tap" hint if you use it
	}

	function playIntro(i)
	{
		if (!landingVideo) return;
		introIndex = i;

		// swap source safely
		let s = landingVideo.querySelector('source');
		if (!s) { s = document.createElement('source'); landingVideo.appendChild(s); }
		s.src = introVideos[i];
		s.type = s.src.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/quicktime';

		landingVideo.muted = true;
		landingVideo.playsInline = true;

		try { landingVideo.load(); } catch { }
		setLandingPlaying(false);

		landingVideo.play()
			.then(() => setLandingPlaying(true))
			.catch(() =>
			{
				// autoplay blocked until tap; keep hint visible
				setLandingPlaying(false);
			});
	}

	// TAP to advance (even while video is still playing)
	function advanceLanding()
	{
		if (advancing || landingFinished) return;
		advancing = true;

		if (introIndex === 0)
		{
			playIntro(1);
			// re-enable tap quickly after source swap
			setTimeout(() => advancing = false, 150);
		} else
		{
			finishLanding();
		}
	}

	landing?.addEventListener('click', (e) =>
	{
		e.preventDefault();
		advanceLanding();
	});

	// IMPORTANT: no 'ended' listener — we never auto-advance

	function finishLanding()
	{
		if (landingFinished) return;
		landingFinished = true;

		// Hide overlay
		landing?.classList.add('hide');

		// Stop media and fully detach so nothing fires later
		if (landingVideo)
		{
			try { landingVideo.pause(); } catch { }
			// remove sources to completely tear down decode pipeline
			const s = landingVideo.querySelector('source');
			if (s) s.removeAttribute('src');
			landingVideo.removeAttribute('src');
			try { landingVideo.load(); } catch { }
		}

		// Proceed to your app's first screen (the form)
		showForm();
	}





	showLanding();
	playIntro(0);



	function showForm()
	{
		formWrap.classList.add("show");
		wheelWrap.classList.remove("show");
		congratsMsg.classList.remove("show");
	}
	function hideFormAndWheel()
	{
		formWrap.classList.remove("show");
		wheelWrap.classList.remove("show");
	}

	function showWheel()
	{
		wheelWrap.classList.add("show");
		formWrap.classList.remove("show");
	}


	// Handle form submit
	form.addEventListener("submit", (e) =>
	{
		e.preventDefault();

		// Build the new record
		const newUser = {
			name: document.getElementById("name").value.trim(),
			company: document.getElementById("company").value.trim(),
			email: document.getElementById("email").value.trim(),
			marketing: document.getElementById("marketing").checked,
			ts: Date.now(),
			synced: 0
		};

		// Get existing users or empty array
		const existing = JSON.parse(localStorage.getItem(FORM_KEY) || "[]");

		// Add the new one
		existing.push(newUser);

		// Save back
		localStorage.setItem(FORM_KEY, JSON.stringify(existing));

		// Reset form + swap views
		form.reset();

		showWheel();


	});

	// Hook into your spin finish callback
	async function onSpinEnd(prizeName)
	{
		const video = document.getElementById('congratsVideo');
		if (video)
		{
			video.querySelector('source').src = `videos/${prizeName}.mp4`;
			video.load();   // reloads new source
			video.play();   // start playback
		}

		// Show congratulations overlay
		setTimeout(() =>
		{
			congratsMsg?.classList.add('show');

			setTimeout(() =>
			{
				// Hide overlay
				congratsMsg?.classList.remove('show');
				loadData();
			}, 5000); // show for 10s
		}, 2000); // delay before showing
	}


	// --- Data storage ---
	const LS_KEY = "prizes_minimal_v2";

	function getLocalPrizes()
	{
		try
		{
			return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
		} catch {
			return [];
		}
	}

	function setLocalPrizes(rows)
	{
		localStorage.setItem(LS_KEY, JSON.stringify(rows));
	}

	function clearLocalPrizes()
	{
		if (
			confirm(
				"Are you sure you want to reset prizes to the original? This cannot be undone.",
			)
		)
		{
			setLocalPrizes(initData);
			showForm();
			loadData();
		} else
		{
			// User cancelled — do nothing
			console.log("Reset cancelled");
		}
	}

	// --- Initialise only if not already present ---
	if (!localStorage.getItem(LS_KEY))
	{
		setLocalPrizes(initData);
	}

	// --- State ---
	let names = [];
	let N = 0;
	let slice = 0;
	let currentRotation = 0;
	let isSpinning = false;

	// --- Colors (gradient across slices) ---
	const COLOR_A = "#009fdf";
	const COLOR_B = "#86cedd";
	function hexToRgb(h)
	{
		const s = h.replace("#", "");
		return {
			r: parseInt(s.slice(0, 2), 16),
			g: parseInt(s.slice(2, 4), 16),
			b: parseInt(s.slice(4, 6), 16),
		};
	}
	function lerp(a, b, t)
	{
		return a + (b - a) * t;
	}
	const RGB_A = hexToRgb(COLOR_A);
	const RGB_B = hexToRgb(COLOR_B);
	function lerpColorCss(t)
	{
		const r = Math.round(lerp(RGB_A.r, RGB_B.r, t)),
			g = Math.round(lerp(RGB_A.g, RGB_B.g, t)),
			b = Math.round(lerp(RGB_A.b, RGB_B.b, t));
		return `rgb(${r}, ${g}, ${b})`;
	}

	// --- Elements ---
	const svg = document.getElementById("wheelSvg");
	const gWheel = document.getElementById("wheelGroup");
	const log = document.getElementById("log");

	// --- Helpers ---
	function polarToXY(r, a)
	{
		return [(r * Math.cos(a)).toFixed(2), (r * Math.sin(a)).toFixed(2)];
	}

	function arcWedgePath(r, start, end)
	{
		while (end < start) end += Math.PI * 2;
		const theta = end - start;

		const FULL_EPS = (Math.PI * 2) - 1e-4;
		if (theta >= FULL_EPS)
		{
			const xR = r, yR = 0;
			return [
				`M 0 0`,
				`L ${xR} ${yR}`,
				`A ${r} ${r} 0 1 1 ${-xR} ${yR}`,
				`A ${r} ${r} 0 1 1 ${xR} ${yR}`,
				`Z`
			].join(" ");
		}

		const largeArc = theta > Math.PI ? 1 : 0;
		const x0 = r * Math.cos(start), y0 = r * Math.sin(start);
		const x1 = r * Math.cos(end), y1 = r * Math.sin(end);

		return [
			`M 0 0`,
			`L ${x0} ${y0}`,
			`A ${r} ${r} 0 ${largeArc} 1 ${x1} ${y1}`,
			`Z`
		].join(" ");
	}


	function setWheelRotation(deg)
	{
		gWheel.setAttribute("transform", `rotate(${deg})`);
	}

	// --- Inline page background (full screen) ---
	/*function adjustPageHeightForBg() {
		try {
			if (!BG_VIEWBOX || !BG_VIEWBOX.width || !BG_VIEWBOX.height) return;
			var ratio = BG_VIEWBOX.height / BG_VIEWBOX.width; // unitless aspect ratio
			var px = Math.round(window.innerWidth * ratio); // height when width = 100vw
			document.documentElement.style.minHeight = px + "px";
			document.body.style.minHeight = px + "px";
		} catch (e) {
			console.error("adjustPageHeightForBg error", e);
		}
	}*/

	/*function mountPageBackground()
	{
		const bg = document.getElementById("pageBg");
		if (!bg) return;
		bg.setAttribute(
			"viewBox",
			`${BG_VIEWBOX.minX} ${BG_VIEWBOX.minY} ${BG_VIEWBOX.width} ${BG_VIEWBOX.height}`,
		);
		bg.innerHTML = (BG_DEFS || "") + (BG_BODY || "");
	}*/

	// --- Static (non-rotating) center logo ---
	function placeStaticLogo(centerRimRadius)
	{
		// remove any existing logo
		const old = document.getElementById("logoStatic");
		if (old && old.parentNode) old.parentNode.removeChild(old);

		// size of logo (e.g. 1.6× hub radius, like before)
		const logoSize = Math.floor(centerRimRadius * 1.6);

		// create <image>
		const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
		img.id = "logoStatic";
		img.setAttribute("href", "img/nuaire-logo.png"); // <-- path to your PNG
		img.setAttribute("width", logoSize);
		img.setAttribute("height", logoSize);
		// position so it’s centred at 0,0 (the wheel’s centre)
		img.setAttribute("x", -logoSize / 2);
		img.setAttribute("y", -logoSize / 2);
		img.setAttribute("pointer-events", "none");

		svg.appendChild(img);
	}

	// --- Build wheel (NO stand, NO pointer) ---
	function buildWheel()
	{
		const rimColor = "#232E49";

		const segmentRadius = 290; // outer edge of the wheel
		const outerRimRadius = segmentRadius;
		const centerRimRadius = 80;
		const orangeRimRadius = 74;

		// --- LABEL SETTINGS (tweak these) ---
		const LABEL_WIDTH = 170;   // fixed label width (wraps consistently)
		const LABEL_HEIGHT = 60;    // fixed label height
		const LABEL_OFFSET = 0;     // +ve pushes outward, -ve inward from the mid radius
		const LABEL_UPRIGHT = false; // true keeps text horizontal; false follows slice angle

		// Clear rotating layer
		while (gWheel.firstChild) gWheel.removeChild(gWheel.firstChild);

		const svgNS = "http://www.w3.org/2000/svg";
		const svg = gWheel.closest("svg");

		// Ensure <defs> exists (to store per-slice gradients)
		let defs = svg.querySelector("defs");
		if (!defs)
		{
			defs = document.createElementNS(svgNS, "defs");
			svg.insertBefore(defs, svg.firstChild);
		}
		else
		{
			// clear previous gradients to avoid duplicates
			defs.innerHTML = "";
		}

		// Slices + labels
		const rSlice = segmentRadius - 4; // where the wedge outer path is drawn
		const labelBaseRadius = (centerRimRadius + rSlice) / 2; // halfway hub↔rim

		for (let i = 0; i < N; i++)
		{
			const start = i * slice - Math.PI / 2;
			const end = start + slice;
			const mid = start + slice / 2;
			const midDeg = (mid * 180) / Math.PI;

			// --- per-slice gradient (tangent: left→right across the wedge) ---
			const gradId = `segGrad-${i}`;
			const grad = document.createElementNS(svgNS, "linearGradient");
			grad.setAttribute("id", gradId);
			grad.setAttribute("gradientUnits", "objectBoundingBox");
			grad.setAttribute("x1", "0%");
			grad.setAttribute("y1", "0%");
			grad.setAttribute("x2", "100%");
			grad.setAttribute("y2", "0%");
			grad.setAttribute("gradientTransform", `rotate(${midDeg + 90}, 0.5, 0.5)`);
			grad.appendChild(makeStop(0, "#009FDF"));
			grad.appendChild(makeStop(100, "#86cedd"));
			defs.appendChild(grad);

			// --- slice path using its gradient ---
			const p = document.createElementNS(svgNS, "path");
			p.setAttribute("d", arcWedgePath(rSlice, start, end));
			p.setAttribute("fill", `url(#${gradId})`);
			p.setAttribute("vector-effect", "non-scaling-stroke");
			gWheel.appendChild(p);

			// --- label (fixed radius + fixed size) ---
			const labelRadius = Math.round(labelBaseRadius + LABEL_OFFSET);

			// rotate to mid-angle, then move out to the fixed radius
			const labelG = document.createElementNS(svgNS, "g");
			labelG.setAttribute("transform", `rotate(${midDeg}) translate(${labelRadius},0)`);

			// optional counter-rotation to keep text upright
			const holderG = document.createElementNS(svgNS, "g");
			if (LABEL_UPRIGHT) holderG.setAttribute("transform", `rotate(${-midDeg})`);

			const fo = document.createElementNS(svgNS, "foreignObject");
			fo.setAttribute("x", (-LABEL_WIDTH / 2).toString());
			fo.setAttribute("y", (-LABEL_HEIGHT / 2).toString());
			fo.setAttribute("width", LABEL_WIDTH.toString());
			fo.setAttribute("height", LABEL_HEIGHT.toString());
			fo.setAttribute("pointer-events", "none");

			const div = document.createElement("div");
			div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
			// basic centring and wrapping
			div.style.display = "flex";
			div.style.alignItems = "center";
			div.style.justifyContent = "center";
			div.style.textAlign = "center";
			div.style.fontWeight = "700";
			div.style.color = "#fff";
			div.style.lineHeight = "1.1";
			div.style.wordBreak = "break-word";
			div.textContent = names[i] || "";

			fo.appendChild(div);
			holderG.appendChild(fo);
			labelG.appendChild(holderG);
			gWheel.appendChild(labelG);
		}

		// Hub
		const hub = document.createElementNS(svgNS, "circle");
		hub.setAttribute("cx", "0");
		hub.setAttribute("cy", "0");
		hub.setAttribute("r", centerRimRadius.toString());
		hub.setAttribute("fill", rimColor);
		gWheel.appendChild(hub);

		// Inner orange rim
		const innerRimColor = "#ff8a00";
		const innerRim = document.createElementNS(svgNS, "circle");
		innerRim.setAttribute("cx", "0");
		innerRim.setAttribute("cy", "0");
		innerRim.setAttribute("r", orangeRimRadius.toString());
		innerRim.setAttribute("fill", "none");
		innerRim.setAttribute("stroke", innerRimColor);
		innerRim.setAttribute("stroke-width", "4");
		innerRim.setAttribute("vector-effect", "non-scaling-stroke");
		gWheel.appendChild(innerRim);

		// Main rim
		const rim = document.createElementNS(svgNS, "circle");
		rim.setAttribute("cx", "0");
		rim.setAttribute("cy", "0");
		rim.setAttribute("r", outerRimRadius.toString());
		rim.setAttribute("fill", "none");
		rim.setAttribute("stroke", rimColor);
		rim.setAttribute("stroke-width", "30");
		rim.setAttribute("vector-effect", "non-scaling-stroke");
		gWheel.appendChild(rim);

		// Outer green rim
		const greenRim = document.createElementNS(svgNS, "circle");
		greenRim.setAttribute("cx", "0");
		greenRim.setAttribute("cy", "0");
		greenRim.setAttribute("r", outerRimRadius.toString());
		greenRim.setAttribute("fill", "none");
		greenRim.setAttribute("stroke", "#00A38E");
		greenRim.setAttribute("stroke-width", "10");
		greenRim.setAttribute("vector-effect", "non-scaling-stroke");
		gWheel.appendChild(greenRim);

		// Static center logo (does not rotate)
		placeStaticLogo(centerRimRadius);

		// Preserve rotation
		setWheelRotation(currentRotation);
		placeStaticPointer(segmentRadius);

		// --- helpers ---
		function makeStop(offsetPct, color)
		{
			const s = document.createElementNS(svgNS, "stop");
			s.setAttribute("offset", offsetPct + "%");
			s.setAttribute("stop-color", color);
			return s;
		}
	}

	// --- Static pointer drawn inside the wheel SVG (does not rotate) ---

	function placeStaticPointer(/* segmentRadius not used */)
	{
		const svg = document.getElementById("wheelSvg");
		if (!svg) return;
		const ns = "http://www.w3.org/2000/svg";

		// Remove previous
		const prev = document.getElementById("pointerStatic");
		if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

		// ===== Hard-coded position (SVG user units) =====
		const yTop = -267; // fixed position, not based on wheel size

		const g = document.createElementNS(ns, "g");
		g.id = "pointerStatic";
		g.setAttribute("pointer-events", "none");
		g.setAttribute("transform", `translate(0, ${yTop})`);

		// Append first (hidden) so we can read its screen CTM
		g.setAttribute("visibility", "hidden");
		svg.appendChild(g);

		// ===== Fixed on-screen width =====
		const desiredPxWidth = 44; // exact on-screen width (px)

		// Convert px -> local units using group's CTM (independent of wheel size)
		const ctm = g.getScreenCTM();
		const scaleX = Math.hypot(ctm.a, ctm.b) || 1;
		const W = desiredPxWidth / scaleX;       // local width that renders as 44px
		const H = (Math.sqrt(3) / 2) * W;        // equilateral → 60° angles

		// Corner rounding radius
		const cornerR = Math.max(0, W * 0.10);

		// Helper: rounded-corner triangle
		function triRoundedPath(ax, ay, bx, by, cx, cy, r)
		{
			function off(x1, y1, x2, y2, d)
			{
				const vx = x2 - x1, vy = y2 - y1;
				const L = Math.hypot(vx, vy) || 1;
				return [x1 + (vx * d) / L, y1 + (vy * d) / L];
			}
			const A = [ax, ay], B = [bx, by], C = [cx, cy];

			const Aab = off(A[0], A[1], B[0], B[1], r), Aac = off(A[0], A[1], C[0], C[1], r);
			const Bba = off(B[0], B[1], A[0], A[1], r), Bbc = off(B[0], B[1], C[0], C[1], r);
			const Ccb = off(C[0], C[1], B[0], B[1], r), Cca = off(C[0], C[1], A[0], A[1], r);

			return (
				`M ${Aac[0].toFixed(2)},${Aac[1].toFixed(2)} Q ${A[0].toFixed(2)},${A[1].toFixed(2)} ${Aab[0].toFixed(2)},${Aab[1].toFixed(2)} ` +
				`L ${Bba[0].toFixed(2)},${Bba[1].toFixed(2)} Q ${B[0].toFixed(2)},${B[1].toFixed(2)} ${Bbc[0].toFixed(2)},${Bbc[1].toFixed(2)} ` +
				`L ${Ccb[0].toFixed(2)},${Ccb[1].toFixed(2)} Q ${C[0].toFixed(2)},${C[1].toFixed(2)} ${Cca[0].toFixed(2)},${Cca[1].toFixed(2)} Z`
			);
		}

		// Equilateral triangle pointing down
		const ax = -W / 2, ay = -H;
		const bx = 0, by = 0;   // tip
		const cx = W / 2, cy = -H;

		// Outer
		const outer = document.createElementNS(ns, "path");
		outer.setAttribute("d", triRoundedPath(ax, ay, bx, by, cx, cy, cornerR));
		outer.setAttribute("fill", "#EE752A");
		outer.setAttribute("stroke", "#232e49");
		outer.setAttribute("stroke-width", "3");
		outer.setAttribute("stroke-linejoin", "round");
		outer.setAttribute("stroke-linecap", "round");
		outer.setAttribute("vector-effect", "non-scaling-stroke"); // 4px stays 4px
		g.appendChild(outer);

		// Inner (inset uniformly)
		const insetEdge = Math.max(1, W * 0.18);
		const innerAx = ax + insetEdge, innerAy = ay + insetEdge * Math.tan(Math.PI / 6);
		const innerBx = 0, innerBy = by - insetEdge;
		const innerCx = cx - insetEdge, innerCy = cy + insetEdge * Math.tan(Math.PI / 6);

		const inner = document.createElementNS(ns, "path");
		inner.setAttribute("d", triRoundedPath(innerAx, innerAy, innerBx, innerBy, innerCx, innerCy, cornerR * 0.6));
		inner.setAttribute("fill", "#00a38e");
		inner.setAttribute("stroke", "#232e49");
		inner.setAttribute("stroke-width", "3");
		inner.setAttribute("stroke-linejoin", "round");
		inner.setAttribute("stroke-linecap", "round");
		inner.setAttribute("vector-effect", "non-scaling-stroke");
		g.appendChild(inner);

		// Reveal
		g.setAttribute("visibility", "visible");
	}






	function toggleSoldOutUI(isSoldOut)
	{

		if (isSoldOut)
		{
			formWrap?.classList.remove('show');
			wheelWrap?.classList.remove('show');
			soldOutMsg?.classList.add('show');
		} else
		{
			soldOutMsg?.classList.remove('show');
			// Your normal logic can decide which one shows (form or wheel).
			// If you always want the wheel visible when not sold-out:
			wheelWrap?.classList.remove('show');
		}
	}


	// --- Data/load ---
	function loadData()
	{
		const all = getLocalPrizes();

		// …inside your load/refresh function, right after filtering:
		const active = all.filter(p => String(p.enabled).toUpperCase() === 'TRUE' && Number(p.stock) > 0);
		const numPrizesLeft = active.length;

		// NEW: if nothing left, show message and bail
		if (numPrizesLeft === 0)
		{
			toggleSoldOutUI(true);
			// Optionally also update any status text:
			const log = document.getElementById('log');
			if (log) log.textContent = 'All prizes are out of stock.';
			return; // stop drawing wheel etc.
		}
		else
		{
			toggleSoldOutUI(false);
		}

		names = active.map((p) => String(p.name || "").trim()).filter(Boolean);
		N = names.length;
		slice = N ? (2 * Math.PI) / N : 0;
		buildWheel();
		log.textContent = N
			? ""
			: "No prizes. Open config.html → insert sample → save → Reload.";
	}

	// --- Spin ---
	function positiveMod(a, n)
	{
		return ((a % n) + n) % n;
	}
	function easeOutCubic(t)
	{
		return 1 - Math.pow(1 - t, 3);
	}

	function animateSpin(startDeg, endDeg, dur, done)
	{
		const t0 = performance.now();
		function frame(now)
		{
			const t = Math.min(1, (now - t0) / dur);
			const deg = startDeg + (endDeg - startDeg) * easeOutCubic(t);
			setWheelRotation(deg);
			if (t < 1) requestAnimationFrame(frame);
			else done && done();
		}
		requestAnimationFrame(frame);
	}

	const spinBtn = document.getElementById("spinBtn");
	//const reloadBtn = document.getElementById("reloadBtn");

	function decrementStockByName(name)
	{
		const all = getLocalPrizes();
		for (const p of all)
		{
			if (String(p.name).trim() === name)
			{
				const s = Number(p.stock || 0);
				if (s > 0) p.stock = s - 1;
				break;
			}
		}
		setLocalPrizes(all);
	}

	spinBtn.addEventListener("click", () =>
	{
		if (isSpinning || N === 0) return;
		isSpinning = true;
		spinBtn.disabled = true;
		//reloadBtn.disabled = true;
		log.textContent = "Spinning...";
		const chosen = Math.floor(Math.random() * N);
		const sliceDeg = 360 / N;
		const centerDeg = chosen * sliceDeg + sliceDeg / 2;
		const remainder = positiveMod(currentRotation, 360);
		const align = positiveMod(-centerDeg - remainder, 360);
		const extraTurns = 4;
		const finalRot = currentRotation + extraTurns * 360 + align;
		animateSpin(currentRotation, finalRot, 3000, () =>
		{
			currentRotation = finalRot;
			const name = names[chosen];
			log.textContent = `Winner: ${name}`;
			decrementStockByName(name);
			onSpinEnd(name);
			isSpinning = false;
			spinBtn.disabled = false;
			//reloadBtn.disabled = false;
		});
	});

	//* Reload data from original prixes data */
	//reloadBtn.addEventListener("click", clearLocalPrizes);

	// --- On-screen keyboard for ALL inputs ---
	(function ()
	{
		// Which inputs should use the keyboard?
		const inputs = document.querySelectorAll(
			'#userForm input[type="text"], #userForm input[type="email"], #userForm input[type="search"], #userForm input[type="tel"], #userForm input:not([type])'
		);

		const kb = document.getElementById("vkb");
		let active = null; // currently focused input

		function showKB(forEl)
		{
			if (!forEl || forEl.disabled || forEl.readOnly) return;
			active = forEl;
			kb.classList.add("show");
			kb.setAttribute("aria-hidden", "false");
			// keep caret where user tapped
			active.focus();
		}

		function hideKB()
		{
			kb.classList.remove("show");
			kb.setAttribute("aria-hidden", "true");
			active = null;
		}

		function insert(txt)
		{
			if (!active) return;
			const s = active.selectionStart ?? active.value.length;
			const e = active.selectionEnd ?? s;
			active.value = active.value.slice(0, s) + txt + active.value.slice(e);
			const p = s + txt.length;
			active.setSelectionRange(p, p);
			active.dispatchEvent(new Event("input", { bubbles: true }));
			active.focus();
		}

		function backspace()
		{
			if (!active) return;
			const s = active.selectionStart ?? active.value.length;
			const e = active.selectionEnd ?? s;
			if (s !== e)
			{
				active.value = active.value.slice(0, s) + active.value.slice(e);
				active.setSelectionRange(s, s);
			} else if (s > 0)
			{
				active.value = active.value.slice(0, s - 1) + active.value.slice(e);
				active.setSelectionRange(s - 1, s - 1);
			}
			active.dispatchEvent(new Event("input", { bubbles: true }));
			active.focus();
		}

		// Wire up all matching inputs
		inputs.forEach((el) =>
		{
			el.addEventListener("focus", () => showKB(el));
			el.addEventListener("click", () => showKB(el));
			// keep keyboard’s internal value in sync if user types (e.g., physical kb)
			el.addEventListener("input", () =>
			{
				// no-op here unless you mirror text onto keys; kept for completeness
			});
		});

		// Keyboard button handling
		kb.addEventListener("pointerdown", (ev) =>
		{
			const t = ev.target.closest(".kb-key");
			if (!t) return;
			ev.preventDefault();
			const a = t.getAttribute("data-action");
			if (a === "back") return backspace();
			if (a === "clear")
			{
				if (!active) return;
				active.value = "";
				active.dispatchEvent(new Event("input", { bubbles: true }));
				active.focus();
				return;
			}
			if (a === "done") return hideKB();
			const ch = t.getAttribute("data-key");
			if (ch != null) insert(ch);
		});

		// Hide keyboard if clicking outside both an input and the keyboard
		document.addEventListener("pointerdown", (ev) =>
		{
			const target = ev.target;
			const clickedAnInput = [...inputs].some((el) => el === target || el.contains(target));
			if (!clickedAnInput && !kb.contains(target)) hideKB();
		});

		// If the focused input disappears (e.g., form hidden), hide keyboard
		document.addEventListener("visibilitychange", () =>
		{
			if (document.hidden) hideKB();
		});
	})();

	// --- Init ---
	//mountPageBackground();
	//adjustPageHeightForBg();
	//window.addEventListener("resize", adjustPageHeightForBg);
	//window.addEventListener("orientationchange", adjustPageHeightForBg);
	loadData();

	/*function mountStand() {
	  const wrap  = document.getElementById("wrap");
	  const wheel = document.getElementById("wheelSvg");
	  const layer = document.getElementById("standLayer");
	  if (!wrap || !wheel || !layer || !window.STAND_VIEWBOX || !window.STAND_BODY) return;
	
	  // layer styling

	  const wrapRect  = wrap.getBoundingClientRect();
	  const wheelRect = wheel.getBoundingClientRect();
	
	  // Use wheel’s width if available, else fallback to wrap width
	  let wheelW = wheelRect.width || wrapRect.width || 0;
	  if (!wheelW) return; // still zero → bail; we'll be called again by ResizeObserver
	
	  // ~0.647 of wheel width
	  const targetWidth = Math.round(wheelW * 0.647);
	
	  // Aspect from viewBox
	  const [ , , vbW = 1, vbH = 1 ] = STAND_VIEWBOX.split(/\s+/).map(parseFloat);
	  const targetHeight = Math.round(targetWidth * (vbH / vbW));
	
	  // Build SVG
	  const ns = "http://www.w3.org/2000/svg";
	  const s = document.createElementNS(ns, "svg");
	  s.setAttribute("width", String(targetWidth));
	  s.setAttribute("height", String(targetHeight));
	  s.setAttribute("viewBox", STAND_VIEWBOX);
	  s.setAttribute("aria-hidden", "true");
	  s.style.overflow = "visible";
	  s.innerHTML = STAND_BODY;
	
	  // Solid trapezoid overlay (as you had)
	  try {
		const [ , , w, h ] = STAND_VIEWBOX.split(/\s+/).map(parseFloat);
		const cx = w / 2, topW = w * 0.4, botW = w * 0.82;
		const topY = h * 0.14, height = h * 0.78;
		const x1 = cx - topW/2, x2 = cx + topW/2, x3 = cx + botW/2, x4 = cx - botW/2;
		const y1 = topY, y2 = topY + height;
		const t = document.createElementNS(ns, "path");
		t.setAttribute("d",
		  `M ${x4.toFixed(2)},${y2.toFixed(2)} L ${x1.toFixed(2)},${y1.toFixed(2)} L ${x2.toFixed(2)},${y1.toFixed(2)} L ${x3.toFixed(2)},${y2.toFixed(2)} Z`
		);
		t.setAttribute("fill", "#232e49");
		t.setAttribute("opacity", "1");
		t.setAttribute("vector-effect", "non-scaling-stroke");
		s.appendChild(t);
	  } catch {}
	
	  // Position: centered under wheel, lifted by 160px
	  const wheelCenterX = wheelRect.left - wrapRect.left + (wheelRect.width || wheelW) / 2;
	  const wheelBottomY = wheelRect.top  - wrapRect.top  + (wheelRect.height || wheelW) * 0.75;
	  //const top  = Math.round(wheelBottomY - Math.min(20, targetHeight * 0.05) - 160);
	  //const left = Math.round(wheelCenterX - targetWidth / 2);
	
	  //layer.style.left   = left + "px";
	  //layer.style.top    = top  + "px";
	  //layer.style.width  = targetWidth  + "px";
	  //layer.style.height = targetHeight + "px";
	  layer.innerHTML = "";
	  layer.appendChild(s);
	}

	window.addEventListener("load", mountStand);
	window.addEventListener("resize", mountStand);
	


	function setupStandMount() {
	// run after layout
	requestAnimationFrame(() => requestAnimationFrame(mountStand));
	// resize
	window.addEventListener("resize", mountStand);
	
	// observe wheel and wrapper for size changes (incl. when shown/hidden)
	const ro = new ResizeObserver(mountStand);
	const wheel = document.getElementById("wheelSvg");
	const wrap  = document.getElementById("wrap");
	if (wheel) ro.observe(wheel);
	if (wrap)  ro.observe(wrap);
	}
	
	// call once during init
	setupStandMount();
	*/

})();



// Move Reload + Open config to bottom-left container without breaking behavior
/*(function ()
{
	function moveControls()
	{
		//var reload = document.getElementById("reloadBtn");
		var config = document.querySelector('a[href="config.html"]');
		var ctl = document.getElementById("bottomControls");
		if (!ctl)
		{
			ctl = document.createElement("div");
			ctl.id = "bottomControls";
			document.body.appendChild(ctl);
		}
		//if (reload && reload.parentNode !== ctl) ctl.appendChild(reload);
		if (config && config.parentNode !== ctl) ctl.appendChild(config);
	}
	window.addEventListener("load", moveControls);
})();*/

// Ensure pressed visual on touch & keyboard
(function ()
{
	var btn = document.getElementById("spinBtn");
	if (!btn) return;
	var press = function ()
	{
		btn.classList.add("is-pressed");
	};
	var release = function ()
	{
		btn.classList.remove("is-pressed");
	};
	btn.addEventListener("pointerdown", press, { passive: true });
	window.addEventListener("pointerup", release, { passive: true });
	btn.addEventListener("keydown", function (e)
	{
		if (e.key === " " || e.key === "Enter")
		{
			press();
		}
	});
	btn.addEventListener("keyup", release);
	btn.addEventListener("blur", release);
})();

/* Bottom base highlight on the stand (lighter blue rounded rectangle, thinner) */
/*
(function ()
{
	function addBaseRect()
	{
		var layer = document.getElementById("standLayer");
		if (!layer) return;

		// Find the stand's SVG the overlay script created
		var svg = layer.querySelector("svg");
		if (!svg) return;

		// Avoid duplicates
		if (svg.querySelector("#standBaseRect")) return;

		// Use the stand's viewBox units so it scales cleanly
		var vb =
			svg.viewBox && svg.viewBox.baseVal
				? svg.viewBox.baseVal
				: { x: 0, y: 0, width: 100, height: 100 };

		var vbW = vb.width,
			vbH = vb.height;
		var ns = "http://www.w3.org/2000/svg";

		// CSS-pixel to viewBox-units scale (for precise pixel offsets)
		var px2vb = vbH / (svg.getBoundingClientRect().height || 1);

		// Geometry (thinner, lowered by 25px, slight rounding)
		var rectW = vbW * 0.92; // width (70% of stand width)
		var rectH = vbH * 0.07; // thinner: 7% of stand height
		var rectX = (vbW - rectW) / 2; // centered
		var rectY = vbH * 0.82 + 40 * px2vb; // lowered by 25px
		var rad = vbH * 0.028; // reduced corner radius

		var r = document.createElementNS(ns, "rect");
		r.setAttribute("id", "standBaseRect");
		r.setAttribute("x", rectX);
		r.setAttribute("y", rectY);
		r.setAttribute("width", rectW);
		r.setAttribute("height", rectH);
		r.setAttribute("rx", rad);
		r.setAttribute("ry", rad);
		r.setAttribute("fill", "#3f5d8a"); // lighter blue
		r.setAttribute("opacity", "1");

		// Append on top of the stand artwork (still behind the wheel via z-index)
		svg.appendChild(r);
	}

	window.addEventListener("load", addBaseRect);
	window.addEventListener("resize", addBaseRect);
})();
*/


// Lightweight, seamless-loop confetti (top -> bottom), various sizes
(function ()
{
	const canvas = document.getElementById("confettiCanvas");
	if (!canvas) return;
	const ctx = canvas.getContext("2d");

	let DPR = Math.min(2, window.devicePixelRatio || 1);
	function resize()
	{
		const w = window.innerWidth;
		const h = window.innerHeight;
		canvas.style.width = w + "px";
		canvas.style.height = h + "px";
		canvas.width = Math.floor(w * DPR);
		canvas.height = Math.floor(h * DPR);
	}
	window.addEventListener("resize", () =>
	{
		DPR = Math.min(2, window.devicePixelRatio || 1);
		resize();
	});
	resize();

	const colors = ["#009FDF", "#232E49", "#EE752A", "#00a38e", "#ffffff"];
	const MAX = Math.min(
		400,
		Math.floor((window.innerWidth * window.innerHeight) / 10000),
	); // density
	const particles = [];

	function rand(min, max)
	{
		return Math.random() * (max - min) + min;
	}
	function pick(arr)
	{
		return arr[(Math.random() * arr.length) | 0];
	}

	function spawnOne(x)
	{
		const sizeType = Math.random();
		const w =
			sizeType < 0.65
				? rand(2, 5)
				: sizeType < 0.9
					? rand(6, 10)
					: rand(10, 15);
		const h = w * rand(0.5, 1.2);
		return {
			x: x ?? rand(0, window.innerWidth),
			y: rand(-window.innerHeight * 0.2, -10),
			w,
			h,
			color: pick(colors),
			vx: rand(-20, 20), // px/s lateral
			vy: rand(25, 70), // px/s downward
			ang: rand(0, Math.PI * 2), // radians
			spin: rand(-3, 3), // rad/s
			wobble: rand(10, 35), // px wobble radius
			wobbleSpeed: rand(1, 3), // cycles/s
			t: rand(0, Math.PI * 2),
		};
	}

	// continuous init: scatter particles across the full viewport for a de-synced start
	let spawnAcc = 0;
	const FILL_TIME = 4; // used only for replenishing after resizes
	const SPAWN_RATE = MAX / FILL_TIME; // particles per second when refilling
	const hCSS0 = canvas.height / DPR;
	for (let i = 0; i < MAX; i++)
	{
		const p = spawnOne();
		p.y = (Math.random() * 2 - 1) * hCSS0; // scatter full-screen vertically
		p.x += Math.random() * 60 - 30;
		p.vy *= 0.8 + Math.random() * 0.4;
		p.vx *= 0.8 + Math.random() * 0.4;
		particles.push(p);
	}
	let last = performance.now();
	function frame(now)
	{
		const dt = Math.min(0.033, (now - last) / 1000); // seconds (cap at ~30fps step)
		last = now;

		const W = canvas.width,
			H = canvas.height;
		const wCSS = W / DPR,
			hCSS = H / DPR;

		ctx.clearRect(0, 0, W, H);

		for (let i = 0; i < particles.length; i++)
		{
			const p = particles[i];
			// physics
			p.vy += 30 * dt; // gentle "gravity" px/s^2
			p.t += p.wobbleSpeed * dt * Math.PI * 2;
			p.x += p.vx * dt + Math.cos(p.t) * (p.wobble * dt);
			p.y += p.vy * dt;
			p.ang += p.spin * dt;

			// recycle when off-screen
			if (p.y - p.h > hCSS)
			{
				// respawn at top with fresh params
				particles[i] = spawnOne();
				continue;
			}

			// draw
			ctx.save();
			ctx.translate(p.x * DPR, p.y * DPR);
			ctx.rotate(p.ang);
			ctx.fillStyle = p.color;
			ctx.fillRect(
				(-p.w / 2) * DPR,
				(-p.h / 2) * DPR,
				p.w * DPR,
				p.h * DPR,
			);
			ctx.restore();
		}

		// keep population up with staggered spawns (avoid waves)
		spawnAcc += SPAWN_RATE * dt;
		while (particles.length < MAX && spawnAcc >= 1)
		{
			particles.push(spawnOne());
			spawnAcc -= 1 + Math.random() * 0.75; // jitter
		}
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
})();



document.addEventListener('DOMContentLoaded', () =>
{
	const termsLink = document.getElementById('termsLink');   // your checkbox
	const modal = document.getElementById('termsModal');
	const closeBtn = document.getElementById('closeTerms');

	// Show modal when checkbox is clicked
	termsLink.addEventListener('click', () =>
	{
		modal.style.display = 'flex';
	});

	// Close modal on back arrow
	closeBtn.addEventListener('click', () =>
	{
		modal.style.display = 'none';
	});

	// Close if user taps outside the card
	modal.addEventListener('click', (e) =>
	{
		if (e.target === modal) modal.style.display = 'none';
	});
});



