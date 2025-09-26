(function ()
{
	const FORM_KEY = "wheel_users";

	const formWrap = document.getElementById("userFormWrap");
	const form = document.getElementById("userForm");
	const wheelWrap = document.getElementById("wheelWrap");
	const congratsMsg = document.getElementById("congratsMsg");
	const soldOutMsg = document.getElementById("soldOutMsg");

	// --- Landing overlay (tap-only, no auto-advance) ---
	const landing = document.getElementById("landing");
	const landingVideo = document.getElementById("landingVideo");

	// sequence: screen1.mp4 → tap → screen2.mp4 → tap → form
	const introVideos = ["videos/Screen1.mp4", "videos/Screen2.mp4"];

	let introIndex = 0;
	let landingFinished = false;
	let advancing = false;
	let SOLD_OUT = false;

	function showLanding()
	{
		if (SOLD_OUT)
		{
			toggleSoldOutUI(true);
			return;
		}
		landing?.classList.remove('hide');
		formWrap?.classList.remove('show');
		wheelWrap?.classList.remove('show');
		congratsMsg?.classList.remove('show');
		soldOutMsg?.classList.remove('show');

		landingFinished = false;
		advancing = false;
		introIndex = 0;

		playIntro(0);
	}

	function playIntro(i)
	{
		if (!landingVideo) return;

		if (i < 0 || i >= introVideos.length)
		{
			finishLanding();
			return;
		}

		introIndex = i;
		let s = landingVideo.querySelector("source");
		if (!s)
		{
			s = document.createElement("source");
			landingVideo.appendChild(s);
		}
		s.src = introVideos[i];
		s.type = "video/mp4";

		landingVideo.muted = true;
		landingVideo.playsInline = true;
		landingVideo.loop = true;

		try { landingVideo.load(); } catch { }
		landingVideo.play().catch(() => { });
	}

	function advanceLanding()
	{
		if (advancing || landingFinished) return;
		advancing = true;

		if (introIndex >= introVideos.length - 1)
		{
			finishLanding();
		} else
		{
			playIntro(introIndex + 1);
			setTimeout(() => (advancing = false), 150);
		}
	}

	landing?.addEventListener("click", (e) =>
	{
		if (SOLD_OUT) return;
		e.preventDefault();
		advanceLanding();
	});

	function finishLanding()
	{
		if (landingFinished) return;
		landingFinished = true;
		landing?.classList.add("hide");

		if (landingVideo)
		{
			try { landingVideo.pause(); } catch { }
			const s = landingVideo.querySelector("source");
			if (s) s.removeAttribute("src");
			landingVideo.removeAttribute("src");
			try { landingVideo.load(); } catch { }
		}

		showForm();
	}

	function showForm()
	{
		if (SOLD_OUT)
		{
			toggleSoldOutUI(true);
			return;
		}
		formWrap.classList.add("show");
		wheelWrap.classList.remove("show");
		congratsMsg.classList.remove("show");
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
		if (SOLD_OUT) return;

		const newUser = {
			name: document.getElementById("name").value.trim(),
			company: document.getElementById("company").value.trim(),
			email: document.getElementById("email").value.trim(),
			marketing: document.getElementById("marketing").checked,
			ts: Date.now(),
			synced: 0,
		};

		const existing = JSON.parse(localStorage.getItem(FORM_KEY) || "[]");
		existing.push(newUser);
		localStorage.setItem(FORM_KEY, JSON.stringify(existing));

		form.reset();
		showWheel();
	});

	// Hook into spin finish
	async function onSpinEnd(prizeName)
	{
		setTimeout(() =>
		{
			congratsMsg?.classList.add("show");

			const video = document.getElementById("congratsVideo");
			if (video)
			{
				video.querySelector("source").src = `videos/${prizeName}.mp4`;
				video.load();
				video.play();
			}

			setTimeout(() =>
			{
				congratsMsg?.classList.remove("show");
				const stillHasPrizes = loadData();
				if (!stillHasPrizes)
				{
					// Already in sold-out state
					return;
				}
				showLanding();
			}, 5000);
		}, 2000);
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

	// --- State ---
	let names = [];
	let N = 0;
	let slice = 0;
	let currentRotation = 0;
	let isSpinning = false;

	// --- Elements ---
	const svg = document.getElementById("wheelSvg");
	const gWheel = document.getElementById("wheelGroup");
	const log = document.getElementById("log");

	function setWheelRotation(deg)
	{
		gWheel.setAttribute("transform", `rotate(${deg})`);
	}

	// --- Static (non-rotating) center logo ---
	function placeStaticLogo(centerRimRadius)
	{
		const old = document.getElementById("logoStatic");
		if (old && old.parentNode) old.parentNode.removeChild(old);

		const logoSize = Math.floor(centerRimRadius * 1.6);
		const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
		img.id = "logoStatic";
		img.setAttribute("href", "img/nuaire-logo.png");
		img.setAttribute("width", logoSize);
		img.setAttribute("height", logoSize);
		img.setAttribute("x", -logoSize / 2);
		img.setAttribute("y", -logoSize / 2);
		img.setAttribute("pointer-events", "none");

		svg.appendChild(img);
	}

	// --- Build wheel ---
	function buildWheel()
	{
		const rimColor = "#232E49";
		const segmentRadius = 290;
		const outerRimRadius = segmentRadius;
		const centerRimRadius = 80;
		const orangeRimRadius = 74;

		const LABEL_WIDTH = 170;
		const LABEL_HEIGHT = 60;
		const LABEL_OFFSET = -10;
		const LABEL_UPRIGHT = false;

		while (gWheel.firstChild) gWheel.removeChild(gWheel.firstChild);

		const svgNS = "http://www.w3.org/2000/svg";
		const svg = gWheel.closest("svg");

		let defs = svg.querySelector("defs");
		if (!defs)
		{
			defs = document.createElementNS(svgNS, "defs");
			svg.insertBefore(defs, svg.firstChild);
		} else
		{
			defs.innerHTML = "";
		}

		const rSlice = segmentRadius - 4;
		const labelBaseRadius = (centerRimRadius + rSlice) / 2;

		for (let i = 0; i < N; i++)
		{
			const start = i * slice - Math.PI / 2;
			const end = start + slice;
			const mid = start + slice / 2;
			const midDeg = (mid * 180) / Math.PI;

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

			if (N === 1)
			{
				// Draw a full circle instead of a wedge
				const circle = document.createElementNS(svgNS, "circle");
				circle.setAttribute("cx", "0");
				circle.setAttribute("cy", "0");
				circle.setAttribute("r", rSlice.toString());
				circle.setAttribute("fill", `url(#${gradId})`);
				gWheel.appendChild(circle);
			} else
			{
				const p = document.createElementNS(svgNS, "path");
				p.setAttribute("d", arcWedgePath(rSlice, start, end));
				p.setAttribute("fill", `url(#${gradId})`);
				p.setAttribute("vector-effect", "non-scaling-stroke");
				gWheel.appendChild(p);
			}

			const labelRadius = Math.round(labelBaseRadius + LABEL_OFFSET);
			const labelG = document.createElementNS(svgNS, "g");
			labelG.setAttribute(
				"transform",
				`rotate(${midDeg}) translate(${labelRadius},0)`
			);

			const holderG = document.createElementNS(svgNS, "g");
			if (LABEL_UPRIGHT) holderG.setAttribute("transform", `rotate(${-midDeg})`);

			const fo = document.createElementNS(svgNS, "foreignObject");
			fo.setAttribute("x", (-LABEL_WIDTH / 2).toString());
			fo.setAttribute("y", (-LABEL_HEIGHT / 2).toString());
			fo.setAttribute("width", LABEL_WIDTH.toString());
			fo.setAttribute("height", LABEL_HEIGHT.toString());

			const div = document.createElement("div");
			div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
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

		const hub = document.createElementNS(svgNS, "circle");
		hub.setAttribute("cx", "0");
		hub.setAttribute("cy", "0");
		hub.setAttribute("r", centerRimRadius.toString());
		hub.setAttribute("fill", rimColor);
		gWheel.appendChild(hub);

		const innerRim = document.createElementNS(svgNS, "circle");
		innerRim.setAttribute("cx", "0");
		innerRim.setAttribute("cy", "0");
		innerRim.setAttribute("r", orangeRimRadius.toString());
		innerRim.setAttribute("fill", "none");
		innerRim.setAttribute("stroke", "#ff8a00");
		innerRim.setAttribute("stroke-width", "4");
		gWheel.appendChild(innerRim);

		const rim = document.createElementNS(svgNS, "circle");
		rim.setAttribute("cx", "0");
		rim.setAttribute("cy", "0");
		rim.setAttribute("r", outerRimRadius.toString());
		rim.setAttribute("fill", "none");
		rim.setAttribute("stroke", rimColor);
		rim.setAttribute("stroke-width", "30");
		gWheel.appendChild(rim);

		const greenRim = document.createElementNS(svgNS, "circle");
		greenRim.setAttribute("cx", "0");
		greenRim.setAttribute("cy", "0");
		greenRim.setAttribute("r", outerRimRadius.toString());
		greenRim.setAttribute("fill", "none");
		greenRim.setAttribute("stroke", "#00A38E");
		greenRim.setAttribute("stroke-width", "10");
		gWheel.appendChild(greenRim);

		placeStaticLogo(centerRimRadius);
		setWheelRotation(currentRotation);
		placeStaticPointer(segmentRadius);

		function makeStop(offsetPct, color)
		{
			const s = document.createElementNS(svgNS, "stop");
			s.setAttribute("offset", offsetPct + "%");
			s.setAttribute("stop-color", color);
			return s;
		}
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

	// --- Static pointer ---
	function placeStaticPointer()
	{
		const svg = document.getElementById("wheelSvg");
		if (!svg) return;
		const ns = "http://www.w3.org/2000/svg";

		const prev = document.getElementById("pointerStatic");
		if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

		const yTop = -262;

		const g = document.createElementNS(ns, "g");
		g.id = "pointerStatic";
		g.setAttribute("pointer-events", "none");
		g.setAttribute("transform", `translate(0, ${yTop})`);

		const desiredPxWidth = 60;
		const ctm = g.getScreenCTM();
		const scaleX = Math.hypot(ctm.a, ctm.b) || 1;
		const W = desiredPxWidth / scaleX;
		const H = (Math.sqrt(3) / 2) * W;

		const cornerR = Math.max(0, W * 0.10);

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

		const ax = -W / 2, ay = -H;
		const bx = 0, by = 0;
		const cx = W / 2, cy = -H;

		const outer = document.createElementNS(ns, "path");
		outer.setAttribute("d", triRoundedPath(ax, ay, bx, by, cx, cy, cornerR));
		outer.setAttribute("fill", "#EE752A");
		outer.setAttribute("stroke", "#232e49");
		outer.setAttribute("stroke-width", "3");
		g.appendChild(outer);

		const insetEdge = Math.max(1, W * 0.18);
		const innerAx = ax + insetEdge, innerAy = ay + insetEdge * Math.tan(Math.PI / 6);
		const innerBx = 0, innerBy = by - insetEdge;
		const innerCx = cx - insetEdge, innerCy = cy + insetEdge * Math.tan(Math.PI / 6);

		const inner = document.createElementNS(ns, "path");
		inner.setAttribute("d", triRoundedPath(innerAx, innerAy, innerBx, innerBy, innerCx, innerCy, cornerR * 0.6));
		inner.setAttribute("fill", "#00a38e");
		inner.setAttribute("stroke", "#232e49");
		inner.setAttribute("stroke-width", "3");
		g.appendChild(inner);

		svg.appendChild(g);
	}

	function toggleSoldOutUI(isSoldOut)
	{
		SOLD_OUT = !!isSoldOut;

		if (SOLD_OUT)
		{
			landing?.classList.add('hide');
			formWrap?.classList.remove('show');
			wheelWrap?.classList.remove('show');
			congratsMsg?.classList.remove('show');
			soldOutMsg?.classList.add('show');

			if (landingVideo)
			{
				try { landingVideo.pause(); } catch { }
				const s = landingVideo.querySelector('source');
				if (s) s.removeAttribute('src');
				landingVideo.removeAttribute('src');
				try { landingVideo.load(); } catch { }
			}
		} else
		{
			soldOutMsg?.classList.remove('show');
		}
	}

	// --- Data/load ---
	function loadData()
	{
		const all = getLocalPrizes();
		const active = all.filter(p => String(p.enabled).toUpperCase() === 'TRUE' && Number(p.stock) > 0);

		if (active.length === 0)
		{
			toggleSoldOutUI(true);
			const log = document.getElementById('log');
			if (log) log.textContent = 'All prizes are out of stock.';
			return false;
		}

		toggleSoldOutUI(false);

		names = active.map(p => String(p.name || '').trim()).filter(Boolean);
		N = names.length;
		slice = N ? (2 * Math.PI) / N : 0;
		buildWheel();
		log.textContent = N ? '' : 'No prizes. Open config.html → insert sample → save → Reload.';
		return true;
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

	function startSpin()
	{
		if (isSpinning || N === 0) return;
		isSpinning = true;
		spinBtn.disabled = true;

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
			decrementStockByName(name);
			onSpinEnd(name);
			isSpinning = false;
			spinBtn.disabled = false;
		});
	}

	// Spin on #spinBtn click
	spinBtn.addEventListener("click", (e) =>
	{
		if (SOLD_OUT) return;
		if (!wheelWrap.classList.contains("show")) return;
		startSpin();
	});

	// Spin on any other screen tap
	document.body.addEventListener("click", (e) =>
	{
		if (SOLD_OUT) return;
		if (!wheelWrap.classList.contains("show")) return;
		if (e.target.closest("#congratsMsg, #soldOutMsg, #termsModal, #spinBtn")) return;
		startSpin();
	});

	// --- Init ---
	const hasPrizes = loadData();
	if (hasPrizes)
	{
		showLanding();
	}
})();


// --- On-screen keyboard for ALL inputs ---
// Auto Title Case for Name & Company fields
// Virtual Keyboard with Shift, Caps, and field-specific casing
(function ()
{
	const kb = document.getElementById("vkb");
	if (!kb) return;

	// Which inputs use the keyboard?
	const fields = document.querySelectorAll(
		'#userForm input[type="text"], #userForm input[type="email"], #userForm input[type="search"], #userForm input[type="tel"], #userForm input:not([type])'
	);

	let active = null;

	const state = {
		shift: false,         // one-shot
		caps: false,          // sticky
		autoCapNext: false,   // for name/company (first char and after spaces)
		forceLower: false     // for email
	};

	function isNameLike(el)
	{
		return el && (el.id === "name" || el.id === "company");
	}
	function isEmail(el)
	{
		return el && el.id === "email";
	}

	// Update the printed labels (letters only). Space/@/.-_ etc are left alone.
	function updateLabels()
	{
		const keys = kb.querySelectorAll('.kb-key[data-key]');
		keys.forEach(k =>
		{
			const base = (k.getAttribute('data-key') || '').toLowerCase();

			// Only change 1-char A–Z letter keys
			if (base.length === 1 && /[a-z]/.test(base))
			{
				const shouldUpper =
					(state.caps ^ state.shift) || (isNameLike(active) && state.autoCapNext);
				k.textContent = shouldUpper ? base.toUpperCase() : base.toLowerCase();
			}
		});

		// Optional: add a visual cue for shift/caps if you style `.on`
		kb.querySelectorAll('.kb-key[data-action="shift"]').forEach(el => el.classList.toggle('on', state.shift));
		kb.querySelectorAll('.kb-key[data-action="caps"]').forEach(el => el.classList.toggle('on', state.caps));
	}

	function showKB(forEl)
	{
		if (!forEl || forEl.disabled || forEl.readOnly) return;
		active = forEl;

		// Mode per field
		state.forceLower = isEmail(active);
		if (isNameLike(active))
		{
			const v = active.value || "";
			state.autoCapNext = v.length === 0 || /\s$/.test(v);
		} else
		{
			state.autoCapNext = false;
		}
		// Do not force shift on; we preview using autoCapNext
		state.shift = false;

		updateLabels();
		kb.classList.add("show");
		kb.setAttribute("aria-hidden", "false");
		active.focus();
	}

	function hideKB()
	{
		kb.classList.remove("show");
		kb.setAttribute("aria-hidden", "true");
		active = null;
		state.shift = false;
		updateLabels();
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
			active.value = active.value.slice(0, s - 1) + active.value.slice(s);
			active.setSelectionRange(s - 1, s - 1);
		}

		// After backspace, decide autoCapNext for name/company
		if (isNameLike(active))
		{
			const left = active.value.slice(0, active.selectionStart ?? 0);
			state.autoCapNext = left.length === 0 || /\s$/.test(left);
		}

		active.dispatchEvent(new Event("input", { bubbles: true }));
		active.focus();
		updateLabels();
	}

	function clearField()
	{
		if (!active) return;
		active.value = "";
		active.dispatchEvent(new Event("input", { bubbles: true }));
		active.focus();
		if (isNameLike(active)) state.autoCapNext = true;
		updateLabels();
	}

	function insertChar(rawKey)
	{
		if (!active) return;

		// base key (normalize to lower for processing)
		let ch = (rawKey || "").toString();
		let base = ch.toLowerCase();

		// Compute casing for letters
		if (/[a-z]/i.test(base))
		{
			let makeUpper = false;

			// Email is always lower
			if (state.forceLower)
			{
				base = base.toLowerCase();
			} else
			{
				if (state.caps ^ state.shift) makeUpper = true;                         // Shift XOR Caps
				if (!state.caps && !state.shift && isNameLike(active) && state.autoCapNext)
				{
					makeUpper = true;                                                     // Auto-cap first/after space
				}
				base = makeUpper ? base.toUpperCase() : base.toLowerCase();
			}
		}

		// Insert into input preserving selection
		const s = active.selectionStart ?? active.value.length;
		const e = active.selectionEnd ?? s;
		const before = active.value.slice(0, s);
		const after = active.value.slice(e);
		active.value = before + base + after;
		const p = s + base.length;
		active.setSelectionRange(p, p);
		active.dispatchEvent(new Event("input", { bubbles: true }));
		active.focus();

		// Update autoCapNext for name/company
		if (isNameLike(active))
		{
			if (base === " ") state.autoCapNext = true;
			else if (/[A-Za-z]/.test(base)) state.autoCapNext = false;
		}

		// Shift is one-shot
		if (state.shift) state.shift = false;

		updateLabels();
	}

	// Event delegation for the whole keyboard
	kb.addEventListener("click", (ev) =>
	{
		const t = ev.target.closest(".kb-key");
		if (!t) return;

		const action = t.getAttribute("data-action");
		if (action === "back") return backspace();
		if (action === "clear") return clearField();
		if (action === "done") return hideKB();
		if (action === "shift") { state.shift = !state.shift; return updateLabels(); }
		if (action === "caps") { state.caps = !state.caps; return updateLabels(); }

		const key = t.getAttribute("data-key");
		if (key != null) insertChar(key);
	});

	// Wire inputs
	fields.forEach((el) =>
	{
		el.addEventListener("focus", () => showKB(el));
		el.addEventListener("click", () => showKB(el));

		if (isEmail(el))
		{
			el.setAttribute("autocapitalize", "none");
			el.addEventListener("input", () =>
			{
				// Hard-enforce lowercase for email (caret preserved)
				const pos = el.selectionStart;
				const v = el.value;
				const lower = v.toLowerCase();
				if (v !== lower)
				{
					el.value = lower;
					if (pos != null) el.setSelectionRange(pos, pos);
				}
			});
		} else if (isNameLike(el))
		{
			el.setAttribute("autocapitalize", "words");
		}
	});

	// Hide keyboard when tapping outside inputs & keyboard
	document.addEventListener("pointerdown", (ev) =>
	{
		const target = ev.target;
		const clickedAnInput = [...fields].some((el) => el === target || el.contains(target));
		if (!clickedAnInput && !kb.contains(target)) hideKB();
	});
})();

