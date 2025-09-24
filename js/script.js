(function () {
	
	
	const FORM_KEY = "wheel_users";
	
	const formWrap = document.getElementById("userFormWrap");
	const form = document.getElementById("userForm");
	const wheelWrap = document.getElementById("wheelWrap");
	const congratsMsg = document.getElementById('congratsMsg');
	const soldOutMsg = document.getElementById('soldOutMsg');

	showForm();

	function showForm() {
		formWrap.classList.add("show");
		wheelWrap.classList.remove("show");
		congratsMsg.classList.remove("show");
	}
	function hideFormAndWheel() {
		formWrap.classList.remove("show");
		wheelWrap.classList.remove("show");
	}

	function showWheel() {
		wheelWrap.classList.add("show");
		formWrap.classList.remove("show");
	}


	// Handle form submit
	form.addEventListener("submit", (e) => {
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
	async function onSpinEnd(prizeName) {
	  // Update congratulations text
	  const prizeEl = document.getElementById('congratsPrize');
	  /*if (prizeEl) prizeEl.innerHTML = `
	  A ${prizeName}<br/><br/><br/>
	  <img class="prize-img" src="img/${prizeName}.png"/>
	  `;*/
	  if (prizeEl) prizeEl.innerHTML = `
		<br/><br/><br/>
		<img class="prize-img" src="img/${prizeName}.png"/>
		`;
		
	  // Show congratulations message
	  
	  setTimeout(() => {
		hideFormAndWheel();
		congratsMsg?.classList.add('show');

		setTimeout(() => {
		// Hide message
			congratsMsg?.classList.remove('show');
			loadData();
	  	}, 10000);
	  }, 2000);
	  
	}

	// --- Data storage ---
	const LS_KEY = "prizes_minimal_v2";

	function getLocalPrizes() {
		try {
			return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
		} catch {
			return [];
		}
	}

	function setLocalPrizes(rows) {
		localStorage.setItem(LS_KEY, JSON.stringify(rows));
	}

	function clearLocalPrizes() {
		if (
			confirm(
				"Are you sure you want to reset prizes to the original? This cannot be undone.",
			)
		) {
			setLocalPrizes(initData);
			showForm();
			loadData();
		} else {
			// User cancelled — do nothing
			console.log("Reset cancelled");
		}
	}

	// --- Initialise only if not already present ---
	if (!localStorage.getItem(LS_KEY)) {
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
	function hexToRgb(h) {
		const s = h.replace("#", "");
		return {
			r: parseInt(s.slice(0, 2), 16),
			g: parseInt(s.slice(2, 4), 16),
			b: parseInt(s.slice(4, 6), 16),
		};
	}
	function lerp(a, b, t) {
		return a + (b - a) * t;
	}
	const RGB_A = hexToRgb(COLOR_A);
	const RGB_B = hexToRgb(COLOR_B);
	function lerpColorCss(t) {
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
	function polarToXY(r, a) {
		return [(r * Math.cos(a)).toFixed(2), (r * Math.sin(a)).toFixed(2)];
	}
	function arcWedgePath(r, start, end) {
		const [x1, y1] = polarToXY(r, start);
		const [x2, y2] = polarToXY(r, end);
		const large = end - start > Math.PI ? 1 : 0;
		return `M 0 0 L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
	}
	function setWheelRotation(deg) {
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

	function mountPageBackground() {
		const bg = document.getElementById("pageBg");
		if (!bg) return;
		bg.setAttribute(
			"viewBox",
			`${BG_VIEWBOX.minX} ${BG_VIEWBOX.minY} ${BG_VIEWBOX.width} ${BG_VIEWBOX.height}`,
		);
		bg.innerHTML = (BG_DEFS || "") + (BG_BODY || "");
	}

	// --- Static (non-rotating) center logo ---
	function placeStaticLogo(hubR) {
		// mount defs under root for safety
		let defsLayer = document.getElementById("logoDefs");
		if (!defsLayer) {
			defsLayer = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"g",
			);
			defsLayer.id = "logoDefs";
			svg.insertBefore(defsLayer, svg.firstChild);
		}
		defsLayer.innerHTML = LOGO_DEFS || "";

		const old = document.getElementById("logoStatic");
		if (old && old.parentNode) old.parentNode.removeChild(old);

		const logoSize = Math.floor(hubR * 1.6);
		const s = logoSize / Math.max(LOGO_VB.width, LOGO_VB.height);
		const cx = LOGO_VB.minX + LOGO_VB.width / 2;
		const cy = LOGO_VB.minY + LOGO_VB.height / 2;

		const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
		g.id = "logoStatic";
		g.setAttribute(
			"transform",
			`translate(2, 3) scale(${s}) translate(${-cx}, ${-cy})`,
		);
		g.setAttribute("pointer-events", "none");
		g.innerHTML = LOGO_BODY;
		svg.appendChild(g);
	}

	// --- Build wheel (NO stand, NO pointer) ---
	function buildWheel() {
		const R = 300;
		const rimColor = "#232E49";
		const rimPx = Math.max(12, Math.floor(R * 0.06));
		const hubR = Math.max(40, Math.floor(R * 0.24));

		// Clear rotating layer
		while (gWheel.firstChild) gWheel.removeChild(gWheel.firstChild);

		// Slices + labels + separators
		const rSlice = R - 4;
		for (let i = 0; i < N; i++) {
			const start = i * slice - Math.PI / 2;
			const end = start + slice;
			const t = N > 1 ? i / (N - 1) : 0.5;

			const p = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"path",
			);
			p.setAttribute("d", arcWedgePath(rSlice, start, end));
			p.setAttribute("fill", lerpColorCss(t));
			gWheel.appendChild(p);
			const mid = start + slice / 2;
			const labelG = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"g",
			);
			labelG.setAttribute(
				"transform",
				`rotate(${((mid * 180) / Math.PI).toFixed(3)})`,
			);
			const text = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"text",
			);
			text.setAttribute("x", (R * 0.6).toString());
			text.setAttribute("y", "0");
			text.setAttribute("fill", "#fff");
			text.setAttribute("font-size", "18");
			text.setAttribute("font-weight", "700");
			text.setAttribute("text-anchor", "middle");
			text.setAttribute("dominant-baseline", "middle");
			text.textContent = names[i] || "";
			labelG.appendChild(text);
			gWheel.appendChild(labelG);
		}

		// Hub + rim
		const hub = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"circle",
		);
		hub.setAttribute("cx", "0");
		hub.setAttribute("cy", "0");
		hub.setAttribute("r", hubR.toString());
		hub.setAttribute("fill", rimColor);
		gWheel.appendChild(hub);

		// Inner orange rim (inside hub)
		const innerRimColor = "#ff8a00";
		const innerRimPx = Math.max(1, Math.floor(hubR * 0.02)) + 2;
		const innerR = Math.max(0, Math.floor(hubR * 0.9));
		const innerRim = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"circle",
		);
		innerRim.setAttribute("cx", "0");
		innerRim.setAttribute("cy", "0");
		innerRim.setAttribute("r", innerR.toString());
		innerRim.setAttribute("fill", "none");
		innerRim.setAttribute("stroke", innerRimColor);
		innerRim.setAttribute("stroke-width", innerRimPx.toString());
		gWheel.appendChild(innerRim);

		const rim = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"circle",
		);
		rim.setAttribute("cx", "0");
		rim.setAttribute("cy", "0");
		rim.setAttribute("r", (R - rimPx / 2).toString());
		rim.setAttribute("fill", "none");
		rim.setAttribute("stroke", rimColor);
		rim.setAttribute("stroke-width", rimPx.toString());
		gWheel.appendChild(rim);

		// Outer green rim (same thickness as inner orange rim)
		const greenRim = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"circle",
		);
		greenRim.setAttribute("cx", "0");
		greenRim.setAttribute("cy", "0");
		greenRim.setAttribute("r", (R - rimPx / 2).toString());
		greenRim.setAttribute("fill", "none");
		greenRim.setAttribute("stroke", "#00A38E");
		greenRim.setAttribute(
			"stroke-width",
			(typeof innerRimPx !== "undefined"
				? innerRimPx
				: Math.max(1, Math.floor(hubR * 0.02)) + 2
			).toString(),
		);
		gWheel.appendChild(greenRim);

		// Static center logo (does not rotate)
		placeStaticLogo(hubR);

		// Preserve rotation
		setWheelRotation(currentRotation);
		placeStaticPointer(300);
	}

	// --- Static pointer drawn inside the wheel SVG (does not rotate) ---
	function placeStaticPointer(R) {
		const svg = document.getElementById("wheelSvg");
		if (!svg) return;
		const ns = "http://www.w3.org/2000/svg";

		// Remove previous
		const prev = document.getElementById("pointerStatic");
		if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

		// Geometry in wheel units
		const inset = 40; // tip sits this many units inside the rim
		const scaleFactor = 1.84; // +40% overall size (20% more than before)
		const H0 = Math.max(20, Math.floor(R * 0.1));
		const W0 = Math.max(24, Math.floor(H0 * 0.6));
		const H = Math.round(H0 * scaleFactor);
		// Helper: build a rounded-corner triangle path using quadratic curves
		function triRoundedPath(ax, ay, bx, by, cx, cy, r) {
			function off(x1, y1, x2, y2, d) {
				const vx = x2 - x1,
					vy = y2 - y1;
				const L = Math.hypot(vx, vy) || 1;
				return [x1 + (vx * d) / L, y1 + (vy * d) / L];
			}
			const A = [ax, ay],
				B = [bx, by],
				C = [cx, cy];
			const Aab = off(A[0], A[1], B[0], B[1], r),
				Aac = off(A[0], A[1], C[0], C[1], r);
			const Bba = off(B[0], B[1], A[0], A[1], r),
				Bbc = off(B[0], B[1], C[0], C[1], r);
			const Ccb = off(C[0], C[1], B[0], B[1], r),
				Cca = off(C[0], C[1], A[0], A[1], r);
			return (
				`M ${Aac[0].toFixed(2)},${Aac[1].toFixed(2)} Q ${A[0].toFixed(2)},${A[1].toFixed(2)} ${Aab[0].toFixed(2)},${Aab[1].toFixed(2)} ` +
				`L ${Bba[0].toFixed(2)},${Bba[1].toFixed(2)} Q ${B[0].toFixed(2)},${B[1].toFixed(2)} ${Bbc[0].toFixed(2)},${Bbc[1].toFixed(2)} ` +
				`L ${Ccb[0].toFixed(2)},${Ccb[1].toFixed(2)} Q ${C[0].toFixed(2)},${C[1].toFixed(2)} ${Cca[0].toFixed(2)},${Cca[1].toFixed(2)} Z`
			);
		}

		const W = Math.round(W0 * scaleFactor);

		// Group positioned at the wheel's top
		const yTop = -R + inset;
		const g = document.createElementNS(ns, "g");
		g.id = "pointerStatic";
		g.setAttribute("pointer-events", "none");
		g.setAttribute("transform", `translate(0, ${yTop})`);

		// Outer triangle (rounded)
		const outer = document.createElementNS(ns, "path");
		const outerScale = 1.1;
		const W2 = W * outerScale;
		const H2 = H * outerScale;
		const widthScale = 1.1; // widen horizontally
		const W2x = W2 * widthScale;
		const cornerR = Math.max(4, Math.round(Math.min(W2, H2) * 0.22));
		const dOuter = triRoundedPath(
			-W2x / 2,
			-H2 + 2,
			0,
			0 + 2,
			W2x / 2,
			-H2 + 2,
			cornerR,
		);
		outer.setAttribute("d", dOuter);
		outer.setAttribute("fill", "#EE752A"); // orange
		outer.setAttribute("stroke", "#232e49"); // dark blue
		outer.setAttribute("stroke-width", "2"); // thinner outer edge
		outer.setAttribute("stroke-linejoin", "round");
		outer.setAttribute("stroke-linecap", "round");
		g.appendChild(outer);

		// Inner triangle (inset + slight upward nudge)
		const insetEdge = Math.max(2, Math.floor(W * 0.18));
		const nudgeYInner = -3;
		const effW = W * (typeof widthScale !== "undefined" ? widthScale : 1.1);
		// raise inner triangle slightly
		const dInner = [
			`M ${(-(W - insetEdge * 2) / 2).toFixed(2)},${(-H + insetEdge + nudgeYInner).toFixed(2)}`,
			`L 0,${(-Math.max(0, insetEdge - 2) + nudgeYInner).toFixed(2)}`,
			`L ${((W - insetEdge * 2) / 2).toFixed(2)},${(-H + insetEdge + nudgeYInner).toFixed(2)}`,
			"Z",
		].join(" ");
		const inner = document.createElementNS(ns, "path");
		inner.setAttribute("d", dInner);
		inner.setAttribute("fill", "#00a38e"); // green
		inner.setAttribute("stroke", "#232e49"); // dark blue
		inner.setAttribute("stroke-width", "2");
		inner.setAttribute("stroke-linejoin", "round");
		inner.setAttribute("stroke-linecap", "round");
		g.appendChild(inner);

		// Append last so it sits on top of the wheel graphics
		svg.appendChild(g);
	}


	function toggleSoldOutUI(isSoldOut) {
	
	  if (isSoldOut) {
		formWrap?.classList.remove('show');
		wheelWrap?.classList.remove('show');
		soldOutMsg?.classList.add('show');
	  } else {
		soldOutMsg?.classList.remove('show');
		// Your normal logic can decide which one shows (form or wheel).
		// If you always want the wheel visible when not sold-out:
		wheelWrap?.classList.remove('show');
	  }
	}
	
	
	// --- Data/load ---
	function loadData() {
		const all = getLocalPrizes();

		// …inside your load/refresh function, right after filtering:
		const active = all.filter(p => String(p.enabled).toUpperCase()==='TRUE' && Number(p.stock)>0);
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
			showForm();
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
	function positiveMod(a, n) {
		return ((a % n) + n) % n;
	}
	function easeOutCubic(t) {
		return 1 - Math.pow(1 - t, 3);
	}

	function animateSpin(startDeg, endDeg, dur, done) {
		const t0 = performance.now();
		function frame(now) {
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

	function decrementStockByName(name) {
		const all = getLocalPrizes();
		for (const p of all) {
			if (String(p.name).trim() === name) {
				const s = Number(p.stock || 0);
				if (s > 0) p.stock = s - 1;
				break;
			}
		}
		setLocalPrizes(all);
	}

	spinBtn.addEventListener("click", () => {
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
		animateSpin(currentRotation, finalRot, 3000, () => {
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
	(function () {
	  // Which inputs should use the keyboard?
	  const inputs = document.querySelectorAll(
		'#userForm input[type="text"], #userForm input[type="email"], #userForm input[type="search"], #userForm input[type="tel"], #userForm input:not([type])'
	  );
	
	  const kb = document.getElementById("vkb");
	  let active = null; // currently focused input
	
	  function showKB(forEl) {
		if (!forEl || forEl.disabled || forEl.readOnly) return;
		active = forEl;
		kb.classList.add("show");
		kb.setAttribute("aria-hidden", "false");
		// keep caret where user tapped
		active.focus();
	  }
	
	  function hideKB() {
		kb.classList.remove("show");
		kb.setAttribute("aria-hidden", "true");
		active = null;
	  }
	
	  function insert(txt) {
		if (!active) return;
		const s = active.selectionStart ?? active.value.length;
		const e = active.selectionEnd ?? s;
		active.value = active.value.slice(0, s) + txt + active.value.slice(e);
		const p = s + txt.length;
		active.setSelectionRange(p, p);
		active.dispatchEvent(new Event("input", { bubbles: true }));
		active.focus();
	  }
	
	  function backspace() {
		if (!active) return;
		const s = active.selectionStart ?? active.value.length;
		const e = active.selectionEnd ?? s;
		if (s !== e) {
		  active.value = active.value.slice(0, s) + active.value.slice(e);
		  active.setSelectionRange(s, s);
		} else if (s > 0) {
		  active.value = active.value.slice(0, s - 1) + active.value.slice(e);
		  active.setSelectionRange(s - 1, s - 1);
		}
		active.dispatchEvent(new Event("input", { bubbles: true }));
		active.focus();
	  }
	
	  // Wire up all matching inputs
	  inputs.forEach((el) => {
		el.addEventListener("focus", () => showKB(el));
		el.addEventListener("click", () => showKB(el));
		// keep keyboard’s internal value in sync if user types (e.g., physical kb)
		el.addEventListener("input", () => {
		  // no-op here unless you mirror text onto keys; kept for completeness
		});
	  });
	
	  // Keyboard button handling
	  kb.addEventListener("pointerdown", (ev) => {
		const t = ev.target.closest(".kb-key");
		if (!t) return;
		ev.preventDefault();
		const a = t.getAttribute("data-action");
		if (a === "back") return backspace();
		if (a === "clear") {
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
	  document.addEventListener("pointerdown", (ev) => {
		const target = ev.target;
		const clickedAnInput = [...inputs].some((el) => el === target || el.contains(target));
		if (!clickedAnInput && !kb.contains(target)) hideKB();
	  });
	
	  // If the focused input disappears (e.g., form hidden), hide keyboard
	  document.addEventListener("visibilitychange", () => {
		if (document.hidden) hideKB();
	  });
	})();

	// --- Init ---
	mountPageBackground();
	//adjustPageHeightForBg();
	//window.addEventListener("resize", adjustPageHeightForBg);
	//window.addEventListener("orientationchange", adjustPageHeightForBg);
	loadData();

	function mountStand() {
	  const wrap  = document.getElementById("wrap");
	  const wheel = document.getElementById("wheelSvg");
	  const layer = document.getElementById("standLayer");
	  if (!wrap || !wheel || !layer || !window.STAND_VIEWBOX || !window.STAND_BODY) return;
	
	  // layer styling
	  layer.style.position = "absolute";
	  layer.style.pointerEvents = "none";
	  layer.style.zIndex = "-1";
	  layer.style.overflow = "visible";
	
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

})();



// Move Reload + Open config to bottom-left container without breaking behavior
(function () {
	function moveControls() {
		//var reload = document.getElementById("reloadBtn");
		var config = document.querySelector('a[href="config.html"]');
		var ctl = document.getElementById("bottomControls");
		if (!ctl) {
			ctl = document.createElement("div");
			ctl.id = "bottomControls";
			document.body.appendChild(ctl);
		}
		//if (reload && reload.parentNode !== ctl) ctl.appendChild(reload);
		if (config && config.parentNode !== ctl) ctl.appendChild(config);
	}
	window.addEventListener("load", moveControls);
})();

// Ensure pressed visual on touch & keyboard
(function () {
	var btn = document.getElementById("spinBtn");
	if (!btn) return;
	var press = function () {
		btn.classList.add("is-pressed");
	};
	var release = function () {
		btn.classList.remove("is-pressed");
	};
	btn.addEventListener("pointerdown", press, { passive: true });
	window.addEventListener("pointerup", release, { passive: true });
	btn.addEventListener("keydown", function (e) {
		if (e.key === " " || e.key === "Enter") {
			press();
		}
	});
	btn.addEventListener("keyup", release);
	btn.addEventListener("blur", release);
})();

/* Bottom base highlight on the stand (lighter blue rounded rectangle, thinner) */
(function () {
	function addBaseRect() {
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

// Lightweight, seamless-loop confetti (top -> bottom), various sizes
(function () {
	const canvas = document.getElementById("confettiCanvas");
	if (!canvas) return;
	const ctx = canvas.getContext("2d");

	let DPR = Math.min(2, window.devicePixelRatio || 1);
	function resize() {
		const w = window.innerWidth;
		const h = window.innerHeight;
		canvas.style.width = w + "px";
		canvas.style.height = h + "px";
		canvas.width = Math.floor(w * DPR);
		canvas.height = Math.floor(h * DPR);
	}
	window.addEventListener("resize", () => {
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

	function rand(min, max) {
		return Math.random() * (max - min) + min;
	}
	function pick(arr) {
		return arr[(Math.random() * arr.length) | 0];
	}

	function spawnOne(x) {
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
	for (let i = 0; i < MAX; i++) {
		const p = spawnOne();
		p.y = (Math.random() * 2 - 1) * hCSS0; // scatter full-screen vertically
		p.x += Math.random() * 60 - 30;
		p.vy *= 0.8 + Math.random() * 0.4;
		p.vx *= 0.8 + Math.random() * 0.4;
		particles.push(p);
	}
	let last = performance.now();
	function frame(now) {
		const dt = Math.min(0.033, (now - last) / 1000); // seconds (cap at ~30fps step)
		last = now;

		const W = canvas.width,
			H = canvas.height;
		const wCSS = W / DPR,
			hCSS = H / DPR;

		ctx.clearRect(0, 0, W, H);

		for (let i = 0; i < particles.length; i++) {
			const p = particles[i];
			// physics
			p.vy += 30 * dt; // gentle "gravity" px/s^2
			p.t += p.wobbleSpeed * dt * Math.PI * 2;
			p.x += p.vx * dt + Math.cos(p.t) * (p.wobble * dt);
			p.y += p.vy * dt;
			p.ang += p.spin * dt;

			// recycle when off-screen
			if (p.y - p.h > hCSS) {
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
		while (particles.length < MAX && spawnAcc >= 1) {
			particles.push(spawnOne());
			spawnAcc -= 1 + Math.random() * 0.75; // jitter
		}
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
})();



document.addEventListener('DOMContentLoaded', () => {
  const termsLink = document.getElementById('termsLink');   // your checkbox
  const modal    = document.getElementById('termsModal');
  const closeBtn = document.getElementById('closeTerms');

  // Show modal when checkbox is clicked
  termsLink.addEventListener('click', () => {
	modal.style.display = 'flex';
  });

  // Close modal on back arrow
  closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
  });

  // Close if user taps outside the card
  modal.addEventListener('click', (e) => {
	if (e.target === modal) modal.style.display = 'none';
  });
});



