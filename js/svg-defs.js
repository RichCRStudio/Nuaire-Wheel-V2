// --- Stand overlay (independent; behind wheel) ---

var STAND_VIEWBOX = "0 0 1113.8 1171.13";
var STAND_BODY = `<defs>
	  <style>
		.cls-1 {
		  fill: #232e49;
		  mix-blend-mode: multiply;
		  opacity: 1;
		}
  
		.cls-2 { fill: #232e49;
		  isolation: isolate;
		}
  
		.cls-3 {
		  fill: #232e49;
		  stroke: #232e49;
		  stroke-miterlimit: 10;
		  stroke-width: 17.42px;
		}
  
		.cls-4 {
		  fill: #009fdf;
		}
  
		.cls-5 {
		  fill: #232e49;
		}
	  
  
	/* ===== Landing Overlay (scoped) ===== */
	#landingOverlay {
	  position: fixed;
	  inset: 0;
	  background: linear-gradient(180deg, #232E49 0%, #0f172a 100%);
	  z-index: 999;            /* above all app layers */
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  pointer-events: auto;    /* captures clicks while visible */
	  opacity: 1;
	  transition: opacity 300ms ease;
	}
	#landingOverlay.hide {
	  opacity: 0;
	  pointer-events: none;
	}
	#landingOverlay .landing-inner {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  gap: 28px;
	  text-align: center;
	  padding: 24px;
	}
	#landingOverlay .brand-mark {
	  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	  color: #ffffff;
	  font-size: clamp(24px, 3.2vw, 42px);
	  letter-spacing: 0.04em;
	  font-weight: 600;
	  text-shadow: 0 2px 8px rgba(0,0,0,0.35);
	}
	#landingOverlay .cta {
	  background: #EE752A;
	  color: #ffffff;
	  border: 2px solid #ffffff;
	  border-radius: 14px;
	  padding: 0.9em 1.6em;
	  font-size: clamp(16px, 2.2vw, 22px);
	  font-weight: 700;
	  cursor: pointer;
	  transition: transform 120ms ease, background-color 160ms ease, box-shadow 160ms ease;
	  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
	}
	#landingOverlay .cta:hover {
	  transform: translateY(-1px);
	}
	#landingOverlay .cta:active {
	  transform: translateY(0);
	  background-color: #cf611f;
	}
  </style>
	  <linearGradient id="linear-gradient" x1="557.18" y1="1045.19" x2="557.22" y2="1149.54" gradientUnits="userSpaceOnUse">
		<stop offset="0" stop-color="#86cedd"/>
		<stop offset=".01" stop-color="#82c8d8"/>
		<stop offset=".12" stop-color="#699fb2"/>
		<stop offset=".23" stop-color="#537c91"/>
		<stop offset=".35" stop-color="#416077"/>
		<stop offset=".48" stop-color="#344962"/>
		<stop offset=".62" stop-color="#2a3a54"/>
		<stop offset=".78" stop-color="#24304b"/>
		<stop offset="1" stop-color="#232e49"/>
	  </linearGradient>
	</defs>
	<g class="cls-2">
	  <g id="Layer_1" data-name="Layer 1">
		<polygon class="cls-5" points="1017.22 1138.5 97.21 1138.5 152.39 865.35 327.21 0 773.4 0 959.03 866.75 1017.22 1138.5"/>
		<polygon class="cls-4" points="26.69 1029.55 1095.29 1029.55 1104.38 1138.5 557.22 1162.41 10.06 1138.5 26.69 1029.55"/>
		<path class="cls-1" d="M26.69,1029.55h1068.6l9.08,108.95s-410.24,23.92-547.16,23.92-547.16-23.92-547.16-23.92l16.64-108.95Z"/>
		<path class="cls-3" d="M26.69,1029.55h1068.6l9.08,108.95s-410.24,23.92-547.16,23.92-547.16-23.92-547.16-23.92l16.64-108.95Z"/>
	  </g>
	</g>`;

// --- Embedded asset payloads ---
const BG_VIEWBOX = { minX: 0.0, minY: 0.0, width: 2166.0, height: 3839.0 };
const BG_DEFS = `<defs>
	<style>
	  .cls-1 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-163);
	  }

	  .cls-2 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-268);
	  }

	  .cls-3 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-206);
	  }

	  .cls-4 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-443);
	  }

	  .cls-5 {
		fill: #b7b7b7;
		opacity: .37;
	  }

	  .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32, .cls-33, .cls-34, .cls-35, .cls-36, .cls-37, .cls-38, .cls-39, .cls-40, .cls-41, .cls-42, .cls-43, .cls-44, .cls-45, .cls-46, .cls-47, .cls-48, .cls-49, .cls-50, .cls-51, .cls-52, .cls-53, .cls-54, .cls-55, .cls-56 {
		mix-blend-mode: multiply;
	  }

	  .cls-57 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-167);
	  }

	  .cls-58 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-735);
	  }

	  .cls-59 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-166);
	  }

	  .cls-60 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-358);
	  }

	  .cls-61 {
		fill: url(#radial-gradient-107);
	  }

	  .cls-61, .cls-62, .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-70, .cls-71, .cls-72, .cls-73, .cls-74, .cls-75, .cls-76, .cls-77, .cls-78, .cls-79, .cls-80, .cls-81, .cls-82, .cls-83, .cls-84, .cls-85, .cls-86, .cls-87, .cls-88, .cls-89, .cls-90, .cls-91, .cls-92, .cls-93, .cls-94, .cls-95, .cls-96, .cls-97, .cls-98, .cls-99, .cls-100, .cls-101, .cls-102, .cls-103, .cls-104, .cls-105, .cls-106, .cls-107, .cls-108, .cls-109, .cls-110, .cls-111, .cls-112, .cls-113, .cls-114, .cls-115, .cls-116, .cls-117, .cls-118, .cls-119, .cls-120, .cls-121, .cls-122, .cls-123, .cls-124, .cls-125, .cls-126, .cls-127, .cls-128, .cls-129, .cls-130, .cls-131, .cls-132, .cls-133, .cls-134, .cls-135, .cls-136, .cls-137, .cls-138, .cls-139, .cls-140, .cls-141, .cls-142, .cls-143, .cls-144, .cls-145, .cls-146, .cls-147, .cls-148, .cls-149, .cls-150, .cls-151, .cls-152, .cls-153, .cls-154, .cls-155, .cls-156, .cls-157, .cls-158, .cls-159, .cls-160, .cls-161, .cls-162, .cls-163, .cls-164, .cls-165, .cls-166, .cls-167, .cls-168, .cls-169, .cls-170, .cls-171, .cls-172, .cls-173, .cls-174, .cls-175, .cls-176, .cls-177, .cls-178, .cls-179, .cls-180, .cls-181, .cls-182, .cls-183, .cls-184, .cls-185, .cls-186, .cls-187, .cls-188, .cls-189, .cls-190, .cls-191, .cls-192, .cls-193, .cls-194, .cls-195, .cls-196, .cls-197, .cls-198, .cls-199, .cls-200, .cls-201, .cls-202, .cls-203, .cls-204, .cls-205, .cls-206, .cls-207, .cls-208, .cls-209, .cls-210, .cls-211, .cls-212, .cls-213, .cls-214, .cls-215, .cls-216, .cls-217, .cls-218, .cls-219, .cls-220, .cls-221, .cls-222, .cls-223, .cls-224, .cls-225, .cls-226, .cls-227, .cls-228, .cls-229, .cls-230, .cls-231, .cls-232, .cls-233, .cls-234, .cls-235, .cls-236, .cls-237, .cls-238, .cls-239, .cls-240, .cls-241, .cls-242, .cls-243, .cls-244, .cls-245, .cls-246, .cls-247, .cls-248, .cls-249, .cls-250, .cls-251, .cls-252, .cls-253, .cls-254, .cls-255, .cls-256, .cls-257, .cls-258, .cls-259, .cls-260, .cls-261, .cls-262, .cls-263, .cls-264, .cls-265, .cls-266, .cls-267, .cls-268, .cls-269, .cls-270, .cls-271, .cls-272, .cls-273, .cls-274, .cls-275, .cls-276, .cls-277, .cls-278, .cls-279, .cls-280, .cls-281, .cls-282, .cls-283, .cls-284, .cls-285, .cls-286, .cls-287, .cls-288, .cls-289, .cls-290, .cls-291, .cls-292, .cls-293, .cls-294, .cls-295, .cls-296, .cls-297, .cls-298, .cls-299, .cls-300, .cls-301, .cls-302, .cls-303, .cls-304, .cls-305, .cls-306, .cls-307, .cls-308, .cls-309, .cls-310, .cls-311, .cls-312, .cls-313, .cls-314, .cls-315, .cls-316, .cls-317, .cls-318, .cls-319, .cls-320, .cls-321, .cls-322, .cls-323, .cls-324, .cls-325, .cls-326, .cls-327, .cls-328, .cls-329, .cls-330, .cls-331, .cls-332, .cls-333, .cls-334, .cls-335, .cls-336, .cls-337, .cls-338, .cls-339, .cls-340, .cls-341, .cls-342, .cls-343, .cls-344, .cls-345, .cls-346, .cls-347, .cls-348, .cls-349, .cls-350, .cls-351, .cls-352, .cls-353, .cls-354, .cls-355, .cls-356, .cls-357, .cls-358, .cls-359, .cls-360, .cls-361, .cls-362, .cls-363, .cls-364, .cls-365, .cls-366, .cls-367, .cls-368, .cls-369, .cls-370, .cls-371, .cls-372, .cls-373, .cls-374, .cls-375, .cls-376, .cls-377, .cls-378, .cls-379, .cls-380, .cls-381, .cls-382, .cls-383, .cls-384, .cls-385, .cls-386, .cls-387, .cls-388, .cls-389, .cls-390, .cls-391, .cls-392, .cls-393, .cls-394, .cls-395, .cls-396, .cls-397, .cls-398, .cls-399, .cls-400, .cls-401, .cls-402, .cls-403, .cls-404, .cls-405, .cls-406, .cls-407, .cls-408, .cls-409, .cls-410, .cls-411, .cls-412, .cls-413, .cls-414, .cls-415, .cls-416, .cls-417, .cls-418, .cls-419, .cls-420, .cls-421, .cls-422, .cls-423, .cls-424, .cls-425, .cls-426, .cls-427, .cls-428, .cls-429, .cls-430, .cls-431, .cls-432, .cls-433, .cls-434, .cls-435, .cls-436, .cls-437, .cls-438, .cls-439, .cls-440, .cls-441, .cls-442, .cls-443, .cls-444, .cls-445, .cls-446, .cls-447, .cls-448, .cls-449, .cls-450, .cls-451, .cls-452, .cls-453, .cls-454, .cls-455, .cls-456, .cls-457, .cls-458, .cls-459, .cls-460, .cls-461, .cls-462, .cls-463, .cls-464, .cls-465, .cls-466, .cls-467, .cls-468, .cls-469, .cls-470, .cls-471, .cls-472, .cls-473, .cls-474, .cls-475, .cls-476, .cls-477, .cls-478, .cls-479, .cls-480, .cls-481, .cls-482, .cls-483, .cls-484, .cls-485, .cls-486, .cls-487, .cls-488, .cls-489, .cls-490, .cls-491, .cls-492, .cls-493, .cls-494 {
		mix-blend-mode: screen;
	  }

	  .cls-495 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-531);
	  }

	  .cls-496 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-61);
	  }

	  .cls-62 {
		fill: url(#radial-gradient-9);
	  }

	  .cls-497 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-654);
	  }

	  .cls-63 {
		fill: url(#radial-gradient-177);
	  }

	  .cls-498 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-575);
	  }

	  .cls-64 {
		fill: url(#radial-gradient-263);
	  }

	  .cls-65 {
		fill: url(#radial-gradient-90);
	  }

	  .cls-66 {
		fill: url(#radial-gradient-280);
	  }

	  .cls-67 {
		fill: url(#radial-gradient-31);
	  }

	  .cls-499 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-271);
	  }

	  .cls-500 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-683);
	  }

	  .cls-501 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-730);
	  }

	  .cls-502 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-635);
	  }

	  .cls-503 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-532);
	  }

	  .cls-504 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-467);
	  }

	  .cls-68 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-25);
	  }

	  .cls-505 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-29);
	  }

	  .cls-506 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-547);
	  }

	  .cls-507 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-453);
	  }

	  .cls-69 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-14);
	  }

	  .cls-508 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-207);
	  }

	  .cls-70 {
		fill: url(#radial-gradient-250);
	  }

	  .cls-71 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-38);
	  }

	  .cls-509 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-512);
	  }

	  .cls-510 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-489);
	  }

	  .cls-72 {
		fill: url(#radial-gradient-287);
	  }

	  .cls-73 {
		fill: url(#radial-gradient-234);
	  }

	  .cls-511 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-597);
	  }

	  .cls-512 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-722);
	  }

	  .cls-513 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-144);
	  }

	  .cls-514 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-362);
	  }

	  .cls-74 {
		fill: url(#radial-gradient-104);
	  }

	  .cls-515 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-55);
	  }

	  .cls-516 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-47);
	  }

	  .cls-517 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-650);
	  }

	  .cls-75 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-2);
	  }

	  .cls-518 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-718);
	  }

	  .cls-519 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-434);
	  }

	  .cls-520 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-324);
	  }

	  .cls-76 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-5);
	  }

	  .cls-521 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-344);
	  }

	  .cls-522 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-349);
	  }

	  .cls-77 {
		fill: url(#radial-gradient-187);
	  }

	  .cls-523 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-90);
	  }

	  .cls-78 {
		fill: url(#radial-gradient-335);
	  }

	  .cls-524 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-476);
	  }

	  .cls-525 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-223);
	  }

	  .cls-526 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-217);
	  }

	  .cls-527 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-8);
	  }

	  .cls-79 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-25);
	  }

	  .cls-528 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-186);
	  }

	  .cls-529 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-517);
	  }

	  .cls-530 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-679);
	  }

	  .cls-80 {
		fill: url(#radial-gradient-260);
	  }

	  .cls-531 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-162);
	  }

	  .cls-81 {
		fill: url(#radial-gradient-225);
	  }

	  .cls-6 {
		fill: #cacaca;
		opacity: .27;
	  }

	  .cls-82 {
		fill: url(#radial-gradient-306);
	  }

	  .cls-532 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-160);
	  }

	  .cls-533 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-310);
	  }

	  .cls-534 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-83);
	  }

	  .cls-83 {
		fill: url(#radial-gradient-98);
	  }

	  .cls-84 {
		fill: url(#radial-gradient-50);
	  }

	  .cls-85 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-10);
	  }

	  .cls-7 {
		fill: #949494;
		opacity: .55;
	  }

	  .cls-86 {
		fill: url(#radial-gradient-40);
	  }

	  .cls-87 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-14);
	  }

	  .cls-535 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-125);
	  }

	  .cls-536 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-490);
	  }

	  .cls-537 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-536);
	  }

	  .cls-88 {
		fill: url(#radial-gradient-108);
	  }

	  .cls-538 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-501);
	  }

	  .cls-89 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-12);
	  }

	  .cls-90 {
		fill: url(#radial-gradient-274);
	  }

	  .cls-91 {
		fill: url(#radial-gradient-77);
	  }

	  .cls-539 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-215);
	  }

	  .cls-540 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-70);
	  }

	  .cls-541 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-10);
	  }

	  .cls-92 {
		fill: url(#radial-gradient-195);
	  }

	  .cls-542 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-317);
	  }

	  .cls-543 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-581);
	  }

	  .cls-93 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-23);
	  }

	  .cls-544 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-147);
	  }

	  .cls-94 {
		fill: url(#radial-gradient-72);
	  }

	  .cls-545 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-292);
	  }

	  .cls-546 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-491);
	  }

	  .cls-95 {
		fill: url(#radial-gradient-103);
	  }

	  .cls-96 {
		fill: url(#radial-gradient-79);
	  }

	  .cls-547 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-702);
	  }

	  .cls-548 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-135);
	  }

	  .cls-549 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-522);
	  }

	  .cls-97 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-8);
	  }

	  .cls-550 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-287);
	  }

	  .cls-551 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-514);
	  }

	  .cls-552 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-426);
	  }

	  .cls-553 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-323);
	  }

	  .cls-554 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-299);
	  }

	  .cls-98 {
		fill: url(#radial-gradient-45);
	  }

	  .cls-555 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-18);
	  }

	  .cls-556 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-520);
	  }

	  .cls-557 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-578);
	  }

	  .cls-558 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-121);
	  }

	  .cls-559 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-493);
	  }

	  .cls-560 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-591);
	  }

	  .cls-99 {
		fill: url(#radial-gradient-172);
	  }

	  .cls-561 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-300);
	  }

	  .cls-562 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-606);
	  }

	  .cls-563 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-713);
	  }

	  .cls-564 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-229);
	  }

	  .cls-100 {
		fill: url(#radial-gradient-325);
	  }

	  .cls-565 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-330);
	  }

	  .cls-101 {
		fill: url(#radial-gradient-328);
	  }

	  .cls-102 {
		fill: url(#radial-gradient-153);
	  }

	  .cls-566 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-728);
	  }

	  .cls-103 {
		fill: url(#radial-gradient-197);
	  }

	  .cls-567 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-234);
	  }

	  .cls-104 {
		fill: url(#radial-gradient-137);
	  }

	  .cls-105 {
		fill: url(#radial-gradient-272);
	  }

	  .cls-568 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-455);
	  }

	  .cls-8 {
		fill: #767676;
		opacity: .71;
	  }

	  .cls-9 {
		fill: #6b6b6b;
		opacity: .76;
	  }

	  .cls-106 {
		fill: url(#radial-gradient-277);
	  }

	  .cls-569 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-461);
	  }

	  .cls-570 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-734);
	  }

	  .cls-571 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-245);
	  }

	  .cls-107 {
		fill: url(#radial-gradient-94);
	  }

	  .cls-572 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-376);
	  }

	  .cls-108 {
		fill: url(#radial-gradient-43);
	  }

	  .cls-573 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-139);
	  }

	  .cls-574 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-629);
	  }

	  .cls-575 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-494);
	  }

	  .cls-576 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-131);
	  }

	  .cls-577 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-337);
	  }

	  .cls-109 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-11);
	  }

	  .cls-110 {
		fill: url(#radial-gradient-226);
	  }

	  .cls-578 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-143);
	  }

	  .cls-111 {
		fill: url(#radial-gradient-216);
	  }

	  .cls-10 {
		fill: #bebebe;
		opacity: .33;
	  }

	  .cls-579 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-553);
	  }

	  .cls-112 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-29);
	  }

	  .cls-113 {
		fill: url(#radial-gradient-206);
	  }

	  .cls-580 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-676);
	  }

	  .cls-114 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-29);
	  }

	  .cls-581 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-21);
	  }

	  .cls-582 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-732);
	  }

	  .cls-583 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-463);
	  }

	  .cls-115 {
		fill: url(#radial-gradient-290);
	  }

	  .cls-116 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-9);
	  }

	  .cls-117 {
		fill: url(#radial-gradient-312);
	  }

	  .cls-118 {
		fill: url(#radial-gradient-229);
	  }

	  .cls-584 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_229-2);
	  }

	  .cls-11 {
		fill: #fff;
		opacity: 0;
	  }

	  .cls-585 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-314);
	  }

	  .cls-119 {
		fill: url(#radial-gradient-276);
	  }

	  .cls-586 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-675);
	  }

	  .cls-587 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-726);
	  }

	  .cls-120 {
		fill: url(#radial-gradient-231);
	  }

	  .cls-121 {
		fill: url(#radial-gradient-167);
	  }

	  .cls-122 {
		fill: url(#radial-gradient-161);
	  }

	  .cls-588 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-253);
	  }

	  .cls-589 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-535);
	  }

	  .cls-123 {
		fill: url(#radial-gradient-310);
	  }

	  .cls-590 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-450);
	  }

	  .cls-591 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-419);
	  }

	  .cls-124 {
		fill: url(#radial-gradient-87);
	  }

	  .cls-125 {
		fill: url(#radial-gradient-41);
	  }

	  .cls-126 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2);
	  }

	  .cls-592 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-33);
	  }

	  .cls-127 {
		fill: url(#radial-gradient-317);
	  }

	  .cls-593 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-256);
	  }

	  .cls-594 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-280);
	  }

	  .cls-595 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-252);
	  }

	  .cls-596 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-691);
	  }

	  .cls-597 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-620);
	  }

	  .cls-598 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-738);
	  }

	  .cls-599 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-479);
	  }

	  .cls-600 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-566);
	  }

	  .cls-128 {
		fill: url(#radial-gradient-159);
	  }

	  .cls-12 {
		fill: #e1e1e1;
		opacity: .16;
	  }

	  .cls-601 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-175);
	  }

	  .cls-602 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-705);
	  }

	  .cls-129 {
		fill: url(#radial-gradient-135);
	  }

	  .cls-130 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-10);
	  }

	  .cls-131 {
		fill: url(#radial-gradient-105);
	  }

	  .cls-603 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-110);
	  }

	  .cls-604 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-187);
	  }

	  .cls-605 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-209);
	  }

	  .cls-606 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-363);
	  }

	  .cls-607 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-104);
	  }

	  .cls-13 {
		fill: #f7f7f7;
		opacity: .04;
	  }

	  .cls-608 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-101);
	  }

	  .cls-132 {
		fill: url(#radial-gradient-247);
	  }

	  .cls-609 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-244);
	  }

	  .cls-133 {
		fill: url(#radial-gradient-281);
	  }

	  .cls-610 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-600);
	  }

	  .cls-134 {
		fill: url(#radial-gradient-54);
	  }

	  .cls-135 {
		fill: url(#radial-gradient-62);
	  }

	  .cls-14 {
		fill: #585858;
		opacity: .86;
	  }

	  .cls-611 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-226);
	  }

	  .cls-136 {
		fill: url(#radial-gradient-210);
	  }

	  .cls-612 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-123);
	  }

	  .cls-613 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-80);
	  }

	  .cls-614 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-92);
	  }

	  .cls-137 {
		fill: url(#radial-gradient-259);
	  }

	  .cls-138 {
		fill: url(#radial-gradient-309);
	  }

	  .cls-139 {
		fill: url(#radial-gradient-29);
	  }

	  .cls-615 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-185);
	  }

	  .cls-140 {
		fill: url(#radial-gradient-353);
	  }

	  .cls-616 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-508);
	  }

	  .cls-141 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-15);
	  }

	  .cls-15 {
		fill: #c6c6c6;
		opacity: .29;
	  }

	  .cls-617 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-306);
	  }

	  .cls-618 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-715);
	  }

	  .cls-142 {
		fill: url(#radial-gradient-19);
	  }

	  .cls-619 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-576);
	  }

	  .cls-620 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-534);
	  }

	  .cls-143 {
		fill: url(#radial-gradient-238);
	  }

	  .cls-621 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-593);
	  }

	  .cls-622 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-339);
	  }

	  .cls-623 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-288);
	  }

	  .cls-624 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-305);
	  }

	  .cls-625 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-649);
	  }

	  .cls-144 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-34);
	  }

	  .cls-626 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-272);
	  }

	  .cls-627 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-729);
	  }

	  .cls-628 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-665);
	  }

	  .cls-629 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-99);
	  }

	  .cls-630 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-423);
	  }

	  .cls-631 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-242);
	  }

	  .cls-145 {
		fill: url(#radial-gradient-240);
	  }

	  .cls-632 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-484);
	  }

	  .cls-146 {
		fill: url(#radial-gradient-311);
	  }

	  .cls-633 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-348);
	  }

	  .cls-634 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_215);
	  }

	  .cls-16 {
		fill: #454545;
		opacity: .96;
	  }

	  .cls-147 {
		fill: url(#radial-gradient-69);
	  }

	  .cls-148 {
		fill: url(#radial-gradient-286);
	  }

	  .cls-149 {
		fill: url(#radial-gradient-165);
	  }

	  .cls-635 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-177);
	  }

	  .cls-150 {
		fill: url(#radial-gradient-138);
	  }

	  .cls-17 {
		fill: #4c4c4c;
		opacity: .92;
	  }

	  .cls-636 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-100);
	  }

	  .cls-637 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-681);
	  }

	  .cls-638 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-384);
	  }

	  .cls-151 {
		fill: url(#radial-gradient-202);
	  }

	  .cls-639 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-580);
	  }

	  .cls-152 {
		fill: url(#radial-gradient-149);
	  }

	  .cls-153 {
		fill: url(#radial-gradient-256);
	  }

	  .cls-154 {
		fill: url(#radial-gradient-88);
	  }

	  .cls-640 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-382);
	  }

	  .cls-641 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-24);
	  }

	  .cls-155 {
		fill: url(#radial-gradient-32);
	  }

	  .cls-642 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-246);
	  }

	  .cls-156 {
		fill: url(#radial-gradient-6);
	  }

	  .cls-643 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-542);
	  }

	  .cls-157 {
		fill: url(#radial-gradient-255);
	  }

	  .cls-158 {
		fill: url(#radial-gradient-334);
	  }

	  .cls-644 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-304);
	  }

	  .cls-645 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-154);
	  }

	  .cls-646 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-219);
	  }

	  .cls-647 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-345);
	  }

	  .cls-648 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-653);
	  }

	  .cls-159 {
		fill: url(#radial-gradient-86);
	  }

	  .cls-649 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-354);
	  }

	  .cls-650 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-14);
	  }

	  .cls-160 {
		fill: url(#radial-gradient-130);
	  }

	  .cls-161 {
		fill: url(#radial-gradient-291);
	  }

	  .cls-162 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-32);
	  }

	  .cls-18 {
		fill: #5b5b5b;
		opacity: .84;
	  }

	  .cls-163 {
		fill: url(#radial-gradient-129);
	  }

	  .cls-651 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-366);
	  }

	  .cls-164 {
		fill: url(#radial-gradient-273);
	  }

	  .cls-165 {
		fill: url(#radial-gradient-158);
	  }

	  .cls-166 {
		fill: url(#radial-gradient-298);
	  }

	  .cls-652 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-360);
	  }

	  .cls-653 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-488);
	  }

	  .cls-654 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-247);
	  }

	  .cls-655 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-28);
	  }

	  .cls-656 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-86);
	  }

	  .cls-167 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-37);
	  }

	  .cls-657 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-682);
	  }

	  .cls-168 {
		fill: url(#radial-gradient-73);
	  }

	  .cls-169 {
		fill: url(#radial-gradient-227);
	  }

	  .cls-658 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-17);
	  }

	  .cls-659 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-286);
	  }

	  .cls-660 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-643);
	  }

	  .cls-170 {
		fill: url(#radial-gradient-338);
	  }

	  .cls-171 {
		fill: url(#radial-gradient-18);
	  }

	  .cls-661 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-281);
	  }

	  .cls-172 {
		fill: url(#radial-gradient-141);
	  }

	  .cls-173 {
		fill: url(#radial-gradient-322);
	  }

	  .cls-174 {
		fill: url(#radial-gradient-66);
	  }

	  .cls-662 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-48);
	  }

	  .cls-175 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-33);
	  }

	  .cls-663 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-441);
	  }

	  .cls-176 {
		fill: url(#radial-gradient-333);
	  }

	  .cls-19 {
		fill: #fbfbfb;
		opacity: .02;
	  }

	  .cls-664 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-486);
	  }

	  .cls-665 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-667);
	  }

	  .cls-666 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-93);
	  }

	  .cls-667 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-35);
	  }

	  .cls-668 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-410);
	  }

	  .cls-669 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-140);
	  }

	  .cls-670 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-420);
	  }

	  .cls-177 {
		fill: url(#radial-gradient-181);
	  }

	  .cls-671 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-44);
	  }

	  .cls-672 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-241);
	  }

	  .cls-673 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-673);
	  }

	  .cls-674 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-165);
	  }

	  .cls-675 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-645);
	  }

	  .cls-178 {
		fill: url(#radial-gradient-95);
	  }

	  .cls-179 {
		fill: url(#radial-gradient-119);
	  }

	  .cls-180 {
		fill: url(#radial-gradient-214);
	  }

	  .cls-20 {
		fill: #9c9c9c;
		opacity: .51;
	  }

	  .cls-181 {
		fill: url(#radial-gradient-218);
	  }

	  .cls-676 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-586);
	  }

	  .cls-677 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-274);
	  }

	  .cls-182 {
		fill: url(#radial-gradient-5);
	  }

	  .cls-678 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-311);
	  }

	  .cls-21 {
		fill: #7a7a7a;
		opacity: .69;
	  }

	  .cls-679 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-181);
	  }

	  .cls-22 {
		fill: #d5d5d5;
		opacity: .22;
	  }

	  .cls-680 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-427);
	  }

	  .cls-23 {
		fill: #989898;
		opacity: .53;
	  }

	  .cls-681 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-662);
	  }

	  .cls-682 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-216);
	  }

	  .cls-683 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-118);
	  }

	  .cls-183 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-21);
	  }

	  .cls-184 {
		fill: url(#radial-gradient-71);
	  }

	  .cls-684 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-335);
	  }

	  .cls-185 {
		fill: url(#radial-gradient-91);
	  }

	  .cls-186 {
		fill: url(#radial-gradient-168);
	  }

	  .cls-685 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-369);
	  }

	  .cls-686 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-701);
	  }

	  .cls-187 {
		fill: url(#radial-gradient-81);
	  }

	  .cls-687 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_215-2);
	  }

	  .cls-188 {
		fill: url(#radial-gradient-131);
	  }

	  .cls-688 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-258);
	  }

	  .cls-24 {
		fill: #676767;
		opacity: .78;
	  }

	  .cls-689 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-377);
	  }

	  .cls-690 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-5);
	  }

	  .cls-189 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-36);
	  }

	  .cls-691 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-515);
	  }

	  .cls-692 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-302);
	  }

	  .cls-693 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-266);
	  }

	  .cls-694 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-381);
	  }

	  .cls-695 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-452);
	  }

	  .cls-696 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-529);
	  }

	  .cls-697 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-612);
	  }

	  .cls-698 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-639);
	  }

	  .cls-699 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-602);
	  }

	  .cls-700 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-152);
	  }

	  .cls-190 {
		fill: url(#radial-gradient-237);
	  }

	  .cls-701 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-119);
	  }

	  .cls-191 {
		fill: url(#radial-gradient-134);
	  }

	  .cls-702 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-572);
	  }

	  .cls-703 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-544);
	  }

	  .cls-704 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-630);
	  }

	  .cls-192 {
		fill: url(#radial-gradient-46);
	  }

	  .cls-705 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-23);
	  }

	  .cls-193 {
		fill: url(#radial-gradient-16);
	  }

	  .cls-706 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-421);
	  }

	  .cls-194 {
		fill: url(#radial-gradient-35);
	  }

	  .cls-707 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-607);
	  }

	  .cls-708 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-549);
	  }

	  .cls-709 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-392);
	  }

	  .cls-195 {
		fill: url(#radial-gradient-61);
	  }

	  .cls-710 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-124);
	  }

	  .cls-25 {
		fill: #898989;
		opacity: .61;
	  }

	  .cls-711 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-688);
	  }

	  .cls-712 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-687);
	  }

	  .cls-713 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-577);
	  }

	  .cls-196 {
		fill: url(#radial-gradient-102);
	  }

	  .cls-714 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-13);
	  }

	  .cls-715 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-603);
	  }

	  .cls-197 {
		fill: url(#radial-gradient-194);
	  }

	  .cls-198 {
		fill: url(#radial-gradient-156);
	  }

	  .cls-199 {
		fill: url(#radial-gradient-144);
	  }

	  .cls-200 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-20);
	  }

	  .cls-716 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-263);
	  }

	  .cls-717 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-651);
	  }

	  .cls-718 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-26);
	  }

	  .cls-719 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-341);
	  }

	  .cls-720 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-560);
	  }

	  .cls-201 {
		fill: url(#radial-gradient-301);
	  }

	  .cls-202 {
		fill: url(#radial-gradient-212);
	  }

	  .cls-721 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-255);
	  }

	  .cls-722 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-38);
	  }

	  .cls-723 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-188);
	  }

	  .cls-724 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-507);
	  }

	  .cls-725 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-361);
	  }

	  .cls-726 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-373);
	  }

	  .cls-203 {
		fill: url(#radial-gradient-215);
	  }

	  .cls-727 {
		fill: none;
	  }

	  .cls-728 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-615);
	  }

	  .cls-204 {
		fill: url(#radial-gradient-163);
	  }

	  .cls-205 {
		fill: url(#radial-gradient-85);
	  }

	  .cls-729 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-239);
	  }

	  .cls-730 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-546);
	  }

	  .cls-206 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-12);
	  }

	  .cls-731 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-298);
	  }

	  .cls-732 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-307);
	  }

	  .cls-733 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-320);
	  }

	  .cls-734 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-583);
	  }

	  .cls-735 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-113);
	  }

	  .cls-736 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-53);
	  }

	  .cls-737 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-397);
	  }

	  .cls-738 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-496);
	  }

	  .cls-207 {
		fill: url(#radial-gradient-293);
	  }

	  .cls-208 {
		fill: url(#radial-gradient-198);
	  }

	  .cls-739 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-15);
	  }

	  .cls-209 {
		fill: url(#radial-gradient-100);
	  }

	  .cls-740 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-481);
	  }

	  .cls-741 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-561);
	  }

	  .cls-742 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-202);
	  }

	  .cls-210 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-7);
	  }

	  .cls-743 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-741);
	  }

	  .cls-211 {
		fill: url(#radial-gradient-60);
	  }

	  .cls-744 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-411);
	  }

	  .cls-212 {
		fill: url(#radial-gradient-193);
	  }

	  .cls-213 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-13);
	  }

	  .cls-214 {
		fill: url(#radial-gradient-21);
	  }

	  .cls-745 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-500);
	  }

	  .cls-215 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_27);
	  }

	  .cls-746 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-114);
	  }

	  .cls-216 {
		fill: url(#radial-gradient-42);
	  }

	  .cls-747 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-296);
	  }

	  .cls-748 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-232);
	  }

	  .cls-217 {
		fill: url(#radial-gradient-319);
	  }

	  .cls-749 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-179);
	  }

	  .cls-218 {
		fill: url(#radial-gradient-139);
	  }

	  .cls-219 {
		fill: url(#radial-gradient-118);
	  }

	  .cls-220 {
		fill: url(#radial-gradient-58);
	  }

	  .cls-750 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-588);
	  }

	  .cls-751 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-315);
	  }

	  .cls-221 {
		fill: url(#radial-gradient-363);
	  }

	  .cls-752 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-365);
	  }

	  .cls-222 {
		fill: url(#radial-gradient-36);
	  }

	  .cls-753 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-595);
	  }

	  .cls-754 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-601);
	  }

	  .cls-223 {
		fill: url(#radial-gradient-154);
	  }

	  .cls-755 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-237);
	  }

	  .cls-224 {
		fill: url(#radial-gradient-313);
	  }

	  .cls-225 {
		fill: url(#radial-gradient-44);
	  }

	  .cls-226 {
		fill: url(#radial-gradient-124);
	  }

	  .cls-756 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-261);
	  }

	  .cls-757 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-413);
	  }

	  .cls-758 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-356);
	  }

	  .cls-227 {
		fill: url(#radial-gradient-308);
	  }

	  .cls-228 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-3);
	  }

	  .cls-26 {
		fill: #7e7e7e;
		opacity: .67;
	  }

	  .cls-229 {
		fill: url(#radial-gradient-341);
	  }

	  .cls-759 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-402);
	  }

	  .cls-230 {
		fill: url(#radial-gradient-49);
	  }

	  .cls-760 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-326);
	  }

	  .cls-761 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-471);
	  }

	  .cls-762 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-57);
	  }

	  .cls-763 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-182);
	  }

	  .cls-231 {
		fill: url(#radial-gradient-342);
	  }

	  .cls-764 {
		fill: url(#radial-gradient);
	  }

	  .cls-232 {
		fill: url(#radial-gradient-157);
	  }

	  .cls-27 {
		fill: #a0a0a0;
		opacity: .49;
	  }

	  .cls-765 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-197);
	  }

	  .cls-233 {
		fill: url(#radial-gradient-80);
	  }

	  .cls-234 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-28);
	  }

	  .cls-766 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-225);
	  }

	  .cls-767 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-75);
	  }

	  .cls-768 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-32);
	  }

	  .cls-235 {
		fill: url(#radial-gradient-78);
	  }

	  .cls-236 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-28);
	  }

	  .cls-769 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-87);
	  }

	  .cls-770 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-613);
	  }

	  .cls-237 {
		fill: url(#radial-gradient-360);
	  }

	  .cls-771 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-472);
	  }

	  .cls-772 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-388);
	  }

	  .cls-773 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-543);
	  }

	  .cls-774 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-159);
	  }

	  .cls-775 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-506);
	  }

	  .cls-776 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-509);
	  }

	  .cls-777 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-412);
	  }

	  .cls-778 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-737);
	  }

	  .cls-238 {
		fill: url(#radial-gradient-299);
	  }

	  .cls-239 {
		fill: url(#radial-gradient-151);
	  }

	  .cls-240 {
		fill: url(#radial-gradient-307);
	  }

	  .cls-779 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-52);
	  }

	  .cls-780 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-555);
	  }

	  .cls-781 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-316);
	  }

	  .cls-241 {
		fill: url(#radial-gradient-122);
	  }

	  .cls-242 {
		fill: url(#radial-gradient-14);
	  }

	  .cls-782 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-519);
	  }

	  .cls-783 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-462);
	  }

	  .cls-243 {
		fill: url(#radial-gradient-99);
	  }

	  .cls-244 {
		fill: url(#radial-gradient-10);
	  }

	  .cls-784 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-636);
	  }

	  .cls-245 {
		fill: url(#radial-gradient-345);
	  }

	  .cls-785 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-240);
	  }

	  .cls-786 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-537);
	  }

	  .cls-787 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-742);
	  }

	  .cls-788 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-647);
	  }

	  .cls-789 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-695);
	  }

	  .cls-790 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-539);
	  }

	  .cls-791 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-552);
	  }

	  .cls-792 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-545);
	  }

	  .cls-246 {
		fill: url(#radial-gradient-264);
	  }

	  .cls-247 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-19);
	  }

	  .cls-793 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-727);
	  }

	  .cls-248 {
		fill: url(#radial-gradient-242);
	  }

	  .cls-794 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-171);
	  }

	  .cls-795 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-313);
	  }

	  .cls-796 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-663);
	  }

	  .cls-797 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-666);
	  }

	  .cls-798 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-164);
	  }

	  .cls-799 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-120);
	  }

	  .cls-249 {
		fill: url(#radial-gradient-70);
	  }

	  .cls-800 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-439);
	  }

	  .cls-250 {
		fill: url(#radial-gradient-120);
	  }

	  .cls-251 {
		fill: url(#radial-gradient-51);
	  }

	  .cls-252 {
		fill: url(#radial-gradient-207);
	  }

	  .cls-253 {
		fill: url(#radial-gradient-292);
	  }

	  .cls-254 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-30);
	  }

	  .cls-255 {
		fill: url(#radial-gradient-74);
	  }

	  .cls-801 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-624);
	  }

	  .cls-802 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-511);
	  }

	  .cls-256 {
		fill: url(#radial-gradient-270);
	  }

	  .cls-803 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-379);
	  }

	  .cls-804 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-294);
	  }

	  .cls-257 {
		fill: url(#radial-gradient-65);
	  }

	  .cls-805 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-625);
	  }

	  .cls-806 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-448);
	  }

	  .cls-807 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-200);
	  }

	  .cls-808 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-398);
	  }

	  .cls-809 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-79);
	  }

	  .cls-258 {
		fill: url(#radial-gradient-188);
	  }

	  .cls-259 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-22);
	  }

	  .cls-810 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-353);
	  }

	  .cls-811 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-551);
	  }

	  .cls-812 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-343);
	  }

	  .cls-813 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-233);
	  }

	  .cls-814 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-62);
	  }

	  .cls-260 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-19);
	  }

	  .cls-815 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-655);
	  }

	  .cls-28 {
		fill: #a4a4a4;
		opacity: .47;
	  }

	  .cls-261 {
		fill: url(#radial-gradient-185);
	  }

	  .cls-816 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-473);
	  }

	  .cls-817 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-54);
	  }

	  .cls-818 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-671);
	  }

	  .cls-819 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-589);
	  }

	  .cls-820 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-11);
	  }

	  .cls-262 {
		fill: url(#radial-gradient-64);
	  }

	  .cls-821 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-631);
	  }

	  .cls-822 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-395);
	  }

	  .cls-823 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-565);
	  }

	  .cls-263 {
		fill: url(#radial-gradient-331);
	  }

	  .cls-824 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-456);
	  }

	  .cls-264 {
		fill: url(#radial-gradient-75);
	  }

	  .cls-825 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-661);
	  }

	  .cls-826 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-194);
	  }

	  .cls-827 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-78);
	  }

	  .cls-265 {
		fill: url(#radial-gradient-278);
	  }

	  .cls-828 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-562);
	  }

	  .cls-829 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-579);
	  }

	  .cls-830 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-60);
	  }

	  .cls-266 {
		fill: url(#radial-gradient-357);
	  }

	  .cls-267 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-26);
	  }

	  .cls-268 {
		fill: url(#radial-gradient-47);
	  }

	  .cls-269 {
		fill: url(#radial-gradient-192);
	  }

	  .cls-270 {
		fill: url(#radial-gradient-140);
	  }

	  .cls-831 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-659);
	  }

	  .cls-832 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-151);
	  }

	  .cls-271 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-17);
	  }

	  .cls-833 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-198);
	  }

	  .cls-834 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-37);
	  }

	  .cls-272 {
		fill: url(#radial-gradient-184);
	  }

	  .cls-835 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-696);
	  }

	  .cls-836 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-614);
	  }

	  .cls-837 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-391);
	  }

	  .cls-838 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-318);
	  }

	  .cls-273 {
		fill: url(#radial-gradient-323);
	  }

	  .cls-839 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-720);
	  }

	  .cls-274 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-24);
	  }

	  .cls-840 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-652);
	  }

	  .cls-841 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-170);
	  }

	  .cls-842 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-528);
	  }

	  .cls-843 {
		isolation: isolate;
	  }

	  .cls-844 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-204);
	  }

	  .cls-845 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-94);
	  }

	  .cls-846 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-279);
	  }

	  .cls-275 {
		fill: url(#radial-gradient-186);
	  }

	  .cls-276 {
		fill: url(#radial-gradient-361);
	  }

	  .cls-847 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-97);
	  }

	  .cls-277 {
		fill: url(#radial-gradient-236);
	  }

	  .cls-848 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34);
	  }

	  .cls-849 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-169);
	  }

	  .cls-850 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-273);
	  }

	  .cls-851 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-248);
	  }

	  .cls-852 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-400);
	  }

	  .cls-853 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-573);
	  }

	  .cls-854 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-41);
	  }

	  .cls-278 {
		fill: url(#radial-gradient-101);
	  }

	  .cls-855 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-396);
	  }

	  .cls-279 {
		fill: url(#radial-gradient-126);
	  }

	  .cls-280 {
		fill: url(#radial-gradient-63);
	  }

	  .cls-281 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-35);
	  }

	  .cls-282 {
		fill: url(#radial-gradient-295);
	  }

	  .cls-856 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-498);
	  }

	  .cls-857 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-477);
	  }

	  .cls-283 {
		fill: url(#radial-gradient-213);
	  }

	  .cls-29 {
		fill: #e4e4e4;
		opacity: .14;
	  }

	  .cls-858 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-743);
	  }

	  .cls-284 {
		fill: url(#radial-gradient-117);
	  }

	  .cls-859 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-327);
	  }

	  .cls-860 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-416);
	  }

	  .cls-861 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-568);
	  }

	  .cls-862 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-102);
	  }

	  .cls-863 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-559);
	  }

	  .cls-864 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-609);
	  }

	  .cls-285 {
		fill: url(#radial-gradient-183);
	  }

	  .cls-865 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-295);
	  }

	  .cls-286 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-9);
	  }

	  .cls-866 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-236);
	  }

	  .cls-867 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-658);
	  }

	  .cls-868 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-708);
	  }

	  .cls-869 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-694);
	  }

	  .cls-870 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-265);
	  }

	  .cls-871 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-201);
	  }

	  .cls-872 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-748);
	  }

	  .cls-873 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-91);
	  }

	  .cls-874 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-405);
	  }

	  .cls-875 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-435);
	  }

	  .cls-287 {
		fill: url(#radial-gradient-320);
	  }

	  .cls-288 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106);
	  }

	  .cls-876 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-128);
	  }

	  .cls-877 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-618);
	  }

	  .cls-878 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-670);
	  }

	  .cls-30 {
		fill: #545454;
		opacity: .88;
	  }

	  .cls-879 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-325);
	  }

	  .cls-880 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-283);
	  }

	  .cls-289 {
		fill: url(#radial-gradient-150);
	  }

	  .cls-881 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-3);
	  }

	  .cls-882 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-138);
	  }

	  .cls-290 {
		fill: url(#radial-gradient-93);
	  }

	  .cls-883 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-428);
	  }

	  .cls-884 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-634);
	  }

	  .cls-291 {
		fill: url(#radial-gradient-20);
	  }

	  .cls-31 {
		fill: #f0f0f0;
		opacity: .08;
	  }

	  .cls-885 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-660);
	  }

	  .cls-292 {
		fill: url(#radial-gradient-217);
	  }

	  .cls-886 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-308);
	  }

	  .cls-887 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-189);
	  }

	  .cls-888 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-111);
	  }

	  .cls-889 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-521);
	  }

	  .cls-890 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-623);
	  }

	  .cls-891 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-22);
	  }

	  .cls-892 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-142);
	  }

	  .cls-893 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-717);
	  }

	  .cls-894 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-230);
	  }

	  .cls-895 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-107);
	  }

	  .cls-896 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-262);
	  }

	  .cls-293 {
		fill: url(#radial-gradient-113);
	  }

	  .cls-897 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-375);
	  }

	  .cls-898 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-158);
	  }

	  .cls-899 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-697);
	  }

	  .cls-900 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-403);
	  }

	  .cls-901 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-449);
	  }

	  .cls-902 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-46);
	  }

	  .cls-294 {
		fill: url(#radial-gradient-251);
	  }

	  .cls-295 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_36);
	  }

	  .cls-903 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-145);
	  }

	  .cls-904 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-409);
	  }

	  .cls-32 {
		fill: #bbb;
		opacity: .35;
	  }

	  .cls-905 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-478);
	  }

	  .cls-906 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-66);
	  }

	  .cls-296 {
		fill: url(#radial-gradient-143);
	  }

	  .cls-297 {
		fill: url(#radial-gradient-351);
	  }

	  .cls-907 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-693);
	  }

	  .cls-908 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-430);
	  }

	  .cls-909 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-84);
	  }

	  .cls-910 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-56);
	  }

	  .cls-911 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-447);
	  }

	  .cls-912 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-212);
	  }

	  .cls-913 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-9);
	  }

	  .cls-914 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-31);
	  }

	  .cls-915 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-513);
	  }

	  .cls-298 {
		fill: url(#radial-gradient-305);
	  }

	  .cls-916 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-103);
	  }

	  .cls-917 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-698);
	  }

	  .cls-918 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-51);
	  }

	  .cls-299 {
		fill: url(#radial-gradient-128);
	  }

	  .cls-300 {
		fill: url(#radial-gradient-219);
	  }

	  .cls-919 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-367);
	  }

	  .cls-301 {
		fill: url(#radial-gradient-364);
	  }

	  .cls-920 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-336);
	  }

	  .cls-921 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-210);
	  }

	  .cls-922 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-368);
	  }

	  .cls-302 {
		fill: url(#radial-gradient-170);
	  }

	  .cls-303 {
		fill: url(#radial-gradient-3);
	  }

	  .cls-923 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-293);
	  }

	  .cls-304 {
		fill: url(#radial-gradient-316);
	  }

	  .cls-924 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-12);
	  }

	  .cls-925 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-594);
	  }

	  .cls-305 {
		fill: url(#radial-gradient-352);
	  }

	  .cls-926 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-303);
	  }

	  .cls-927 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-45);
	  }

	  .cls-33 {
		fill: #e8e8e8;
		opacity: .12;
	  }

	  .cls-306 {
		fill: url(#radial-gradient-89);
	  }

	  .cls-307 {
		fill: url(#radial-gradient-96);
	  }

	  .cls-928 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-438);
	  }

	  .cls-308 {
		fill: url(#radial-gradient-284);
	  }

	  .cls-929 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-214);
	  }

	  .cls-309 {
		fill: url(#radial-gradient-27);
	  }

	  .cls-310 {
		fill: url(#radial-gradient-175);
	  }

	  .cls-311 {
		fill: url(#radial-gradient-282);
	  }

	  .cls-930 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-231);
	  }

	  .cls-931 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-65);
	  }

	  .cls-932 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-251);
	  }

	  .cls-312 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-24);
	  }

	  .cls-933 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-130);
	  }

	  .cls-934 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-269);
	  }

	  .cls-935 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-275);
	  }

	  .cls-936 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-387);
	  }

	  .cls-313 {
		fill: url(#radial-gradient-28);
	  }

	  .cls-937 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-176);
	  }

	  .cls-938 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-117);
	  }

	  .cls-939 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-355);
	  }

	  .cls-940 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-627);
	  }

	  .cls-314 {
		fill: url(#radial-gradient-285);
	  }

	  .cls-941 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-394);
	  }

	  .cls-942 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-386);
	  }

	  .cls-315 {
		fill: url(#radial-gradient-53);
	  }

	  .cls-943 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-50);
	  }

	  .cls-944 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-739);
	  }

	  .cls-316 {
		fill: url(#radial-gradient-125);
	  }

	  .cls-945 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-703);
	  }

	  .cls-317 {
		fill: url(#radial-gradient-266);
	  }

	  .cls-318 {
		fill: url(#radial-gradient-38);
	  }

	  .cls-946 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-605);
	  }

	  .cls-947 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-480);
	  }

	  .cls-319 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-23);
	  }

	  .cls-320 {
		fill: url(#radial-gradient-350);
	  }

	  .cls-948 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-582);
	  }

	  .cls-949 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-81);
	  }

	  .cls-950 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-668);
	  }

	  .cls-34 {
		fill: #ddd;
		opacity: .18;
	  }

	  .cls-951 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-548);
	  }

	  .cls-952 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-538);
	  }

	  .cls-321 {
		fill: url(#radial-gradient-26);
	  }

	  .cls-953 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-208);
	  }

	  .cls-322 {
		fill: url(#radial-gradient-232);
	  }

	  .cls-954 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-224);
	  }

	  .cls-323 {
		fill: url(#radial-gradient-283);
	  }

	  .cls-955 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-608);
	  }

	  .cls-324 {
		fill: url(#radial-gradient-180);
	  }

	  .cls-956 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-571);
	  }

	  .cls-957 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-112);
	  }

	  .cls-958 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-211);
	  }

	  .cls-959 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-63);
	  }

	  .cls-960 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-442);
	  }

	  .cls-961 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-284);
	  }

	  .cls-962 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-487);
	  }

	  .cls-325 {
		fill: url(#radial-gradient-235);
	  }

	  .cls-326 {
		fill: url(#radial-gradient-339);
	  }

	  .cls-963 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-193);
	  }

	  .cls-327 {
		fill: url(#radial-gradient-344);
	  }

	  .cls-964 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-746);
	  }

	  .cls-965 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-633);
	  }

	  .cls-966 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-88);
	  }

	  .cls-328 {
		fill: url(#radial-gradient-106);
	  }

	  .cls-329 {
		fill: url(#radial-gradient-224);
	  }

	  .cls-967 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-332);
	  }

	  .cls-968 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-389);
	  }

	  .cls-330 {
		fill: url(#radial-gradient-37);
	  }

	  .cls-969 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-116);
	  }

	  .cls-970 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-334);
	  }

	  .cls-971 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-723);
	  }

	  .cls-331 {
		fill: url(#radial-gradient-33);
	  }

	  .cls-35 {
		fill: #484848;
		opacity: .94;
	  }

	  .cls-36 {
		fill: #c2c2c2;
		opacity: .31;
	  }

	  .cls-972 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-590);
	  }

	  .cls-332 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-31);
	  }

	  .cls-333 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-4);
	  }

	  .cls-973 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-277);
	  }

	  .cls-974 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-440);
	  }

	  .cls-975 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-641);
	  }

	  .cls-334 {
		fill: url(#radial-gradient-327);
	  }

	  .cls-976 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-347);
	  }

	  .cls-977 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-191);
	  }

	  .cls-978 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-399);
	  }

	  .cls-979 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-278);
	  }

	  .cls-980 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-267);
	  }

	  .cls-335 {
		fill: url(#radial-gradient-11);
	  }

	  .cls-981 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-674);
	  }

	  .cls-982 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-690);
	  }

	  .cls-983 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-418);
	  }

	  .cls-984 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-707);
	  }

	  .cls-336 {
		fill: url(#radial-gradient-4);
	  }

	  .cls-985 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-459);
	  }

	  .cls-986 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-524);
	  }

	  .cls-337 {
		fill: url(#radial-gradient-147);
	  }

	  .cls-987 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-669);
	  }

	  .cls-988 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-563);
	  }

	  .cls-338 {
		fill: url(#radial-gradient-347);
	  }

	  .cls-989 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-569);
	  }

	  .cls-339 {
		fill: url(#radial-gradient-116);
	  }

	  .cls-990 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-168);
	  }

	  .cls-340 {
		fill: url(#radial-gradient-13);
	  }

	  .cls-991 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-331);
	  }

	  .cls-992 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-404);
	  }

	  .cls-993 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-6);
	  }

	  .cls-341 {
		fill: url(#radial-gradient-166);
	  }

	  .cls-342 {
		fill: url(#radial-gradient-136);
	  }

	  .cls-343 {
		fill: url(#radial-gradient-362);
	  }

	  .cls-344 {
		fill: url(#radial-gradient-48);
	  }

	  .cls-345 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-7);
	  }

	  .cls-994 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-686);
	  }

	  .cls-995 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-153);
	  }

	  .cls-346 {
		fill: url(#radial-gradient-7);
	  }

	  .cls-996 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-429);
	  }

	  .cls-997 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-227);
	  }

	  .cls-998 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-203);
	  }

	  .cls-347 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-11);
	  }

	  .cls-348 {
		fill: url(#radial-gradient-355);
	  }

	  .cls-349 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-3);
	  }

	  .cls-350 {
		fill: url(#radial-gradient-269);
	  }

	  .cls-999 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-172);
	  }

	  .cls-1000 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-632);
	  }

	  .cls-1001 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-322);
	  }

	  .cls-351 {
		fill: url(#radial-gradient-228);
	  }

	  .cls-352 {
		fill: url(#radial-gradient-241);
	  }

	  .cls-1002 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-554);
	  }

	  .cls-1003 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-254);
	  }

	  .cls-1004 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-161);
	  }

	  .cls-1005 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-105);
	  }

	  .cls-353 {
		fill: url(#radial-gradient-127);
	  }

	  .cls-1006 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-77);
	  }

	  .cls-354 {
		fill: url(#radial-gradient-205);
	  }

	  .cls-1007 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-190);
	  }

	  .cls-1008 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-470);
	  }

	  .cls-1009 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-73);
	  }

	  .cls-355 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-18);
	  }

	  .cls-1010 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-714);
	  }

	  .cls-1011 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-184);
	  }

	  .cls-1012 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-619);
	  }

	  .cls-1013 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-30);
	  }

	  .cls-356 {
		fill: url(#radial-gradient-34);
	  }

	  .cls-357 {
		fill: url(#radial-gradient-275);
	  }

	  .cls-1014 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-497);
	  }

	  .cls-1015 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-431);
	  }

	  .cls-358 {
		fill: url(#radial-gradient-59);
	  }

	  .cls-37 {
		fill: #858585;
		opacity: .63;
	  }

	  .cls-1016 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-371);
	  }

	  .cls-359 {
		fill: url(#radial-gradient-304);
	  }

	  .cls-1017 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-724);
	  }

	  .cls-1018 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-27);
	  }

	  .cls-1019 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-380);
	  }

	  .cls-1020 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-692);
	  }

	  .cls-1021 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-282);
	  }

	  .cls-360 {
		fill: url(#radial-gradient-329);
	  }

	  .cls-1022 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-350);
	  }

	  .cls-1023 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-122);
	  }

	  .cls-1024 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-36);
	  }

	  .cls-1025 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-370);
	  }

	  .cls-361 {
		fill: url(#radial-gradient-152);
	  }

	  .cls-362 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-6);
	  }

	  .cls-363 {
		fill: url(#radial-gradient-68);
	  }

	  .cls-1026 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-205);
	  }

	  .cls-1027 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-527);
	  }

	  .cls-1028 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-550);
	  }

	  .cls-1029 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-475);
	  }

	  .cls-364 {
		fill: url(#radial-gradient-111);
	  }

	  .cls-365 {
		fill: url(#radial-gradient-22);
	  }

	  .cls-1030 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-249);
	  }

	  .cls-1031 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-642);
	  }

	  .cls-1032 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-451);
	  }

	  .cls-1033 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-352);
	  }

	  .cls-1034 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-541);
	  }

	  .cls-1035 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-424);
	  }

	  .cls-1036 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-749);
	  }

	  .cls-366 {
		fill: url(#radial-gradient-112);
	  }

	  .cls-1037 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-74);
	  }

	  .cls-1038 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-518);
	  }

	  .cls-367 {
		fill: url(#radial-gradient-230);
	  }

	  .cls-1039 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-243);
	  }

	  .cls-1040 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-321);
	  }

	  .cls-1041 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-222);
	  }

	  .cls-1042 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-359);
	  }

	  .cls-1043 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_229);
	  }

	  .cls-38 {
		fill: #919191;
		opacity: .57;
	  }

	  .cls-1044 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-85);
	  }

	  .cls-1045 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-259);
	  }

	  .cls-1046 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-4);
	  }

	  .cls-1047 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-238);
	  }

	  .cls-1048 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-328);
	  }

	  .cls-1049 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-685);
	  }

	  .cls-1050 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_208-2);
	  }

	  .cls-368 {
		fill: url(#radial-gradient-169);
	  }

	  .cls-369 {
		fill: url(#radial-gradient-203);
	  }

	  .cls-1051 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-64);
	  }

	  .cls-370 {
		fill: url(#radial-gradient-337);
	  }

	  .cls-371 {
		fill: url(#radial-gradient-314);
	  }

	  .cls-1052 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-706);
	  }

	  .cls-1053 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-617);
	  }

	  .cls-1054 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-585);
	  }

	  .cls-1055 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-446);
	  }

	  .cls-372 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-16);
	  }

	  .cls-1056 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-444);
	  }

	  .cls-373 {
		fill: url(#radial-gradient-199);
	  }

	  .cls-1057 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-108);
	  }

	  .cls-374 {
		fill: url(#radial-gradient-162);
	  }

	  .cls-375 {
		fill: url(#radial-gradient-209);
	  }

	  .cls-1058 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-58);
	  }

	  .cls-1059 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-407);
	  }

	  .cls-1060 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-417);
	  }

	  .cls-1061 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-95);
	  }

	  .cls-376 {
		fill: url(#radial-gradient-133);
	  }

	  .cls-377 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-6);
	  }

	  .cls-1062 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-89);
	  }

	  .cls-1063 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-42);
	  }

	  .cls-1064 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-96);
	  }

	  .cls-1065 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-49);
	  }

	  .cls-378 {
		fill: url(#radial-gradient-265);
	  }

	  .cls-1066 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-485);
	  }

	  .cls-1067 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-699);
	  }

	  .cls-1068 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-291);
	  }

	  .cls-379 {
		fill: url(#radial-gradient-349);
	  }

	  .cls-1069 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-383);
	  }

	  .cls-380 {
		fill: url(#radial-gradient-246);
	  }

	  .cls-381 {
		fill: url(#radial-gradient-179);
	  }

	  .cls-382 {
		fill: url(#radial-gradient-220);
	  }

	  .cls-39 {
		fill: #d9d9d9;
		opacity: .2;
	  }

	  .cls-1070 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-474);
	  }

	  .cls-383 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-22);
	  }

	  .cls-384 {
		fill: url(#radial-gradient-239);
	  }

	  .cls-40 {
		fill: #a8a8a8;
		opacity: .45;
	  }

	  .cls-1071 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-721);
	  }

	  .cls-385 {
		fill: url(#radial-gradient-92);
	  }

	  .cls-386 {
		fill: url(#radial-gradient-245);
	  }

	  .cls-387 {
		fill: url(#radial-gradient-171);
	  }

	  .cls-1072 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-157);
	  }

	  .cls-1073 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-533);
	  }

	  .cls-1074 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-276);
	  }

	  .cls-1075 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-574);
	  }

	  .cls-1076 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-39);
	  }

	  .cls-1077 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-616);
	  }

	  .cls-1078 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-260);
	  }

	  .cls-388 {
		fill: url(#radial-gradient-223);
	  }

	  .cls-1079 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-751);
	  }

	  .cls-389 {
		fill: url(#radial-gradient-297);
	  }

	  .cls-1080 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-7);
	  }

	  .cls-390 {
		fill: url(#radial-gradient-178);
	  }

	  .cls-1081 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-558);
	  }

	  .cls-1082 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-137);
	  }

	  .cls-391 {
		fill: url(#radial-gradient-57);
	  }

	  .cls-1083 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-422);
	  }

	  .cls-1084 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-656);
	  }

	  .cls-1085 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-76);
	  }

	  .cls-1086 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-129);
	  }

	  .cls-1087 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-134);
	  }

	  .cls-1088 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-684);
	  }

	  .cls-392 {
		fill: url(#radial-gradient-244);
	  }

	  .cls-393 {
		fill: url(#radial-gradient-142);
	  }

	  .cls-1089 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-34);
	  }

	  .cls-1090 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-700);
	  }

	  .cls-1091 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-270);
	  }

	  .cls-1092 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-640);
	  }

	  .cls-1093 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-385);
	  }

	  .cls-1094 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-338);
	  }

	  .cls-394 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-4);
	  }

	  .cls-1095 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-503);
	  }

	  .cls-1096 {
		fill: #ccc;
	  }

	  .cls-1097 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-637);
	  }

	  .cls-1098 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-346);
	  }

	  .cls-1099 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-526);
	  }

	  .cls-395 {
		fill: url(#radial-gradient-318);
	  }

	  .cls-1100 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-432);
	  }

	  .cls-1101 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-626);
	  }

	  .cls-1102 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-710);
	  }

	  .cls-396 {
		fill: url(#radial-gradient-190);
	  }

	  .cls-1103 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-664);
	  }

	  .cls-397 {
		fill: url(#radial-gradient-164);
	  }

	  .cls-1104 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-133);
	  }

	  .cls-1105 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-672);
	  }

	  .cls-1106 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-401);
	  }

	  .cls-398 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-21);
	  }

	  .cls-399 {
		fill: url(#radial-gradient-296);
	  }

	  .cls-400 {
		fill: url(#radial-gradient-211);
	  }

	  .cls-401 {
		fill: url(#radial-gradient-332);
	  }

	  .cls-402 {
		fill: url(#radial-gradient-300);
	  }

	  .cls-1107 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-364);
	  }

	  .cls-1108 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-257);
	  }

	  .cls-1109 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-16);
	  }

	  .cls-1110 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-218);
	  }

	  .cls-41 {
		fill: #afafaf;
		opacity: .41;
	  }

	  .cls-1111 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-677);
	  }

	  .cls-1112 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-414);
	  }

	  .cls-403 {
		fill: url(#radial-gradient-189);
	  }

	  .cls-404 {
		fill: url(#radial-gradient-109);
	  }

	  .cls-1113 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-141);
	  }

	  .cls-405 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-17);
	  }

	  .cls-1114 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-454);
	  }

	  .cls-1115 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-309);
	  }

	  .cls-406 {
		fill: url(#radial-gradient-114);
	  }

	  .cls-42 {
		fill: #3d3d3d;
	  }

	  .cls-1116 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-156);
	  }

	  .cls-407 {
		fill: url(#radial-gradient-271);
	  }

	  .cls-1117 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-98);
	  }

	  .cls-408 {
		fill: url(#radial-gradient-315);
	  }

	  .cls-1118 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-460);
	  }

	  .cls-1119 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-736);
	  }

	  .cls-1120 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-592);
	  }

	  .cls-409 {
		fill: url(#radial-gradient-268);
	  }

	  .cls-410 {
		fill: url(#radial-gradient-115);
	  }

	  .cls-1121 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-564);
	  }

	  .cls-1122 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-264);
	  }

	  .cls-1123 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-599);
	  }

	  .cls-43 {
		fill: #8d8d8d;
		opacity: .59;
	  }

	  .cls-1124 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-492);
	  }

	  .cls-1125 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-199);
	  }

	  .cls-1126 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-68);
	  }

	  .cls-1127 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-19);
	  }

	  .cls-411 {
		fill: url(#radial-gradient-303);
	  }

	  .cls-412 {
		fill: url(#radial-gradient-243);
	  }

	  .cls-1128 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-342);
	  }

	  .cls-1129 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-136);
	  }

	  .cls-413 {
		fill: url(#radial-gradient-343);
	  }

	  .cls-1130 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-340);
	  }

	  .cls-414 {
		fill: url(#radial-gradient-336);
	  }

	  .cls-415 {
		fill: url(#radial-gradient-176);
	  }

	  .cls-416 {
		fill: url(#radial-gradient-358);
	  }

	  .cls-1131 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-644);
	  }

	  .cls-1132 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-319);
	  }

	  .cls-1133 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-213);
	  }

	  .cls-1134 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-712);
	  }

	  .cls-417 {
		fill: url(#radial-gradient-173);
	  }

	  .cls-418 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-27);
	  }

	  .cls-1135 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-680);
	  }

	  .cls-1136 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-678);
	  }

	  .cls-1137 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-483);
	  }

	  .cls-1138 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-740);
	  }

	  .cls-419 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-26);
	  }

	  .cls-1139 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-604);
	  }

	  .cls-1140 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-374);
	  }

	  .cls-1141 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-621);
	  }

	  .cls-1142 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-465);
	  }

	  .cls-420 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-2);
	  }

	  .cls-1143 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-289);
	  }

	  .cls-1144 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-155);
	  }

	  .cls-421 {
		fill: url(#radial-gradient-346);
	  }

	  .cls-1145 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-747);
	  }

	  .cls-1146 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-106);
	  }

	  .cls-422 {
		fill: url(#radial-gradient-196);
	  }

	  .cls-1147 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-540);
	  }

	  .cls-1148 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-115);
	  }

	  .cls-1149 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-499);
	  }

	  .cls-423 {
		fill: url(#radial-gradient-15);
	  }

	  .cls-44 {
		fill: #636363;
		opacity: .8;
	  }

	  .cls-424 {
		fill: url(#radial-gradient-354);
	  }

	  .cls-45 {
		fill: #d1d1d1;
		opacity: .24;
	  }

	  .cls-1150 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-333);
	  }

	  .cls-1151 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-436);
	  }

	  .cls-1152 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-109);
	  }

	  .cls-425 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-16);
	  }

	  .cls-1153 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-689);
	  }

	  .cls-426 {
		fill: url(#radial-gradient-123);
	  }

	  .cls-1154 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-43);
	  }

	  .cls-427 {
		fill: url(#radial-gradient-204);
	  }

	  .cls-1155 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-59);
	  }

	  .cls-428 {
		fill: url(#radial-gradient-82);
	  }

	  .cls-429 {
		fill: url(#radial-gradient-97);
	  }

	  .cls-1156 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-504);
	  }

	  .cls-1157 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-415);
	  }

	  .cls-430 {
		fill: url(#radial-gradient-254);
	  }

	  .cls-431 {
		fill: url(#radial-gradient-160);
	  }

	  .cls-432 {
		fill: url(#radial-gradient-326);
	  }

	  .cls-433 {
		fill: url(#radial-gradient-249);
	  }

	  .cls-1158 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-584);
	  }

	  .cls-1159 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-180);
	  }

	  .cls-46 {
		fill: #b3b3b3;
		opacity: .39;
	  }

	  .cls-1160 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-525);
	  }

	  .cls-434 {
		fill: url(#radial-gradient-2);
	  }

	  .cls-435 {
		fill: url(#radial-gradient-201);
	  }

	  .cls-436 {
		fill: url(#radial-gradient-330);
	  }

	  .cls-437 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-8);
	  }

	  .cls-1161 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-704);
	  }

	  .cls-438 {
		fill: url(#radial-gradient-39);
	  }

	  .cls-1162 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-458);
	  }

	  .cls-439 {
		fill: url(#radial-gradient-17);
	  }

	  .cls-1163 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-40);
	  }

	  .cls-1164 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-733);
	  }

	  .cls-1165 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-709);
	  }

	  .cls-1166 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-744);
	  }

	  .cls-440 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_36-2);
	  }

	  .cls-1167 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-132);
	  }

	  .cls-441 {
		fill: url(#radial-gradient-359);
	  }

	  .cls-1168 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-72);
	  }

	  .cls-1169 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-408);
	  }

	  .cls-47 {
		fill: #ececec;
		opacity: .1;
	  }

	  .cls-442 {
		fill: url(#radial-gradient-52);
	  }

	  .cls-1170 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-146);
	  }

	  .cls-1171 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-502);
	  }

	  .cls-1172 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-457);
	  }

	  .cls-443 {
		fill: url(#radial-gradient-182);
	  }

	  .cls-444 {
		fill: url(#radial-gradient-23);
	  }

	  .cls-1173 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-250);
	  }

	  .cls-1174 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-297);
	  }

	  .cls-445 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-5);
	  }

	  .cls-446 {
		fill: url(#radial-gradient-132);
	  }

	  .cls-1175 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-82);
	  }

	  .cls-447 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_54);
	  }

	  .cls-1176 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-329);
	  }

	  .cls-1177 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-195);
	  }

	  .cls-1178 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-285);
	  }

	  .cls-1179 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_208);
	  }

	  .cls-1180 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-530);
	  }

	  .cls-1181 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-598);
	  }

	  .cls-1182 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-174);
	  }

	  .cls-1183 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-610);
	  }

	  .cls-1184 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-20);
	  }

	  .cls-1185 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-556);
	  }

	  .cls-448 {
		fill: url(#radial-gradient-262);
	  }

	  .cls-1186 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-406);
	  }

	  .cls-1187 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-437);
	  }

	  .cls-449 {
		fill: url(#radial-gradient-356);
	  }

	  .cls-1188 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-312);
	  }

	  .cls-450 {
		fill: url(#radial-gradient-321);
	  }

	  .cls-1189 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-445);
	  }

	  .cls-1190 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-372);
	  }

	  .cls-1191 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-301);
	  }

	  .cls-451 {
		fill: url(#radial-gradient-76);
	  }

	  .cls-452 {
		fill: url(#radial-gradient-222);
	  }

	  .cls-1192 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-351);
	  }

	  .cls-1193 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-648);
	  }

	  .cls-453 {
		fill: url(#radial-gradient-110);
	  }

	  .cls-1194 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-510);
	  }

	  .cls-1195 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-750);
	  }

	  .cls-1196 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-468);
	  }

	  .cls-454 {
		fill: url(#radial-gradient-258);
	  }

	  .cls-1197 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-196);
	  }

	  .cls-1198 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-495);
	  }

	  .cls-455 {
		fill: url(#radial-gradient-25);
	  }

	  .cls-1199 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-596);
	  }

	  .cls-1200 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-628);
	  }

	  .cls-456 {
		fill: url(#radial-gradient-24);
	  }

	  .cls-1201 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-71);
	  }

	  .cls-457 {
		fill: url(#radial-gradient-12);
	  }

	  .cls-48 {
		fill: #818181;
		opacity: .65;
	  }

	  .cls-1202 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-357);
	  }

	  .cls-1203 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-523);
	  }

	  .cls-1204 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-126);
	  }

	  .cls-458 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-13);
	  }

	  .cls-459 {
		fill: url(#radial-gradient-261);
	  }

	  .cls-460 {
		fill: url(#radial-gradient-302);
	  }

	  .cls-461 {
		fill: url(#radial-gradient-174);
	  }

	  .cls-1205 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-725);
	  }

	  .cls-462 {
		fill: url(#radial-gradient-233);
	  }

	  .cls-49 {
		fill: #cecece;
		opacity: .25;
	  }

	  .cls-463 {
		fill: url(#radial-gradient-288);
	  }

	  .cls-50 {
		fill: #5f5f5f;
		opacity: .82;
	  }

	  .cls-464 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_106-18);
	  }

	  .cls-465 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-20);
	  }

	  .cls-466 {
		fill: url(#radial-gradient-56);
	  }

	  .cls-467 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-15);
	  }

	  .cls-1206 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-570);
	  }

	  .cls-1207 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-67);
	  }

	  .cls-1208 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-173);
	  }

	  .cls-1209 {
		clip-path: url(#clippath);
	  }

	  .cls-1210 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-752);
	  }

	  .cls-1211 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-25);
	  }

	  .cls-1212 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-150);
	  }

	  .cls-468 {
		fill: url(#radial-gradient-279);
	  }

	  .cls-1213 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-69);
	  }

	  .cls-1214 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-425);
	  }

	  .cls-469 {
		fill: url(#radial-gradient-121);
	  }

	  .cls-1215 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-178);
	  }

	  .cls-470 {
		fill: url(#radial-gradient-148);
	  }

	  .cls-1216 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-505);
	  }

	  .cls-1217 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-587);
	  }

	  .cls-1218 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-221);
	  }

	  .cls-471 {
		fill: url(#radial-gradient-84);
	  }

	  .cls-472 {
		fill: url(#radial-gradient-340);
	  }

	  .cls-1219 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-192);
	  }

	  .cls-1220 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-378);
	  }

	  .cls-1221 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-235);
	  }

	  .cls-1222 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-711);
	  }

	  .cls-51 {
		fill: #414141;
		opacity: .98;
	  }

	  .cls-1223 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-657);
	  }

	  .cls-473 {
		fill: url(#radial-gradient-289);
	  }

	  .cls-474 {
		fill: url(#radial-gradient-155);
	  }

	  .cls-1224 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-466);
	  }

	  .cls-475 {
		fill: url(#radial-gradient-252);
	  }

	  .cls-1225 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-482);
	  }

	  .cls-1226 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-220);
	  }

	  .cls-476 {
		fill: url(#radial-gradient-257);
	  }

	  .cls-477 {
		fill: url(#radial-gradient-324);
	  }

	  .cls-478 {
		fill: url(#radial-gradient-67);
	  }

	  .cls-52 {
		fill: #ababab;
		opacity: .43;
	  }

	  .cls-53 {
		fill: #505050;
		opacity: .9;
	  }

	  .cls-1227 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-148);
	  }

	  .cls-1228 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-228);
	  }

	  .cls-54 {
		fill: #727272;
		opacity: .73;
	  }

	  .cls-479 {
		fill: url(#radial-gradient-248);
	  }

	  .cls-1229 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-149);
	  }

	  .cls-480 {
		fill: url(#radial-gradient-221);
	  }

	  .cls-481 {
		fill: url(#radial-gradient-55);
	  }

	  .cls-482 {
		fill: url(#radial-gradient-8);
	  }

	  .cls-55 {
		fill: #6e6e6e;
		opacity: .75;
	  }

	  .cls-483 {
		fill: url(#radial-gradient-253);
	  }

	  .cls-1230 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-469);
	  }

	  .cls-1231 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-567);
	  }

	  .cls-484 {
		fill: url(#radial-gradient-348);
	  }

	  .cls-1232 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-127);
	  }

	  .cls-485 {
		fill: url(#radial-gradient-191);
	  }

	  .cls-1233 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-557);
	  }

	  .cls-486 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_2-27);
	  }

	  .cls-487 {
		fill: url(#radial-gradient-267);
	  }

	  .cls-488 {
		fill: url(#radial-gradient-145);
	  }

	  .cls-1234 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-622);
	  }

	  .cls-489 {
		fill: url(#radial-gradient-208);
	  }

	  .cls-1235 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-390);
	  }

	  .cls-1236 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-716);
	  }

	  .cls-490 {
		fill: url(#radial-gradient-30);
	  }

	  .cls-1237 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-183);
	  }

	  .cls-1238 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-516);
	  }

	  .cls-1239 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-731);
	  }

	  .cls-491 {
		fill: url(#radial-gradient-83);
	  }

	  .cls-1240 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-290);
	  }

	  .cls-492 {
		fill: url(#radial-gradient-294);
	  }

	  .cls-1241 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-464);
	  }

	  .cls-1242 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-745);
	  }

	  .cls-1243 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-433);
	  }

	  .cls-1244 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-2);
	  }

	  .cls-493 {
		fill: url(#radial-gradient-146);
	  }

	  .cls-56 {
		fill: #f4f4f4;
		opacity: .06;
	  }

	  .cls-1245 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-393);
	  }

	  .cls-1246 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-638);
	  }

	  .cls-1247 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-646);
	  }

	  .cls-1248 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-719);
	  }

	  .cls-1249 {
		fill: url(#_Áåçûìÿííûé_ãðàäèåíò_34-611);
	  }

	  .cls-494 {
		fill: url(#radial-gradient-200);
	  }
	</style>
	<clipPath id="clippath">
	  <rect class="cls-727" width="2166" height="3839"/>
	</clipPath>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="-.64" y1="1112" x2="-.64" y2="1062" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#f7f7f7"/>
	  <stop offset="1" stop-color="#fff"/>
	</linearGradient>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-2" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" x2="93.86" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-3" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" x2="188.37" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-4" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" x2="282.87" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-5" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" x2="377.37" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-6" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" x2="471.88" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-7" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" x2="566.38" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-8" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" x2="660.88" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-9" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" x2="755.38" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-10" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" x2="849.89" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-11" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" x2="944.39" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-12" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" x2="1038.89" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-13" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" x2="1133.4" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-14" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" x2="1227.9" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-15" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" x2="1322.4" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-16" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" x2="1416.9" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-17" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" x2="1511.41" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-18" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" x2="1605.91" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-19" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" x2="1700.41" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-20" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" x2="1794.91" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-21" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" x2="1889.42" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-22" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" x2="1983.92" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-23" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" x2="2078.42" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-24" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" x2="2172.93" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-25" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1162" x2="46.86" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-26" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1162" x2="141.37" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-27" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1162" x2="235.87" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-28" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1162" x2="330.37" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-29" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1162" x2="424.88" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-30" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1162" x2="519.38" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-31" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1162" x2="613.88" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-32" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1162" x2="708.38" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-33" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1162" x2="802.89" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-34" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1162" x2="897.39" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-35" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1162" x2="991.89" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-36" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1162" x2="1086.4" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-37" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1162" x2="1180.9" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-38" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1162" x2="1275.4" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-39" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1162" x2="1369.9" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-40" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1162" x2="1464.41" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-41" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1162" x2="1558.91" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-42" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1162" x2="1653.41" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-43" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1162" x2="1747.91" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-44" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1162" x2="1842.42" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-45" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1162" x2="1936.92" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-46" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1162" x2="2031.42" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-47" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1162" x2="2125.93" y2="1112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-48" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1212" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-49" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1212" x2="93.86" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-50" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1212" x2="188.37" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-51" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1212" x2="282.87" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-52" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1212" x2="377.37" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-53" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1212" x2="471.88" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-54" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1212" x2="566.38" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-55" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1212" x2="660.88" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-56" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1212" x2="755.38" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-57" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1212" x2="849.89" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-58" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1212" x2="944.39" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-59" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1212" x2="1038.89" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-60" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1212" x2="1133.4" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-61" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1212" x2="1227.9" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-62" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1212" x2="1322.4" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-63" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1212" x2="1416.9" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-64" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1212" x2="1511.41" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-65" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1212" x2="1605.91" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-66" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1212" x2="1700.41" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-67" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1212" x2="1794.91" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-68" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1212" x2="1889.42" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-69" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1212" x2="1983.92" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-70" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1212" x2="2078.42" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-71" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1212" x2="2172.93" y2="1162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-72" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1262" x2="46.86" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-73" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1262" x2="141.37" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-74" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1262" x2="235.87" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-75" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1262" x2="330.37" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-76" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1262" x2="424.88" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-77" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1262" x2="519.38" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-78" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1262" x2="613.88" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-79" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1262" x2="708.38" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-80" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1262" x2="802.89" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-81" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1262" x2="897.39" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-82" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1262" x2="991.89" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-83" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1262" x2="1086.4" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-84" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1262" x2="1180.9" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-85" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1262" x2="1275.4" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-86" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1262" x2="1369.9" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-87" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1262" x2="1464.41" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-88" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1262" x2="1558.91" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-89" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1262" x2="1653.41" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-90" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1262" x2="1747.91" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-91" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1262" x2="1842.42" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-92" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1262" x2="1936.92" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-93" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1262" x2="2031.42" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-94" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1262" x2="2125.93" y2="1212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-95" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1312" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-96" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1312" x2="93.86" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-97" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1312" x2="188.37" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-98" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1312" x2="282.87" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-99" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1312" x2="377.37" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-100" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1312" x2="471.88" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-101" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1312" x2="566.38" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-102" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1312" x2="660.88" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-103" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1312" x2="755.38" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-104" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1312" x2="849.89" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-105" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1312" x2="944.39" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-106" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1312" x2="1038.89" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-107" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1312" x2="1133.4" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-108" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1312" x2="1227.9" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-109" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1312" x2="1322.4" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-110" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1312" x2="1416.9" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-111" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1312" x2="1511.41" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-112" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1312" x2="1605.91" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-113" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1312" x2="1700.41" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-114" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1312" x2="1794.91" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-115" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1312" x2="1889.42" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-116" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1312" x2="1983.92" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-117" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1312" x2="2078.42" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-118" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1312" x2="2172.93" y2="1262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-119" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1362" x2="46.86" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-120" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1362" x2="141.37" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-121" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1362" x2="235.87" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-122" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1362" x2="330.37" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-123" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1362" x2="424.88" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-124" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1362" x2="519.38" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-125" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1362" x2="613.88" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-126" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1362" x2="708.38" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-127" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1362" x2="802.89" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-128" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1362" x2="897.39" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-129" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1362" x2="991.89" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-130" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1362" x2="1086.4" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-131" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1362" x2="1180.9" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-132" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1362" x2="1275.4" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-133" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1362" x2="1369.9" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-134" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1362" x2="1464.41" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-135" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1362" x2="1558.91" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-136" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1362" x2="1653.41" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-137" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1362" x2="1747.91" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-138" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1362" x2="1842.42" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-139" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1362" x2="1936.92" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-140" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1362" x2="2031.42" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-141" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1362" x2="2125.93" y2="1312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-142" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1412" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-143" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1412" x2="93.86" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-144" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1412" x2="188.37" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-145" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1412" x2="282.87" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-146" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1412" x2="377.37" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-147" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1412" x2="471.88" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-148" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1412" x2="566.38" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-149" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1412" x2="660.88" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-150" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1412" x2="755.38" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-151" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1412" x2="849.89" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-152" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1412" x2="944.39" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-153" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1412" x2="1038.89" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-154" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1412" x2="1133.4" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-155" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1412" x2="1227.9" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-156" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1412" x2="1322.4" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-157" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1412" x2="1416.9" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-158" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1412" x2="1511.41" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-159" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1412" x2="1605.91" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-160" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1412" x2="1700.41" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-161" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1412" x2="1794.91" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-162" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1412" x2="1889.42" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-163" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1412" x2="1983.92" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-164" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1412" x2="2078.42" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-165" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1412" x2="2172.93" y2="1362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-166" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1462" x2="46.86" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-167" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1462" x2="141.37" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-168" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1462" x2="235.87" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-169" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1462" x2="330.37" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-170" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1462" x2="424.88" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-171" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1462" x2="519.38" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-172" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1462" x2="613.88" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-173" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1462" x2="708.38" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-174" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1462" x2="802.89" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-175" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1462" x2="897.39" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-176" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1462" x2="991.89" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-177" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1462" x2="1086.4" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-178" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1462" x2="1180.9" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-179" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1462" x2="1275.4" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-180" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1462" x2="1369.9" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-181" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1462" x2="1464.41" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-182" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1462" x2="1558.91" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-183" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1462" x2="1653.41" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-184" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1462" x2="1747.91" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-185" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1462" x2="1842.42" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-186" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1462" x2="1936.92" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-187" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1462" x2="2031.42" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-188" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1462" x2="2125.93" y2="1412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-189" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1512" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-190" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1512" x2="93.86" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-191" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1512" x2="188.37" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-192" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1512" x2="282.87" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-193" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1512" x2="377.37" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-194" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1512" x2="471.88" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-195" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1512" x2="566.38" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-196" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1512" x2="660.88" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-197" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1512" x2="755.38" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-198" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1512" x2="849.89" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-199" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1512" x2="944.39" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-200" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1512" x2="1038.89" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-201" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1512" x2="1133.4" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-202" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1512" x2="1227.9" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-203" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1512" x2="1322.4" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-204" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1512" x2="1416.9" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-205" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1512" x2="1511.41" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-206" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1512" x2="1605.91" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-207" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1512" x2="1700.41" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-208" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1512" x2="1794.91" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-209" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1512" x2="1889.42" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-210" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1512" x2="1983.92" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-211" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1512" x2="2078.42" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-212" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1512" x2="2172.93" y2="1462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-213" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1562" x2="46.86" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-214" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1562" x2="141.37" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-215" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1562" x2="235.87" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-216" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1562" x2="330.37" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-217" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1562" x2="424.88" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-218" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1562" x2="519.38" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-219" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1562" x2="613.88" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-220" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1562" x2="708.38" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-221" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1562" x2="802.89" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-222" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1562" x2="897.39" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-223" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1562" x2="991.89" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-224" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1562" x2="1086.4" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-225" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1562" x2="1180.9" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-226" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1562" x2="1275.4" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-227" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1562" x2="1369.9" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-228" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1562" x2="1464.41" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-229" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1562" x2="1558.91" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-230" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1562" x2="1653.41" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-231" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1562" x2="1747.91" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-232" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1562" x2="1842.42" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-233" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1562" x2="1936.92" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-234" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1562" x2="2031.42" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-235" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1562" x2="2125.93" y2="1512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-236" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1612" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-237" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1612" x2="93.86" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-238" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1612" x2="188.37" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-239" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1612" x2="282.87" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-240" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1612" x2="377.37" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-241" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1612" x2="471.88" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-242" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1612" x2="566.38" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-243" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1612" x2="660.88" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-244" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1612" x2="755.38" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-245" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1612" x2="849.89" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-246" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1612" x2="944.39" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-247" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1612" x2="1038.89" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-248" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1612" x2="1133.4" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-249" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1612" x2="1227.9" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-250" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1612" x2="1322.4" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-251" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1612" x2="1416.9" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-252" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1612" x2="1511.41" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-253" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1612" x2="1605.91" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-254" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1612" x2="1700.41" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-255" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1612" x2="1794.91" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-256" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1612" x2="1889.42" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-257" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1612" x2="1983.92" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-258" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1612" x2="2078.42" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-259" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1612" x2="2172.93" y2="1562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-260" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1662" x2="46.86" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-261" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1662" x2="141.37" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-262" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1662" x2="235.87" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-263" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1662" x2="330.37" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-264" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1662" x2="424.88" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-265" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1662" x2="519.38" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-266" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1662" x2="613.88" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-267" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1662" x2="708.38" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-268" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1662" x2="802.89" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-269" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1662" x2="897.39" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-270" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1662" x2="991.89" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-271" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1662" x2="1086.4" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-272" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1662" x2="1180.9" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-273" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1662" x2="1275.4" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-274" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1662" x2="1369.9" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-275" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1662" x2="1464.41" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-276" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1662" x2="1558.91" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-277" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1662" x2="1653.41" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-278" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1662" x2="1747.91" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-279" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1662" x2="1842.42" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-280" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1662" x2="1936.92" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-281" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1662" x2="2031.42" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-282" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1662" x2="2125.93" y2="1612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-283" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1712" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-284" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1712" x2="93.86" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-285" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1712" x2="188.37" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-286" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1712" x2="282.87" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-287" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1712" x2="377.37" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-288" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1712" x2="471.88" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-289" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1712" x2="566.38" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-290" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1712" x2="660.88" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-291" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1712" x2="755.38" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-292" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1712" x2="849.89" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-293" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1712" x2="944.39" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-294" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1712" x2="1038.89" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-295" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1712" x2="1133.4" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-296" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1712" x2="1227.9" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-297" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1712" x2="1322.4" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-298" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1712" x2="1416.9" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-299" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1712" x2="1511.41" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-300" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1712" x2="1605.91" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-301" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1712" x2="1700.41" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-302" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1712" x2="1794.91" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-303" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1712" x2="1889.42" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-304" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1712" x2="1983.92" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-305" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1712" x2="2078.42" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-306" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1712" x2="2172.93" y2="1662" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-307" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1762" x2="46.86" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-308" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1762" x2="141.37" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-309" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1762" x2="235.87" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-310" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1762" x2="330.37" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-311" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1762" x2="424.88" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-312" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1762" x2="519.38" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-313" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1762" x2="613.88" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-314" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1762" x2="708.38" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-315" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1762" x2="802.89" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-316" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1762" x2="897.39" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-317" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1762" x2="991.89" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-318" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1762" x2="1086.4" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-319" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1762" x2="1180.9" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-320" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1762" x2="1275.4" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-321" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1762" x2="1369.9" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-322" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1762" x2="1464.41" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-323" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1762" x2="1558.91" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-324" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1762" x2="1653.41" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-325" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1762" x2="1747.91" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-326" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1762" x2="1842.42" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-327" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1762" x2="1936.92" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-328" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1762" x2="2031.42" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-329" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1762" x2="2125.93" y2="1712" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-330" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1812" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-331" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1812" x2="93.86" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-332" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1812" x2="188.37" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-333" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1812" x2="282.87" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-334" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1812" x2="377.37" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-335" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1812" x2="471.88" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-336" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1812" x2="566.38" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-337" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1812" x2="660.88" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-338" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1812" x2="755.38" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-339" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1812" x2="849.89" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-340" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1812" x2="944.39" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-341" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1812" x2="1038.89" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-342" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1812" x2="1133.4" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-343" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1812" x2="1227.9" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-344" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1812" x2="1322.4" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-345" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1812" x2="1416.9" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-346" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1812" x2="1511.41" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-347" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1812" x2="1605.91" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-348" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1812" x2="1700.41" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-349" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1812" x2="1794.91" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-350" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1812" x2="1889.42" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-351" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1812" x2="1983.92" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-352" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1812" x2="2078.42" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-353" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1812" x2="2172.93" y2="1762" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-354" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1862" x2="46.86" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-355" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1862" x2="141.37" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-356" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1862" x2="235.87" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-357" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1862" x2="330.37" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-358" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1862" x2="424.88" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-359" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1862" x2="519.38" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-360" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1862" x2="613.88" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-361" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1862" x2="708.38" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-362" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1862" x2="802.89" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-363" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1862" x2="897.39" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-364" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1862" x2="991.89" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-365" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1862" x2="1086.4" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-366" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1862" x2="1180.9" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-367" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1862" x2="1275.4" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-368" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1862" x2="1369.9" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-369" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1862" x2="1464.41" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-370" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1862" x2="1558.91" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-371" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1862" x2="1653.41" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-372" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1862" x2="1747.91" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-373" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1862" x2="1842.42" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-374" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1862" x2="1936.92" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-375" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1862" x2="2031.42" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-376" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1862" x2="2125.93" y2="1812" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-377" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="1912" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-378" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="1912" x2="93.86" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-379" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="1912" x2="188.37" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-380" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="1912" x2="282.87" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-381" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="1912" x2="377.37" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-382" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="1912" x2="471.88" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-383" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="1912" x2="566.38" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-384" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="1912" x2="660.88" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-385" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="1912" x2="755.38" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-386" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="1912" x2="849.89" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-387" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="1912" x2="944.39" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-388" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="1912" x2="1038.89" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-389" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="1912" x2="1133.4" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-390" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="1912" x2="1227.9" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-391" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="1912" x2="1322.4" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-392" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="1912" x2="1416.9" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-393" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="1912" x2="1511.41" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-394" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="1912" x2="1605.91" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-395" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="1912" x2="1700.41" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-396" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="1912" x2="1794.91" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-397" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="1912" x2="1889.42" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-398" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="1912" x2="1983.92" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-399" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="1912" x2="2078.42" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-400" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="1912" x2="2172.93" y2="1862" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-401" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="1962" x2="46.86" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-402" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="1962" x2="141.37" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-403" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="1962" x2="235.87" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-404" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="1962" x2="330.37" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-405" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="1962" x2="424.88" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-406" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="1962" x2="519.38" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-407" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="1962" x2="613.88" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-408" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="1962" x2="708.38" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-409" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="1962" x2="802.89" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-410" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="1962" x2="897.39" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-411" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="1962" x2="991.89" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-412" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="1962" x2="1086.4" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-413" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="1962" x2="1180.9" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-414" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="1962" x2="1275.4" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-415" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="1962" x2="1369.9" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-416" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="1962" x2="1464.41" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-417" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="1962" x2="1558.91" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-418" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="1962" x2="1653.41" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-419" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="1962" x2="1747.91" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-420" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="1962" x2="1842.42" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-421" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="1962" x2="1936.92" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-422" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="1962" x2="2031.42" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-423" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="1962" x2="2125.93" y2="1912" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-424" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2012" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-425" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2012" x2="93.86" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-426" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2012" x2="188.37" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-427" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2012" x2="282.87" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-428" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2012" x2="377.37" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-429" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2012" x2="471.88" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-430" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2012" x2="566.38" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-431" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2012" x2="660.88" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-432" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2012" x2="755.38" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-433" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2012" x2="849.89" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-434" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2012" x2="944.39" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-435" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2012" x2="1038.89" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-436" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2012" x2="1133.4" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-437" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2012" x2="1227.9" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-438" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2012" x2="1322.4" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-439" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2012" x2="1416.9" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-440" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2012" x2="1511.41" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-441" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2012" x2="1605.91" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-442" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2012" x2="1700.41" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-443" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2012" x2="1794.91" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-444" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2012" x2="1889.42" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-445" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2012" x2="1983.92" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-446" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2012" x2="2078.42" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-447" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2012" x2="2172.93" y2="1962" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-448" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2062" x2="46.86" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-449" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2062" x2="141.37" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-450" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2062" x2="235.87" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-451" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2062" x2="330.37" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-452" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2062" x2="424.88" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-453" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2062" x2="519.38" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-454" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2062" x2="613.88" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-455" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2062" x2="708.38" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-456" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2062" x2="802.89" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-457" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2062" x2="897.39" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-458" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2062" x2="991.89" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-459" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2062" x2="1086.4" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-460" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2062" x2="1180.9" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-461" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2062" x2="1275.4" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-462" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2062" x2="1369.9" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-463" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2062" x2="1464.41" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-464" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2062" x2="1558.91" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-465" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2062" x2="1653.41" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-466" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2062" x2="1747.91" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-467" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2062" x2="1842.42" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-468" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2062" x2="1936.92" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-469" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2062" x2="2031.42" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-470" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2062" x2="2125.93" y2="2012" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-471" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2112" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-472" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2112" x2="93.86" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-473" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2112" x2="188.37" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-474" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2112" x2="282.87" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-475" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2112" x2="377.37" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-476" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2112" x2="471.88" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-477" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2112" x2="566.38" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-478" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2112" x2="660.88" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-479" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2112" x2="755.38" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-480" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2112" x2="849.89" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-481" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2112" x2="944.39" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-482" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2112" x2="1038.89" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-483" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2112" x2="1133.4" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-484" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2112" x2="1227.9" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-485" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2112" x2="1322.4" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-486" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2112" x2="1416.9" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-487" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2112" x2="1511.41" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-488" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2112" x2="1605.91" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-489" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2112" x2="1700.41" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-490" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2112" x2="1794.91" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-491" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2112" x2="1889.42" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-492" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2112" x2="1983.92" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-493" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2112" x2="2078.42" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-494" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2112" x2="2172.93" y2="2062" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-495" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2162" x2="46.86" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-496" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2162" x2="141.37" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-497" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2162" x2="235.87" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-498" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2162" x2="330.37" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-499" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2162" x2="424.88" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-500" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2162" x2="519.38" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-501" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2162" x2="613.88" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-502" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2162" x2="708.38" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-503" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2162" x2="802.89" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-504" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2162" x2="897.39" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-505" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2162" x2="991.89" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-506" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2162" x2="1086.4" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-507" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2162" x2="1180.9" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-508" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2162" x2="1275.4" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-509" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2162" x2="1369.9" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-510" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2162" x2="1464.41" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-511" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2162" x2="1558.91" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-512" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2162" x2="1653.41" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-513" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2162" x2="1747.91" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-514" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2162" x2="1842.42" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-515" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2162" x2="1936.92" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-516" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2162" x2="2031.42" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-517" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2162" x2="2125.93" y2="2112" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-518" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2212" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-519" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2212" x2="93.86" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-520" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2212" x2="188.37" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-521" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2212" x2="282.87" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-522" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2212" x2="377.37" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-523" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2212" x2="471.88" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-524" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2212" x2="566.38" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-525" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2212" x2="660.88" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-526" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2212" x2="755.38" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-527" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2212" x2="849.89" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-528" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2212" x2="944.39" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-529" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2212" x2="1038.89" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-530" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2212" x2="1133.4" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-531" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2212" x2="1227.9" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-532" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2212" x2="1322.4" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-533" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2212" x2="1416.9" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-534" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2212" x2="1511.41" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-535" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2212" x2="1605.91" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-536" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2212" x2="1700.41" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-537" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2212" x2="1794.91" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-538" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2212" x2="1889.42" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-539" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2212" x2="1983.92" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-540" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2212" x2="2078.42" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-541" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2212" x2="2172.93" y2="2162" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-542" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2262" x2="46.86" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-543" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2262" x2="141.37" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-544" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2262" x2="235.87" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-545" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2262" x2="330.37" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-546" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2262" x2="424.88" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-547" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2262" x2="519.38" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-548" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2262" x2="613.88" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-549" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2262" x2="708.38" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-550" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2262" x2="802.89" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-551" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2262" x2="897.39" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-552" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2262" x2="991.89" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-553" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2262" x2="1086.4" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-554" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2262" x2="1180.9" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-555" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2262" x2="1275.4" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-556" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2262" x2="1369.9" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-557" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2262" x2="1464.41" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-558" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2262" x2="1558.91" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-559" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2262" x2="1653.41" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-560" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2262" x2="1747.91" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-561" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2262" x2="1842.42" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-562" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2262" x2="1936.92" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-563" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2262" x2="2031.42" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-564" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2262" x2="2125.93" y2="2212" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-565" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="-.64" y1="2312" x2="-.64" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-566" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2312" x2="93.86" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-567" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2312" x2="188.37" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-568" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2312" x2="282.87" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-569" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2312" x2="377.37" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-570" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2312" x2="471.88" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-571" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2312" x2="566.38" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-572" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2312" x2="660.88" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-573" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2312" x2="755.38" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-574" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2312" x2="849.89" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-575" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2312" x2="944.39" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-576" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2312" x2="1038.89" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-577" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.39" y1="2312" x2="1133.39" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-578" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2312" x2="1227.9" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-579" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2312" x2="1322.4" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-580" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2312" x2="1416.9" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-581" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2312" x2="1511.41" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-582" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2312" x2="1605.91" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-583" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2312" x2="1700.41" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-584" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2312" x2="1794.91" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-585" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2312" x2="1889.42" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-586" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2312" x2="1983.92" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-587" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2312" x2="2078.42" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-588" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2312" x2="2172.93" y2="2262" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-589" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2362" x2="46.86" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-590" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2362" x2="141.37" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-591" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2362" x2="235.87" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-592" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2362" x2="330.37" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-593" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2362" x2="424.88" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-594" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2362" x2="519.38" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-595" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2362" x2="613.88" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-596" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2362" x2="708.38" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-597" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2362" x2="802.89" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-598" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2362" x2="897.39" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-599" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2362" x2="991.89" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-600" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2362" x2="1086.4" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-601" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2362" x2="1180.9" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-602" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2362" x2="1275.4" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-603" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2362" x2="1369.9" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-604" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2362" x2="1464.41" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-605" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2362" x2="1558.91" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-606" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2362" x2="1653.41" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-607" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2362" x2="1747.91" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-608" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2362" x2="1842.42" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-609" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2362" x2="1936.92" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-610" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2362" x2="2031.42" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-611" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2362" x2="2125.93" y2="2312" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-612" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2412" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-613" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2412" x2="93.86" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-614" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2412" x2="188.37" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-615" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2412" x2="282.87" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-616" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2412" x2="377.37" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-617" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2412" x2="471.88" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-618" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2412" x2="566.38" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-619" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2412" x2="660.88" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-620" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2412" x2="755.38" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-621" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2412" x2="849.89" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-622" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2412" x2="944.39" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-623" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2412" x2="1038.89" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-624" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2412" x2="1133.4" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-625" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2412" x2="1227.9" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-626" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2412" x2="1322.4" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-627" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2412" x2="1416.9" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-628" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2412" x2="1511.41" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-629" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2412" x2="1605.91" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-630" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2412" x2="1700.41" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-631" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2412" x2="1794.91" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-632" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2412" x2="1889.42" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-633" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2412" x2="1983.92" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-634" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2412" x2="2078.42" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-635" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2412" x2="2172.93" y2="2362" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-636" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2462" x2="46.86" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-637" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2462" x2="141.37" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-638" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2462" x2="235.87" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-639" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2462" x2="330.37" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-640" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2462" x2="424.88" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-641" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2462" x2="519.38" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-642" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2462" x2="613.88" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-643" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2462" x2="708.38" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-644" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2462" x2="802.89" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-645" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2462" x2="897.39" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-646" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2462" x2="991.89" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-647" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2462" x2="1086.4" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-648" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2462" x2="1180.9" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-649" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2462" x2="1275.4" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-650" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2462" x2="1369.9" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-651" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2462" x2="1464.41" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-652" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2462" x2="1558.91" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-653" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2462" x2="1653.41" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-654" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2462" x2="1747.91" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-655" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2462" x2="1842.42" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-656" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2462" x2="1936.92" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-657" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2462" x2="2031.42" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-658" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2462" x2="2125.93" y2="2412" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-659" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2512" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-660" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2512" x2="93.86" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-661" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2512" x2="188.37" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-662" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2512" x2="282.87" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-663" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2512" x2="377.37" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-664" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2512" x2="471.88" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-665" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2512" x2="566.38" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-666" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2512" x2="660.88" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-667" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2512" x2="755.38" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-668" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2512" x2="849.89" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-669" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2512" x2="944.39" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-670" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2512" x2="1038.89" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-671" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2512" x2="1133.4" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-672" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2512" x2="1227.9" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-673" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2512" x2="1322.4" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-674" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2512" x2="1416.9" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-675" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2512" x2="1511.41" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-676" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2512" x2="1605.91" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-677" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2512" x2="1700.41" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-678" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2512" x2="1794.91" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-679" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2512" x2="1889.42" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-680" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2512" x2="1983.92" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-681" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2512" x2="2078.42" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-682" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2512" x2="2172.93" y2="2462" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-683" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2562" x2="46.86" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-684" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2562" x2="141.37" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-685" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2562" x2="235.87" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-686" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2562" x2="330.37" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-687" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2562" x2="424.88" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-688" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2562" x2="519.38" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-689" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2562" x2="613.88" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-690" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2562" x2="708.38" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-691" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2562" x2="802.89" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-692" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2562" x2="897.39" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-693" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2562" x2="991.89" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-694" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2562" x2="1086.4" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-695" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2562" x2="1180.9" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-696" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2562" x2="1275.4" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-697" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2562" x2="1369.9" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-698" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2562" x2="1464.41" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-699" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2562" x2="1558.91" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-700" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2562" x2="1653.41" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-701" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2562" x2="1747.91" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-702" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2562" x2="1842.42" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-703" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2562" x2="1936.92" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-704" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2562" x2="2031.42" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-705" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2562" x2="2125.93" y2="2512" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-706" data-name="Áåçûìÿííûé ãðàäèåíò 34" y1="2612" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-707" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="93.86" y1="2612" x2="93.86" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-708" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="188.37" y1="2612" x2="188.37" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-709" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="282.87" y1="2612" x2="282.87" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-710" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="377.37" y1="2612" x2="377.37" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-711" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="471.88" y1="2612" x2="471.88" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-712" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="566.38" y1="2612" x2="566.38" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-713" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="660.88" y1="2612" x2="660.88" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-714" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="755.38" y1="2612" x2="755.38" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-715" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="849.89" y1="2612" x2="849.89" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-716" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="944.39" y1="2612" x2="944.39" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-717" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1038.89" y1="2612" x2="1038.89" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-718" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1133.4" y1="2612" x2="1133.4" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-719" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1227.9" y1="2612" x2="1227.9" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-720" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1322.4" y1="2612" x2="1322.4" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-721" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1416.9" y1="2612" x2="1416.9" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-722" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1511.41" y1="2612" x2="1511.41" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-723" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1605.91" y1="2612" x2="1605.91" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-724" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1700.41" y1="2612" x2="1700.41" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-725" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1794.91" y1="2612" x2="1794.91" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-726" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1889.42" y1="2612" x2="1889.42" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-727" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1983.92" y1="2612" x2="1983.92" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-728" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2078.42" y1="2612" x2="2078.42" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-729" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2172.93" y1="2612" x2="2172.93" y2="2562" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-730" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="46.86" y1="2662" x2="46.86" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-731" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="141.37" y1="2662" x2="141.37" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-732" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="235.87" y1="2662" x2="235.87" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-733" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="330.37" y1="2662" x2="330.37" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-734" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="424.88" y1="2662" x2="424.88" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-735" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="519.38" y1="2662" x2="519.38" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-736" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="613.88" y1="2662" x2="613.88" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-737" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="708.38" y1="2662" x2="708.38" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-738" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="802.89" y1="2662" x2="802.89" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-739" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="897.39" y1="2662" x2="897.39" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-740" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="991.89" y1="2662" x2="991.89" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-741" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1086.4" y1="2662" x2="1086.4" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-742" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1180.9" y1="2662" x2="1180.9" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-743" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1275.4" y1="2662" x2="1275.4" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-744" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1369.9" y1="2662" x2="1369.9" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-745" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1464.41" y1="2662" x2="1464.41" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-746" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1558.91" y1="2662" x2="1558.91" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-747" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1653.41" y1="2662" x2="1653.41" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-748" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1747.91" y1="2662" x2="1747.91" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-749" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1842.42" y1="2662" x2="1842.42" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-750" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="1936.92" y1="2662" x2="1936.92" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-751" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2031.42" y1="2662" x2="2031.42" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_34-752" data-name="Áåçûìÿííûé ãðàäèåíò 34" x1="2125.93" y1="2662" x2="2125.93" y2="2612" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_34"/>
	<radialGradient id="radial-gradient" cx="1082.11" cy="2030.08" fx="1082.11" fy="2030.08" r="1556.91" gradientTransform="translate(-8.31 -2559.3) scale(.96 2.41)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#009fdf"/>
	  <stop offset=".32" stop-color="#0d74a5"/>
	  <stop offset=".85" stop-color="#232e49"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-19448.58" cy="2091.36" fx="-19448.58" fy="2091.36" r="1040.68" gradientTransform="translate(-689.63 -583.87) rotate(-35.05) scale(.03 1.35) skewX(-70.29)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#87c7f5"/>
	  <stop offset=".01" stop-color="#86c5f3"/>
	  <stop offset=".05" stop-color="#6da0c5"/>
	  <stop offset=".09" stop-color="#567f9c"/>
	  <stop offset=".14" stop-color="#416077"/>
	  <stop offset=".2" stop-color="#2f4656"/>
	  <stop offset=".25" stop-color="#20303b"/>
	  <stop offset=".32" stop-color="#141e25"/>
	  <stop offset=".4" stop-color="#0b1014"/>
	  <stop offset=".49" stop-color="#040708"/>
	  <stop offset=".63" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-2" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-11649.41" cy="3793.67" fx="-11649.41" fy="3793.67" r="1040.96" gradientTransform="translate(3659.85 1199.32) rotate(58.97) scale(.1 .91) skewX(33.25)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-3" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-8815.68" cy="3068.99" fx="-8815.68" fy="3068.99" r="1041.13" gradientTransform="translate(1997.17 1256.44) rotate(29.94) scale(.14 .56) skewX(22.06)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-4" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-49837.2" cy="3051.63" fx="-49837.2" fy="3051.63" r="1041.95" gradientTransform="translate(2620.15 222.74) rotate(29.93) scale(.03 .96) skewX(74.02)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-5" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="13631.5" cy="1576.16" fx="13631.5" fy="1576.16" r="1039.97" gradientTransform="translate(-1242.78 2250.5) rotate(-80.02) scale(.03 .92) skewX(-67.26)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_36" data-name="Áåçûìÿííûé ãðàäèåíò 36" cx="1864.43" cy="1521.95" fx="1864.43" fy="1521.95" r="1041.06" gradientTransform="translate(-1424.1 2222.42) rotate(-59.57) scale(.51 .94) skewX(-7.91)" gradientUnits="userSpaceOnUse">
	  <stop offset=".03" stop-color="#87c7f5"/>
	  <stop offset=".03" stop-color="#86c5f3"/>
	  <stop offset=".07" stop-color="#6da0c5"/>
	  <stop offset=".11" stop-color="#567f9c"/>
	  <stop offset=".16" stop-color="#416077"/>
	  <stop offset=".21" stop-color="#2f4656"/>
	  <stop offset=".27" stop-color="#20303b"/>
	  <stop offset=".33" stop-color="#141e25"/>
	  <stop offset=".41" stop-color="#0b1014"/>
	  <stop offset=".5" stop-color="#040708"/>
	  <stop offset=".63" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-6" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-1583.18" cy="2927.82" fx="-1583.18" fy="2927.82" r="1041.26" gradientTransform="translate(1889.74 -194.14) rotate(24.98) scale(.48 .99) skewX(11.05)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-7" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-293.24" cy="1841.4" fx="-293.24" fy="1841.4" r="1041.09" gradientTransform="translate(-615.62 549.56) rotate(-35.04) scale(.47 1.01) skewX(-8.5)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-8" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1088.71" cy="13010.24" fx="608.78" fy="13010.24" r="479.94" gradientTransform="translate(317.04 892.98) rotate(55.18) scale(1.81 .06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-9" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1088.71" cy="13010.24" fx="608.78" fy="13010.24" r="479.94" gradientTransform="translate(317.04 892.98) rotate(55.18) scale(1.81 .06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-10" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1289.65" cy="4685.23" fx="809.87" fy="4685.23" r="479.78" gradientTransform="translate(1617.09 -1097.39) rotate(55.18) scale(2.65 .65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-11" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1289.65" cy="4685.23" fx="809.87" fy="4685.23" r="479.78" gradientTransform="translate(1617.09 -1097.39) rotate(55.18) scale(2.65 .65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-12" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1316.72" cy="7820.11" fx="836.92" fy="7820.11" r="479.8" gradientTransform="translate(1100.98 -532.09) rotate(65.23) scale(2.63 .25) skewX(-.28)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-13" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1258.31" cy="6824.33" fx="778.48" fy="6824.33" r="479.83" gradientTransform="translate(165.98 -342.41) rotate(47.43) scale(2.64 .25) skewX(-.38)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-14" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1077.57" cy="639.27" fx="597.6" fy="639.27" r="479.98" gradientTransform="translate(-645.01 1593.15) rotate(33.32) scale(1.81 .06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-15" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1077.57" cy="639.27" fx="597.6" fy="639.27" r="479.98" gradientTransform="translate(-645.01 1593.15) rotate(33.32) scale(1.81 .06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-16" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1282.2" cy="3462.23" fx="802.42" fy="3462.23" r="479.79" gradientTransform="translate(-179.62 -737.75) rotate(33.32) scale(2.65 .65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-17" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1282.2" cy="3462.23" fx="802.42" fy="3462.23" r="479.79" gradientTransform="translate(-179.62 -737.75) rotate(33.32) scale(2.65 .65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-18" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1260.58" cy="4674.32" fx="780.81" fy="4674.32" r="479.77" gradientTransform="translate(-448.03 -20.62) rotate(43.37) scale(2.63 .25) skewX(-.28)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-19" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1289.81" cy="3639.2" fx="809.93" fy="3639.2" r="479.88" gradientTransform="translate(-1245.55 502.8) rotate(25.57) scale(2.64 .25) skewX(-.38)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-20" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-8318.06" cy="2278.54" fx="-8318.06" fy="2278.54" r="1040.68" gradientTransform="translate(3329.62 -583.87) rotate(-144.95) scale(.03 -1.35) skewX(-70.29)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-21" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-9053.91" cy="3381.07" fx="-9053.91" fy="3381.07" r="1040.96" gradientTransform="translate(-1019.86 1199.32) rotate(121.03) scale(.1 -.91) skewX(33.25)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-22" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-5910.48" cy="2676.68" fx="-5910.48" fy="2676.68" r="1041.13" gradientTransform="translate(642.82 1256.44) rotate(150.06) scale(.14 -.56) skewX(22.06)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-23" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-35151.27" cy="2822.58" fx="-35151.27" fy="2822.58" r="1041.95" gradientTransform="translate(19.84 222.74) rotate(150.07) scale(.03 -.96) skewX(74.02)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-24" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="17405.67" cy="2049.18" fx="17405.67" fy="2049.18" r="1039.97" gradientTransform="translate(3882.77 2250.5) rotate(-99.98) scale(.03 -.92) skewX(-67.26)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_36-2" data-name="Áåçûìÿííûé ãðàäèåíò 36" cx="2359.97" cy="1927.4" fx="2359.97" fy="1927.4" r="1041.06" gradientTransform="translate(4064.09 2222.42) rotate(-120.43) scale(.51 -.94) skewX(-7.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_36"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-25" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="-716.79" cy="2739.61" fx="-716.79" fy="2739.61" r="1041.26" gradientTransform="translate(750.25 -194.14) rotate(155.02) scale(.48 -.99) skewX(11.05)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-26" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="507.8" cy="2092.48" fx="507.8" fy="2092.48" r="1041.09" gradientTransform="translate(3255.61 549.56) rotate(-144.96) scale(.47 -1.01) skewX(-8.5)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-27" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1214.49" cy="7370.74" fx="734.55" fy="7370.74" r="479.94" gradientTransform="translate(2322.95 892.98) rotate(124.82) scale(1.81 -.06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-28" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1214.49" cy="7370.74" fx="734.55" fy="7370.74" r="479.94" gradientTransform="translate(2322.95 892.98) rotate(124.82) scale(1.81 -.06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-29" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1375.51" cy="4127.96" fx="895.73" fy="4127.96" r="479.78" gradientTransform="translate(1022.9 -1097.39) rotate(124.82) scale(2.65 -.65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-30" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1375.51" cy="4127.96" fx="895.73" fy="4127.96" r="479.78" gradientTransform="translate(1022.9 -1097.39) rotate(124.82) scale(2.65 -.65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-31" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1378.95" cy="6222.15" fx="899.15" fy="6222.15" r="479.8" gradientTransform="translate(1539.01 -532.09) rotate(114.77) scale(2.63 -.25) skewX(-.28)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-32" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1362.22" cy="5502.47" fx="882.39" fy="5502.47" r="479.83" gradientTransform="translate(2474.01 -342.41) rotate(132.57) scale(2.64 -.25) skewX(-.38)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-33" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1272.16" cy="-3134.71" fx="792.19" fy="-3134.71" r="479.98" gradientTransform="translate(3285 1593.15) rotate(146.68) scale(1.81 -.06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-34" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1272.16" cy="-3134.71" fx="792.19" fy="-3134.71" r="479.98" gradientTransform="translate(3285 1593.15) rotate(146.68) scale(1.81 -.06) skewX(-.13)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-35" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1414.92" cy="3089.33" fx="935.13" fy="3089.33" r="479.79" gradientTransform="translate(2819.61 -737.75) rotate(146.68) scale(2.65 -.65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-36" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1414.92" cy="3089.33" fx="935.13" fy="3089.33" r="479.79" gradientTransform="translate(2819.61 -737.75) rotate(146.68) scale(2.65 -.65) skewX(-.91)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-37" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1376.21" cy="3465.91" fx="896.44" fy="3465.91" r="479.77" gradientTransform="translate(3088.03 -20.62) rotate(136.63) scale(2.63 -.25) skewX(-.28)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_106-38" data-name="Áåçûìÿííûé ãðàäèåíò 106" cx="1434.95" cy="2864.38" fx="955.06" fy="2864.38" r="479.88" gradientTransform="translate(3885.54 502.8) rotate(154.43) scale(2.64 -.25) skewX(-.38)" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_106"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_27" data-name="Áåçûìÿííûé ãðàäèåíò 27" cx="989.56" cy="2901.24" fx="989.56" fy="2901.24" r="1056.26" gradientTransform="translate(-5613.95 3569.48) rotate(-100.5) scale(.25 2.3) skewX(-59.3)" gradientUnits="userSpaceOnUse">
	  <stop offset=".18" stop-color="#9dcff5"/>
	  <stop offset=".19" stop-color="#9ccdf3"/>
	  <stop offset=".22" stop-color="#7ea7c5"/>
	  <stop offset=".25" stop-color="#64849c"/>
	  <stop offset=".29" stop-color="#4c6477"/>
	  <stop offset=".34" stop-color="#374956"/>
	  <stop offset=".39" stop-color="#26323b"/>
	  <stop offset=".44" stop-color="#171f25"/>
	  <stop offset=".5" stop-color="#0d1114"/>
	  <stop offset=".58" stop-color="#050708"/>
	  <stop offset=".69" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_54" data-name="Áåçûìÿííûé ãðàäèåíò 54" cx="2001.1" cy="2964.21" fx="1158.33" fy="2964.21" r="842.77" gradientTransform="translate(10893.65 -3639.51) rotate(90) scale(3.08 3.27)" gradientUnits="userSpaceOnUse">
	  <stop offset=".02" stop-color="#fff"/>
	  <stop offset=".03" stop-color="#f5f5f5"/>
	  <stop offset=".07" stop-color="#c7c7c7"/>
	  <stop offset=".11" stop-color="#9c9c9c"/>
	  <stop offset=".16" stop-color="#777"/>
	  <stop offset=".21" stop-color="#565656"/>
	  <stop offset=".27" stop-color="#3b3b3b"/>
	  <stop offset=".34" stop-color="#252525"/>
	  <stop offset=".41" stop-color="#141414"/>
	  <stop offset=".5" stop-color="#080808"/>
	  <stop offset=".64" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="radial-gradient-2" cx="2729.83" cy="12568.01" fx="2018.27" fy="12559.87" r="714.57" gradientTransform="translate(7966.23 3491.02) rotate(180) scale(2.72 .15)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#ffb64d"/>
	  <stop offset="0" stop-color="#f5af4a"/>
	  <stop offset=".05" stop-color="#c78e3c"/>
	  <stop offset=".09" stop-color="#9c6f2f"/>
	  <stop offset=".14" stop-color="#775423"/>
	  <stop offset=".2" stop-color="#563d1a"/>
	  <stop offset=".25" stop-color="#3b2a11"/>
	  <stop offset=".32" stop-color="#251a0b"/>
	  <stop offset=".4" stop-color="#140e06"/>
	  <stop offset=".49" stop-color="#080602"/>
	  <stop offset=".63" stop-color="#010100"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="radial-gradient-3" cx="2671.16" cy="9934.77" fx="1959.63" fy="9926.63" r="714.54" gradientTransform="translate(3218.14 -5307.42) rotate(97.65) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-4" cx="2671.34" cy="4623.16" fx="1959.83" fy="4615.01" r="714.53" gradientTransform="translate(7998.32 5393.32) rotate(-180) scale(2.7 .81)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-5" cx="2653.34" cy="16125.94" fx="1942.09" fy="16117.8" r="714.26" gradientTransform="translate(2499.43 -5403.88) rotate(94.63) scale(2.7 .06)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-6" cx="2904.47" cy="18094.12" fx="2192.77" fy="18085.98" r="714.71" gradientTransform="translate(7867.69 4094.23) rotate(-180) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-7" cx="2843.45" cy="10748.77" fx="2131.94" fy="10740.63" r="714.53" gradientTransform="translate(7749.92 4639.97) rotate(-180) scale(2.68 .3)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-8" cx="2619.57" cy="6375.8" fx="1907.86" fy="6367.65" r="714.72" gradientTransform="translate(2055.63 -5425.28) rotate(90) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-9" cx="2735.89" cy="23030.73" fx="2024.39" fy="23022.59" r="714.51" gradientTransform="translate(4415.67 -4873.21) rotate(108.25) scale(2.69 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-10" cx="2501.78" cy="8221.39" fx="1790.35" fy="8213.25" r="714.44" gradientTransform="translate(789.77 -4846.04) rotate(82.94) scale(2.56 .04)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-11" cx="2508.53" cy="-11759" fx="1796.32" fy="-11767.15" r="715.22" gradientTransform="translate(-974.61 -4406.81) rotate(69.7) scale(2.56 .04)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-12" cx="2792.04" cy="28982.33" fx="2080.12" fy="28974.18" r="714.93" gradientTransform="translate(5564.95 -4267.33) rotate(116.79) scale(2.7 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-13" cx="2566.78" cy="-12816.76" fx="1855.13" fy="-12824.91" r="714.67" gradientTransform="translate(1124.69 -5591.53) rotate(90) scale(2.7 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-14" cx="2545.6" cy="1104.03" fx="1834.06" fy="1095.89" r="714.56" gradientTransform="translate(1694.11 -5086.86) rotate(90) scale(2.6 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-15" cx="2545.7" cy="1860.01" fx="1834.18" fy="1851.86" r="714.53" gradientTransform="translate(2382.82 -5087.04) rotate(90) scale(2.6 .46)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-16" cx="2580.61" cy="-3459.18" fx="1868.94" fy="-3467.32" r="714.68" gradientTransform="translate(1375.82 -5332.27) rotate(90) scale(2.6 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-17" cx="2671.16" cy="9934.77" fx="1959.63" fy="9926.63" r="714.54" gradientTransform="translate(3218.14 -5307.42) rotate(97.65) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-18" cx="2671.34" cy="4623.16" fx="1959.83" fy="4615.01" r="714.53" gradientTransform="translate(7998.32 5393.32) rotate(-180) scale(2.7 .81)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-19" cx="2653.34" cy="16125.94" fx="1942.09" fy="16117.8" r="714.26" gradientTransform="translate(2499.43 -5403.88) rotate(94.63) scale(2.7 .06)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-20" cx="2904.47" cy="18094.12" fx="2192.77" fy="18085.98" r="714.71" gradientTransform="translate(7867.69 4094.23) rotate(-180) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-21" cx="2843.45" cy="10748.77" fx="2131.94" fy="10740.63" r="714.53" gradientTransform="translate(7749.92 4639.97) rotate(-180) scale(2.68 .3)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-22" cx="2619.57" cy="6375.8" fx="1907.86" fy="6367.65" r="714.72" gradientTransform="translate(2055.63 -5425.28) rotate(90) scale(2.7 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-23" cx="2735.89" cy="23030.73" fx="2024.39" fy="23022.59" r="714.51" gradientTransform="translate(4415.67 -4873.21) rotate(108.25) scale(2.69 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-24" cx="2501.78" cy="8221.39" fx="1790.35" fy="8213.25" r="714.44" gradientTransform="translate(789.77 -4846.04) rotate(82.94) scale(2.56 .04)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-25" cx="2508.53" cy="-11759" fx="1796.32" fy="-11767.15" r="715.22" gradientTransform="translate(-974.61 -4406.81) rotate(69.7) scale(2.56 .04)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-26" cx="2792.04" cy="28982.33" fx="2080.12" fy="28974.18" r="714.93" gradientTransform="translate(5564.95 -4267.33) rotate(116.79) scale(2.7 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-27" cx="2566.78" cy="-12816.76" fx="1855.13" fy="-12824.91" r="714.67" gradientTransform="translate(1124.69 -5591.53) rotate(90) scale(2.7 .08)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-28" cx="2545.6" cy="1104.03" fx="1834.06" fy="1095.89" r="714.56" gradientTransform="translate(1694.11 -5086.86) rotate(90) scale(2.6 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-29" cx="2545.7" cy="1860.01" fx="1834.18" fy="1851.86" r="714.53" gradientTransform="translate(2382.82 -5087.04) rotate(90) scale(2.6 .46)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-30" cx="2580.61" cy="-3459.18" fx="1868.94" fy="-3467.32" r="714.68" gradientTransform="translate(1375.82 -5332.27) rotate(90) scale(2.6 .15)" xlink:href="#radial-gradient-2"/>
	<radialGradient id="radial-gradient-31" cx="-12365.58" cy="82285.19" fx="-12365.58" fy="82285.19" r="712.22" gradientTransform="translate(1325.74 3200.51) rotate(161.57) scale(.02) skewX(-2.49)" gradientUnits="userSpaceOnUse">
	  <stop offset=".1" stop-color="#fff"/>
	  <stop offset=".11" stop-color="#ececec"/>
	  <stop offset=".14" stop-color="#b9b9b9"/>
	  <stop offset=".16" stop-color="#919191"/>
	  <stop offset=".18" stop-color="#757575"/>
	  <stop offset=".2" stop-color="#646464"/>
	  <stop offset=".21" stop-color="#5e5e5e"/>
	  <stop offset=".23" stop-color="#555"/>
	  <stop offset=".28" stop-color="#3b3b3b"/>
	  <stop offset=".35" stop-color="#252525"/>
	  <stop offset=".42" stop-color="#141414"/>
	  <stop offset=".51" stop-color="#080808"/>
	  <stop offset=".64" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="radial-gradient-32" cx="-4551.84" cy="95940.81" fx="-4551.84" fy="95940.81" r="712.28" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-33" cx="-11146.55" cy="84545.56" fx="-11146.55" fy="84545.56" r="712.25" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-34" cx="27123.95" cy="125108.01" fx="27123.95" fy="125108.01" r="712.2" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-35" cx="-16704.6" cy="83307.63" fx="-16704.6" fy="83307.63" r="712.21" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-36" cx="16613.42" cy="95363.12" fx="16613.42" fy="95363.12" r="712.16" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-37" cx="-16091.95" cy="86862.42" fx="-16091.95" fy="86862.42" r="712.16" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-38" cx="24863.3" cy="126961.84" fx="24863.3" fy="126961.84" r="712.18" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-39" cx="22531.74" cy="126265.73" fx="22531.74" fy="126265.73" r="712.17" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-40" cx="2787.29" cy="96925.71" fx="2787.29" fy="96925.71" r="712.21" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-41" cx="24539.28" cy="124546.97" fx="24539.28" fy="124546.97" r="712.11" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-42" cx="-4668.59" cy="102802.55" fx="-4668.59" fy="102802.55" r="712.15" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-43" cx="23597.6" cy="127637.7" fx="23597.6" fy="127637.7" r="712.32" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-44" cx="18292.76" cy="126264.54" fx="18292.76" fy="126264.54" r="712.21" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-45" cx="22096.52" cy="129086.04" fx="22096.52" fy="129086.04" r="712.18" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-46" cx="20830.84" cy="129761.81" fx="20830.84" fy="129761.81" r="712.31" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-47" cx="25069.84" cy="129763.12" fx="25069.84" fy="129763.12" r="712.2" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-48" cx="88228.68" cy="-85695.03" fx="88228.68" fy="-85695.03" r="710.46" gradientTransform="translate(1245.67 3130.74) rotate(-47.05) scale(.02) skewX(.71)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-49" cx="-15603.21" cy="85954.62" fx="-15603.21" fy="85954.62" r="712.17" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-50" cx="-14932.58" cy="82361.5" fx="-14932.58" fy="82361.5" r="712.2" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-51" cx="-12954.14" cy="84216.66" fx="-12954.14" fy="84216.66" r="712.14" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-52" cx="-18258.94" cy="82843.58" fx="-18258.94" fy="82843.58" r="712.05" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-53" cx="14047.25" cy="121414.14" fx="14047.25" fy="121414.14" r="712.18" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-54" cx="13740.76" cy="119636.92" fx="13740.76" fy="119636.92" r="712.13" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-55" cx="16161.2" cy="123520.61" fx="16161.2" fy="123520.61" r="712.25" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-56" cx="9142.02" cy="115945.61" fx="9142.02" fy="115945.61" r="712.18" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-57" cx="6650.92" cy="109511.84" fx="6650.92" fy="109511.84" r="712.18" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-58" cx="6315.58" cy="111308.38" fx="6315.58" fy="111308.38" r="712.13" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-59" cx="12486.41" cy="116101.13" fx="12486.41" fy="116101.13" r="712.14" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-60" cx="9948.29" cy="112603.71" fx="9948.29" fy="112603.71" r="712.26" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-61" cx="112727.74" cy="-13012.94" fx="112727.74" fy="-13012.94" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-62" cx="116972.77" cy="-15969.79" fx="116972.77" fy="-15969.79" r="712.46" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-63" cx="116050.82" cy="-14728.99" fx="116050.82" fy="-14728.99" r="712.51" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-64" cx="119956.85" cy="-17140.91" fx="119956.85" fy="-17140.91" r="712.43" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-65" cx="123646.64" cy="-16062.07" fx="123646.64" fy="-16062.07" r="712.49" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-66" cx="124364.87" cy="-18184.23" fx="124364.87" fy="-18184.23" r="712.49" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-67" cx="121909.67" cy="-18346.7" fx="121909.67" fy="-18346.7" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-68" cx="122290.78" cy="-13882.04" fx="122290.78" fy="-13882.04" r="712.39" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-69" cx="149448.5" cy="8532.83" fx="149448.5" fy="8532.83" r="712.45" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-70" cx="126874.53" cy="-17383.87" fx="126874.53" fy="-17383.87" r="712.4" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-71" cx="127879.18" cy="-14646.75" fx="127879.18" fy="-14646.75" r="712.48" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-72" cx="124935.8" cy="-14508.03" fx="124935.8" fy="-14508.03" r="712.53" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-73" cx="125587.18" cy="-12896.06" fx="125587.18" fy="-12896.06" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-74" cx="77560.32" cy="-4464.75" fx="77560.32" fy="-4464.75" r="712.42" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-75" cx="119835.49" cy="-14044.65" fx="119835.49" fy="-14044.65" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-76" cx="118777.93" cy="-11377.48" fx="118777.93" fy="-11377.48" r="712.45" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-77" cx="118505.93" cy="-14566.5" fx="118505.93" fy="-14566.5" r="712.57" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-78" cx="118316.42" cy="-13778.04" fx="118316.42" fy="-13778.04" r="712.35" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-79" cx="119103.05" cy="-13592.4" fx="119103.05" fy="-13592.4" r="712.44" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-80" cx="116647.89" cy="-13754.88" fx="116647.89" fy="-13754.88" r="712.54" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-81" cx="117109.71" cy="-11354.41" fx="117109.71" fy="-11354.41" r="712.51" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-82" cx="118439.18" cy="-10832.37" fx="118439.18" fy="-10832.37" r="712.49" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-83" cx="140451.86" cy="-7916.7" fx="140451.86" fy="-7916.7" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-84" cx="116921.35" cy="-4523.91" fx="116921.35" fy="-4523.91" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-85" cx="123268.77" cy="-8443.32" fx="123268.77" fy="-8443.32" r="712.49" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-86" cx="123242.28" cy="-5741.25" fx="123242.28" fy="-5741.25" r="712.52" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-87" cx="122062.12" cy="-6019.33" fx="122062.12" fy="-6019.33" r="712.52" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-88" cx="57721.27" cy="-15417.89" fx="57721.27" fy="-15417.89" r="712.51" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-89" cx="126496.77" cy="-9764.98" fx="126496.77" fy="-9764.98" r="712.38" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-90" cx="105688.9" cy="18813.31" fx="105688.9" fy="18813.31" r="712.45" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-91" cx="135066.56" cy="-14641.94" fx="135066.56" fy="-14641.94" r="712.52" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-92" cx="-109796.01" cy="-44732.76" fx="-109796.01" fy="-44732.76" r="713.35" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-93" cx="62208.21" cy="-2646.63" fx="62208.21" fy="-2646.63" r="712.33" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-94" cx="109395.82" cy="51548.03" fx="109395.82" fy="51548.03" r="712.39" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-95" cx="114424.9" cy="-35306.21" fx="114424.9" fy="-35306.21" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-96" cx="106740.84" cy="14047.43" fx="106740.84" fy="14047.43" r="712.52" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-97" cx="-71840.04" cy="-47875.57" fx="-71840.04" fy="-47875.57" r="708.55" gradientTransform="translate(1331.7 3088.17) rotate(45.64) scale(.02) skewX(-.18)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-98" cx="-111782.18" cy="-42495.3" fx="-111782.18" fy="-42495.3" r="713.36" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-99" cx="113138.37" cy="833.34" fx="113138.37" fy="833.34" r="712.56" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-100" cx="-109756.79" cy="-45769.44" fx="-109756.79" fy="-45769.44" r="713.38" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-101" cx="-112905.12" cy="-42140.59" fx="-112905.12" fy="-42140.59" r="713.28" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-102" cx="-112285.12" cy="-43873.22" fx="-112285.12" fy="-43873.22" r="713.36" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-103" cx="97725.52" cy="57445.99" fx="97725.52" fy="57445.99" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-104" cx="69713.85" cy="-4212.9" fx="69713.85" fy="-4212.9" r="712.51" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-105" cx="116405.18" cy="-7562.35" fx="116405.18" fy="-7562.35" r="712.51" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-106" cx="116175.19" cy="-5741.65" fx="116175.19" fy="-5741.65" r="712.56" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-107" cx="115727.16" cy="-6472.43" fx="115727.16" fy="-6472.43" r="712.47" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-108" cx="78907.07" cy="9835.46" fx="78907.07" fy="9835.46" r="712.57" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-109" cx="71098.58" cy="-254.64" fx="71098.58" fy="-254.64" r="712.41" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-110" cx="66736.11" cy="40200.62" fx="66736.11" fy="40200.62" r="712.44" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-111" cx="-106898.03" cy="-43818.55" fx="-106898.03" fy="-43818.55" r="713.39" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-112" cx="-108351.61" cy="-47310.94" fx="-108351.61" fy="-47310.94" r="713.39" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-113" cx="98546.35" cy="-23254.98" fx="98546.35" fy="-23254.98" r="712.6" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-114" cx="-103522.57" cy="-49275.32" fx="-103522.57" fy="-49275.32" r="713.41" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-115" cx="-103961.11" cy="-43941.39" fx="-103961.11" fy="-43941.39" r="713.37" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-116" cx="-104684.43" cy="-47883.98" fx="-104684.43" fy="-47883.98" r="713.47" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-117" cx="120272.41" cy="-2900.23" fx="120272.41" fy="-2900.23" r="712.48" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-118" cx="102474.28" cy="-27338.31" fx="102474.28" fy="-27338.31" r="712.6" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-119" cx="-101471.89" cy="-44800.87" fx="-101471.89" fy="-44800.87" r="713.35" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-120" cx="-101912.82" cy="-49930.26" fx="-101912.82" fy="-49930.26" r="713.46" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-121" cx="91127.17" cy="-1567.29" fx="91127.17" fy="-1567.29" r="712.46" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-122" cx="105718.38" cy="-292" fx="105718.38" fy="-292" r="712.55" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-123" cx="104849.06" cy="-4455.21" fx="104849.06" fy="-4455.21" r="712.55" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-124" cx="104782.06" cy="-721.03" fx="104782.06" fy="-721.03" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-125" cx="106505.05" cy="-106.44" fx="106505.05" fy="-106.44" r="712.46" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-126" cx="89078.87" cy="-54726.84" fx="89078.87" fy="-54726.84" r="709.02" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-127" cx="-108955.26" cy="-34671.44" fx="-108955.26" fy="-34671.44" r="707.93" gradientTransform="translate(1356.64 3109.64) rotate(80.39) scale(.02) skewX(3.68)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-128" cx="-106915.64" cy="-34322.5" fx="-106915.64" fy="-34322.5" r="707.75" gradientTransform="translate(1356.64 3109.64) rotate(80.39) scale(.02) skewX(3.68)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-129" cx="93152.9" cy="-53986.05" fx="93152.9" fy="-53986.05" r="708.88" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-130" cx="-107825.3" cy="-36976.53" fx="-107825.3" fy="-36976.53" r="707.78" gradientTransform="translate(1356.64 3109.64) rotate(80.39) scale(.02) skewX(3.68)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-131" cx="93294.51" cy="-52326.95" fx="93294.51" fy="-52326.95" r="708.95" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-132" cx="92522.92" cy="-53343.8" fx="92522.92" fy="-53343.8" r="708.91" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-133" cx="117547.64" cy="-1941.23" fx="117547.64" fy="-1941.23" r="708.97" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-134" cx="88920.38" cy="-58301.16" fx="88920.38" fy="-58301.16" r="709.04" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-135" cx="86599.85" cy="-61989.8" fx="86599.85" fy="-61989.8" r="708.97" gradientTransform="translate(1220.45 3162.95) rotate(-70.19) scale(.02) skewX(2.6)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-136" cx="87015.6" cy="-5046.27" fx="87015.6" fy="-5046.27" r="712.38" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-137" cx="108279.21" cy="-10937.61" fx="108279.21" fy="-10937.61" r="712.46" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-138" cx="104387.27" cy="-6855.95" fx="104387.27" fy="-6855.95" r="712.54" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-139" cx="107806.58" cy="-2924.32" fx="107806.58" fy="-2924.32" r="712.42" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-140" cx="109896.31" cy="485.19" fx="109896.31" fy="485.19" r="712.45" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-141" cx="85796.88" cy="-20065.08" fx="85796.88" fy="-20065.08" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-142" cx="109745.5" cy="-5800.22" fx="109745.5" fy="-5800.22" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-143" cx="84654.18" cy="-11360.94" fx="84654.18" fy="-11360.94" r="712.52" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-144" cx="-96613.03" cy="-53872.89" fx="-96613.03" fy="-53872.89" r="713.48" gradientTransform="translate(1338.48 3092.66) rotate(56.06) scale(.02) skewX(1)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-145" cx="62755.98" cy="-45337.64" fx="62755.98" fy="-45337.64" r="711.42" gradientTransform="translate(1222.16 3174.42) rotate(-78.4) scale(.02) skewX(3.53)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-146" cx="116363.37" cy="-12572.01" fx="116363.37" fy="-12572.01" r="712.44" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-147" cx="84936.29" cy="83601.57" fx="84936.29" fy="83601.57" r="710.25" gradientTransform="translate(1282.2 3218.42) rotate(-155.61) scale(.02) skewX(-2.69)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-148" cx="116906.01" cy="-12235.69" fx="116906.01" fy="-12235.69" r="712.41" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-149" cx="120093.57" cy="-12525.34" fx="120093.57" fy="-12525.34" r="712.46" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-150" cx="107263.12" cy="-32001.82" fx="107263.12" fy="-32001.82" r="712.5" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-151" cx="117935.34" cy="-18242.63" fx="117935.34" fy="-18242.63" r="712.44" gradientTransform="translate(1233.26 3196.23) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-152" cx="12837.98" cy="84715.21" fx="12837.98" fy="84715.21" r="712.21" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-153" cx="3089.04" cy="110766.33" fx="3089.04" fy="110766.33" r="712.16" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-154" cx="-29602.34" cy="67044.61" fx="-29602.34" fy="67044.61" r="712.09" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-155" cx="4479.04" cy="114553.35" fx="4479.04" fy="114553.35" r="712.22" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-156" cx="7605.57" cy="116119.02" fx="7605.57" fy="116119.02" r="712.04" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-157" cx="6151.11" cy="114631.08" fx="6151.11" fy="114631.08" r="712.22" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-158" cx="14762.9" cy="74760.36" fx="14762.9" fy="74760.36" r="712.16" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-159" cx="4067.77" cy="61829.14" fx="4067.77" fy="61829.14" r="712.21" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-160" cx="-5705.66" cy="72992.82" fx="-5705.66" fy="72992.82" r="712.29" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-161" cx="20708.74" cy="85686.48" fx="20708.74" fy="85686.48" r="712.08" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-162" cx="3943.69" cy="118397.53" fx="3943.69" fy="118397.53" r="712.23" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-163" cx="8975.67" cy="140026.15" fx="8975.67" fy="140026.15" r="712.28" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-164" cx="13010.34" cy="116468.43" fx="13010.34" fy="116468.43" r="712.17" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-165" cx="18374.98" cy="124603.21" fx="18374.98" fy="124603.21" r="712.25" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-166" cx="33347.44" cy="-114967.52" fx="33347.44" fy="-114967.52" r="714.84" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-167" cx="34325.93" cy="-116159.27" fx="34325.93" fy="-116159.27" r="714.8" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-168" cx="31115.76" cy="-113093.04" fx="31115.76" fy="-113093.04" r="714.9" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-169" cx="80407.12" cy="-70531.98" fx="80407.12" fy="-70531.98" r="711.94" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-170" cx="78269.22" cy="-69050.63" fx="78269.22" fy="-69050.63" r="711.81" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-171" cx="89071.88" cy="-56024.99" fx="89071.88" fy="-56024.99" r="711.95" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-172" cx="82409.32" cy="-72263.87" fx="82409.32" fy="-72263.87" r="711.89" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-173" cx="80154.38" cy="-70395.23" fx="80154.38" fy="-70395.23" r="711.97" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-174" cx="29862.47" cy="-112409.96" fx="29862.47" fy="-112409.96" r="714.89" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-175" cx="76175.04" cy="-70508.43" fx="76175.04" fy="-70508.43" r="711.82" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-176" cx="76778.95" cy="-71807.22" fx="76778.95" fy="-71807.22" r="711.97" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-177" cx="84430.2" cy="-73357.94" fx="84430.2" fy="-73357.94" r="711.99" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-178" cx="81424.31" cy="-75293.97" fx="81424.31" fy="-75293.97" r="711.89" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-179" cx="82397.99" cy="-77116.83" fx="82397.99" fy="-77116.83" r="711.94" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-180" cx="79663.09" cy="-78551.67" fx="79663.09" fy="-78551.67" r="711.91" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-181" cx="39195.8" cy="90753.99" fx="39195.8" fy="90753.99" r="706.85" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-182" cx="26975.73" cy="77706.53" fx="26975.73" fy="77706.53" r="706.66" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-183" cx="79435.59" cy="-81991.87" fx="79435.59" fy="-81991.87" r="711.92" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-184" cx="3956.07" cy="80782.9" fx="3956.07" fy="80782.9" r="706.84" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-185" cx="22705.52" cy="88326.82" fx="22705.52" fy="88326.82" r="706.79" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-186" cx="-32785.63" cy="73257.04" fx="-32785.63" fy="73257.04" r="706.74" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-187" cx="37781.79" cy="-103236.62" fx="37781.79" fy="-103236.62" r="714.87" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-188" cx="12986.26" cy="102827.47" fx="12986.26" fy="102827.47" r="706.71" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-189" cx="32334.92" cy="-103038.16" fx="32334.92" fy="-103038.16" r="714.88" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-190" cx="77968.41" cy="-75042.58" fx="77968.41" fy="-75042.58" r="711.97" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-191" cx="75467.6" cy="-77252.1" fx="75467.6" fy="-77252.1" r="712" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-192" cx="49689.45" cy="-45683.8" fx="49689.45" fy="-45683.8" r="712" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-193" cx="71931.45" cy="-75337.71" fx="71931.45" fy="-75337.71" r="711.95" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-194" cx="56179.44" cy="-69241.36" fx="56179.44" fy="-69241.36" r="711.86" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-195" cx="71623.73" cy="-77114.73" fx="71623.73" fy="-77114.73" r="711.85" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-196" cx="30561.6" cy="-107182.67" fx="30561.6" fy="-107182.67" r="714.79" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-197" cx="8585.79" cy="72895.93" fx="8585.79" fy="72895.93" r="706.75" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-198" cx="67028.68" cy="-80781.96" fx="67028.68" fy="-80781.96" r="711.89" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-199" cx="69678.74" cy="-86751.78" fx="69678.74" fy="-86751.78" r="711.86" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-200" cx="68885.42" cy="-122150.94" fx="68885.42" fy="-122150.94" r="711.95" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-201" cx="64201.99" cy="-85406.63" fx="64201.99" fy="-85406.63" r="711.81" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-202" cx="3639.09" cy="126399.05" fx="3639.09" fy="126399.05" r="706.69" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-203" cx="80845.55" cy="-77572.07" fx="80845.55" fy="-77572.07" r="711.82" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-204" cx="-28038.91" cy="91740.38" fx="-28038.91" fy="91740.38" r="706.73" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-205" cx="6576.13" cy="98088.51" fx="6576.13" fy="98088.51" r="706.82" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-206" cx="92336.3" cy="-61934.61" fx="92336.3" fy="-61934.61" r="711.94" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-207" cx="84377.62" cy="-82703.06" fx="84377.62" fy="-82703.06" r="712.05" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-208" cx="71132.39" cy="-85271.11" fx="71132.39" fy="-85271.11" r="711.88" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-209" cx="32598.69" cy="-43518.84" fx="32598.69" fy="-43518.84" r="711.86" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-210" cx="75936.25" cy="-78801.64" fx="75936.25" fy="-78801.64" r="711.94" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-211" cx="70367.57" cy="-80645.87" fx="70367.57" fy="-80645.87" r="711.82" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-212" cx="67830.06" cy="-84131.39" fx="67830.06" fy="-84131.39" r="711.97" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-213" cx="70934.83" cy="-83220.59" fx="70934.83" fy="-83220.59" r="711.88" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-214" cx="-89749.48" cy="-60090.01" fx="-89749.48" fy="-60090.01" r="710.27" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-215" cx="-83996.27" cy="-62781.84" fx="-83996.27" fy="-62781.84" r="710.32" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-216" cx="-94543.48" cy="-70327.09" fx="-94543.48" fy="-70327.09" r="710.39" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-217" cx="-96034.13" cy="-60056.13" fx="-96034.13" fy="-60056.13" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-218" cx="-79964.31" cy="-62249.26" fx="-79964.31" fy="-62249.26" r="710.28" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-219" cx="-76270.03" cy="-61175.48" fx="-76270.03" fy="-61175.48" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-220" cx="-75557.7" cy="-63283.04" fx="-75557.7" fy="-63283.04" r="710.32" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-221" cx="-103765.97" cy="-54473.91" fx="-103765.97" fy="-54473.91" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-222" cx="-77619.97" cy="-59010.68" fx="-77619.97" fy="-59010.68" r="710.35" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-223" cx="-74563.21" cy="-57879.46" fx="-74563.21" fy="-57879.46" r="710.28" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-224" cx="-73044.65" cy="-62486.65" fx="-73044.65" fy="-62486.65" r="710.24" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-225" cx="-72031.92" cy="-59767.12" fx="-72031.92" fy="-59767.12" r="710.17" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-226" cx="-74975.81" cy="-59630.97" fx="-74975.81" fy="-59630.97" r="710.16" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-227" cx="-74319.6" cy="-58029.24" fx="-74319.6" fy="-58029.24" r="710.31" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-228" cx="-78276.15" cy="-56269.22" fx="-78276.15" fy="-56269.22" r="710.33" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-229" cx="-80076.82" cy="-59173.38" fx="-80076.82" fy="-59173.38" r="710.31" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-230" cx="82830.87" cy="-35133.73" fx="82830.87" fy="-35133.73" r="706.21" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-231" cx="-97676.45" cy="-52358.05" fx="-97676.45" fy="-52358.05" r="710.25" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-232" cx="124497.01" cy="3289.32" fx="124497.01" fy="3289.32" r="706.12" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-233" cx="-80807.99" cy="-58724.67" fx="-80807.99" fy="-58724.67" r="710.28" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-234" cx="61889.11" cy="-1017.6" fx="61889.11" fy="-1017.6" r="706.17" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-235" cx="94509.33" cy="-10959.14" fx="94509.33" fy="-10959.14" r="706.12" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-236" cx="-68247.28" cy="-58522.93" fx="-68247.28" fy="-58522.93" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-237" cx="-80638.48" cy="-52480.49" fx="-80638.48" fy="-52480.49" r="710.24" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-238" cx="76723.39" cy="6180.21" fx="76723.39" fy="6180.21" r="706.06" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-239" cx="-76625.51" cy="-53606.85" fx="-76625.51" fy="-53606.85" r="710.25" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-240" cx="-76644.17" cy="-50922.73" fx="-76644.17" fy="-50922.73" r="710.28" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-241" cx="-77825.62" cy="-51200.04" fx="-77825.62" fy="-51200.04" r="710.21" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-242" cx="-77075.34" cy="-49990.05" fx="-77075.34" fy="-49990.05" r="710.19" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-243" cx="-73400.34" cy="-54918.04" fx="-73400.34" fy="-54918.04" r="710.15" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-244" cx="-80826.08" cy="-51697.34" fx="-80826.08" fy="-51697.34" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-245" cx="70204.62" cy="-3227.13" fx="70204.62" fy="-3227.13" r="706.06" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-246" cx="-84931.9" cy="-41493.15" fx="-84931.9" fy="-41493.15" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-247" cx="-86038.51" cy="-43821.15" fx="-86038.51" fy="-43821.15" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-248" cx="-86207.37" cy="-45721.93" fx="-86207.37" fy="-45721.93" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-249" cx="-68332.73" cy="-52396.66" fx="-68332.73" fy="-52396.66" r="710.19" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-250" cx="-85776.25" cy="-46654.85" fx="-85776.25" fy="-46654.85" r="710.25" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-251" cx="111668.6" cy="47366.38" fx="111668.6" fy="47366.38" r="706.2" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-252" cx="-86919.4" cy="-39271.16" fx="-86919.4" fy="-39271.16" r="710.19" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-253" cx="123952.6" cy="24254.92" fx="123952.6" fy="24254.92" r="706.15" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-254" cx="-84894.37" cy="-42518.48" fx="-84894.37" fy="-42518.48" r="710.21" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-255" cx="-88044.72" cy="-38914.69" fx="-88044.72" fy="-38914.69" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-256" cx="-87425.89" cy="-40630.87" fx="-87425.89" fy="-40630.87" r="710.25" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-257" cx="-86788.25" cy="-40688.01" fx="-86788.25" fy="-40688.01" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-258" cx="-112116.64" cy="-22303.07" fx="-112116.64" fy="-22303.07" r="712.59" gradientTransform="translate(1346.27 3098.3) rotate(64.93) scale(.02) skewX(1.83)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-259" cx="-83489.01" cy="-52736.01" fx="-83489.01" fy="-52736.01" r="710.32" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-260" cx="-83713.9" cy="-50927.35" fx="-83713.9" fy="-50927.35" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-261" cx="-67660.9" cy="-49882.46" fx="-67660.9" fy="-49882.46" r="710.22" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-262" cx="-85026.49" cy="-49787.65" fx="-85026.49" fy="-49787.65" r="710.25" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-263" cx="58918.85" cy="1816.57" fx="58918.85" fy="1816.57" r="706.08" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-264" cx="-80937.83" cy="-44278.45" fx="-80937.83" fy="-44278.45" r="710.22" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-265" cx="-83563.55" cy="-8977.89" fx="-83563.55" fy="-8977.89" r="710.15" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-266" cx="-80731.82" cy="-47746.06" fx="-80731.82" fy="-47746.06" r="710.31" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-267" cx="-78650.14" cy="-46016.73" fx="-78650.14" fy="-46016.73" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-268" cx="63799.27" cy="13753.54" fx="63799.27" fy="13753.54" r="706.02" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-269" cx="-79606.89" cy="-48102.22" fx="-79606.89" fy="-48102.22" r="710.19" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-270" cx="-77037.51" cy="-46672" fx="-77037.51" fy="-46672" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-271" cx="-90351.94" cy="-47521.77" fx="-90351.94" fy="-47521.77" r="710.22" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-272" cx="95059.9" cy="81678.78" fx="95059.9" fy="81678.78" r="701.4" gradientTransform="translate(1270.83 3224.4) rotate(-147.14) scale(.02) skewX(-1.86)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-273" cx="94208.1" cy="77555.99" fx="94208.1" fy="77555.99" r="701.39" gradientTransform="translate(1270.83 3224.4) rotate(-147.14) scale(.02) skewX(-1.86)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-274" cx="94142.08" cy="81245.22" fx="94142.08" fy="81245.22" r="701.38" gradientTransform="translate(1270.83 3224.4) rotate(-147.14) scale(.02) skewX(-1.86)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-275" cx="86836.28" cy="39563.24" fx="86836.28" fy="39563.24" r="706.2" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-276" cx="126319.95" cy="19130.38" fx="126319.95" fy="19130.38" r="710.97" gradientTransform="translate(1240.67 3211.56) rotate(-112.76) scale(.02) skewX(2.09)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-277" cx="128012.21" cy="23462.35" fx="128012.21" fy="23462.35" r="711.09" gradientTransform="translate(1240.67 3211.56) rotate(-112.76) scale(.02) skewX(2.09)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-278" cx="-99546.84" cy="17564.89" fx="-99546.84" fy="17564.89" r="711.6" gradientTransform="translate(1363.67 3117.11) rotate(88.52) scale(.02) skewX(3.26)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-279" cx="53044.69" cy="-33205.25" fx="53044.69" fy="-33205.25" r="707.02" gradientTransform="translate(1221.98 3153.24) rotate(-61.76) scale(.02) skewX(2.64)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-280" cx="129148.54" cy="21161.23" fx="129148.54" fy="21161.23" r="711.12" gradientTransform="translate(1240.67 3211.56) rotate(-112.76) scale(.02) skewX(2.09)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-281" cx="130558.38" cy="21538.53" fx="130558.38" fy="21538.53" r="711.07" gradientTransform="translate(1240.67 3211.56) rotate(-112.76) scale(.02) skewX(2.09)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-282" cx="86885" cy="-28124.76" fx="86885" fy="-28124.76" r="707.03" gradientTransform="translate(1221.98 3153.24) rotate(-61.76) scale(.02) skewX(2.64)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-283" cx="130684.72" cy="21282.89" fx="130684.72" fy="21282.89" r="711.07" gradientTransform="translate(1240.67 3211.56) rotate(-112.76) scale(.02) skewX(2.09)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-284" cx="60179.89" cy="-26463.26" fx="60179.89" fy="-26463.26" r="706.95" gradientTransform="translate(1221.98 3153.24) rotate(-61.76) scale(.02) skewX(2.64)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-285" cx="-105768.4" cy="5545.18" fx="-105768.4" fy="5545.18" r="711.59" gradientTransform="translate(1363.67 3117.11) rotate(88.52) scale(.02) skewX(3.26)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-286" cx="88190.89" cy="1798.12" fx="88190.89" fy="1798.12" r="706.19" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-287" cx="100566.63" cy="40094.49" fx="100566.63" fy="40094.49" r="706.02" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-288" cx="-128282.79" cy="-50859.42" fx="-128282.79" fy="-50859.42" r="710.29" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-289" cx="-95509.33" cy="-52041.12" fx="-95509.33" fy="-52041.12" r="710.22" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-290" cx="97108.47" cy="79099.51" fx="97108.47" fy="79099.51" r="701.37" gradientTransform="translate(1270.83 3224.4) rotate(-147.14) scale(.02) skewX(-1.86)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-291" cx="90564.87" cy="80476.7" fx="90564.87" fy="80476.7" r="701.38" gradientTransform="translate(1270.83 3224.4) rotate(-147.14) scale(.02) skewX(-1.86)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-292" cx="-87407.86" cy="-47658.09" fx="-87407.86" fy="-47658.09" r="710.3" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-293" cx="-90146.27" cy="-50989.24" fx="-90146.27" fy="-50989.24" r="710.24" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-294" cx="-73362.33" cy="-51600.42" fx="-73362.33" fy="-51600.42" r="710.21" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-295" cx="-71730.85" cy="-50596.95" fx="-71730.85" fy="-50596.95" r="710.26" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-296" cx="-89229.24" cy="-23357.53" fx="-89229.24" fy="-23357.53" r="708.85" gradientTransform="translate(1357.62 3109.35) rotate(80.1) scale(.02) skewX(3.72)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-297" cx="111373.44" cy="44697.36" fx="111373.44" fy="44697.36" r="706.09" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-298" cx="81464.52" cy="91320.32" fx="81464.52" fy="91320.32" r="704.95" gradientTransform="translate(1271.63 3216.77) rotate(-146.81) scale(.02) skewX(-1.95)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-299" cx="111285.39" cy="42027.15" fx="111285.39" fy="42027.15" r="706.13" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-300" cx="-72407.54" cy="-66886.88" fx="-72407.54" fy="-66886.88" r="710.33" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-301" cx="-40502.49" cy="-45397.65" fx="-40502.49" fy="-45397.65" r="710.2" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-302" cx="-94696.29" cy="-61433.9" fx="-94696.29" fy="-61433.9" r="710.19" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-303" cx="98484.83" cy="-11084.23" fx="98484.83" fy="-11084.23" r="706.09" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-304" cx="82307.32" cy="-19538.2" fx="82307.32" fy="-19538.2" r="706.11" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-305" cx="-80002.91" cy="-74253.12" fx="-80002.91" fy="-74253.12" r="710.24" gradientTransform="translate(1338.07 3092.05) rotate(55.21) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-306" cx="88166.09" cy="-9551.02" fx="88166.09" fy="-9551.02" r="706.23" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-307" cx="52716.47" cy="-69852.3" fx="52716.47" fy="-69852.3" r="712" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-308" cx="55232.81" cy="-85085.76" fx="55232.81" fy="-85085.76" r="711.96" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-309" cx="62371.93" cy="-82148.23" fx="62371.93" fy="-82148.23" r="711.92" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-310" cx="65494.91" cy="-80599.51" fx="65494.91" fy="-80599.51" r="711.89" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-311" cx="60714.69" cy="-59284.14" fx="60714.69" fy="-59284.14" r="711.86" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-312" cx="1642.7" cy="128905.99" fx="1642.7" fy="128905.99" r="706.78" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-313" cx="62353.75" cy="-98522.39" fx="62353.75" fy="-98522.39" r="711.88" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-314" cx="17254.97" cy="81874.4" fx="17254.97" fy="81874.4" r="706.82" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-315" cx="31582.32" cy="-104112.62" fx="31582.32" fy="-104112.62" r="714.73" gradientTransform="translate(1251.63 3112.99) rotate(-29.92) scale(.02) skewX(-1.99)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-316" cx="-4504.15" cy="122444.6" fx="-4504.15" fy="122444.6" r="706.85" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-317" cx="72706.25" cy="-92122.79" fx="72706.25" fy="-92122.79" r="711.88" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-318" cx="10822.67" cy="64854.07" fx="10822.67" fy="64854.07" r="706.73" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-319" cx="93099.24" cy="-61270.18" fx="93099.24" fy="-61270.18" r="707.49" gradientTransform="translate(1244.36 3138.94) rotate(-53.53) scale(.02) skewX(1.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-320" cx="70879.75" cy="-85134.45" fx="70879.75" fy="-85134.45" r="711.79" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-321" cx="-38602.43" cy="88590.71" fx="-38602.43" fy="88590.71" r="706.84" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-322" cx="78505.65" cy="-83108.08" fx="78505.65" fy="-83108.08" r="711.9" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-323" cx="54006.71" cy="-36253.96" fx="54006.71" fy="-36253.96" r="711.91" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-324" cx="77674.36" cy="-85249.48" fx="77674.36" fy="-85249.48" r="711.94" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-325" cx="74452.79" cy="-85772.89" fx="74452.79" fy="-85772.89" r="712.02" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-326" cx="89220.85" cy="-73734.48" fx="89220.85" fy="-73734.48" r="711.89" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-327" cx="28102.07" cy="-62659.09" fx="28102.07" fy="-62659.09" r="711.84" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-328" cx="116710.14" cy="34663.76" fx="116710.14" fy="34663.76" r="712.54" gradientTransform="translate(1256.02 3190.44) rotate(-102.14) scale(.02) skewX(3.34)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-329" cx="81731.97" cy="-73516.8" fx="81731.97" fy="-73516.8" r="711.95" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-330" cx="9473.91" cy="102470.83" fx="9473.91" fy="102470.83" r="706.79" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-331" cx="-12394.36" cy="65476.3" fx="-12394.36" fy="65476.3" r="706.71" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-332" cx="-42766.51" cy="83657.25" fx="-42766.51" fy="83657.25" r="706.75" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-333" cx="18164.6" cy="62087.72" fx="18164.6" fy="62087.72" r="706.73" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-334" cx="-10943.52" cy="66947.44" fx="-10943.52" fy="66947.44" r="706.62" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-335" cx="20352.85" cy="78527.77" fx="20352.85" fy="78527.77" r="706.74" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-336" cx="81382.48" cy="36139.66" fx="81382.48" fy="36139.66" r="706.09" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-337" cx="60551.98" cy="5556.94" fx="60551.98" fy="5556.94" r="706.06" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-338" cx="82413.04" cy="46453.67" fx="82413.04" fy="46453.67" r="706.13" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-339" cx="85789.77" cy="40076.2" fx="85789.77" fy="40076.2" r="706.18" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-340" cx="81936.39" cy="44088.02" fx="81936.39" fy="44088.02" r="706.15" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-341" cx="62459.06" cy="10855.28" fx="62459.06" fy="10855.28" r="706.07" gradientTransform="translate(1229.35 3188.41) rotate(-93.58) scale(.02) skewX(3.19)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-342" cx="-11194.21" cy="67082.22" fx="-11194.21" fy="67082.22" r="706.69" gradientTransform="translate(1317.51 3205.06) rotate(170.01) scale(.02) skewX(-3.11)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-343" cx="-39267.27" cy="-43059.25" fx="-39267.27" fy="-43059.25" r="707.89" gradientTransform="translate(1307.76 3087.92) rotate(37.42) scale(.02) skewX(-1.85)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-344" cx="-65041.92" cy="61938.04" fx="-65041.92" fy="61938.04" r="710.36" gradientTransform="translate(1339.96 3197.94) rotate(151.76) scale(.02) skewX(-2.37)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-345" cx="-13491.51" cy="-79997.9" fx="-13491.51" fy="-79997.9" r="709.31" gradientTransform="translate(1294.7 3096.43) rotate(26.29) scale(.02) skewX(-2.44)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-346" cx="-12769.2" cy="-83179.2" fx="-12769.2" fy="-83179.2" r="709.41" gradientTransform="translate(1294.7 3096.43) rotate(26.29) scale(.02) skewX(-2.44)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-347" cx="45696.23" cy="-83458.47" fx="45696.23" fy="-83458.47" r="709.64" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-348" cx="44576.28" cy="-85786.63" fx="44576.28" fy="-85786.63" r="709.71" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-349" cx="42636.09" cy="-84593.19" fx="42636.09" fy="-84593.19" r="709.67" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-350" cx="43725.27" cy="-81240.42" fx="43725.27" fy="-81240.42" r="709.66" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-351" cx="45727.18" cy="-84483.25" fx="45727.18" fy="-84483.25" r="709.7" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-352" cx="15961.53" cy="-64220.68" fx="15961.53" fy="-64220.68" r="709.66" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-353" cx="43210.83" cy="-82600" fx="43210.83" fy="-82600" r="709.57" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-354" cx="43847.17" cy="-82656.42" fx="43847.17" fy="-82656.42" r="709.64" gradientTransform="translate(1253.09 3100.8) rotate(-14.46) scale(.02) skewX(-3.24)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-355" cx="-26992.8" cy="-59670.8" fx="-26992.8" fy="-59670.8" r="708.33" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-356" cx="-24955.59" cy="-59299.69" fx="-24955.59" fy="-59299.69" r="708.33" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-357" cx="-25858.41" cy="-61968.87" fx="-25858.41" fy="-61968.87" r="708.23" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-358" cx="-24457.09" cy="-61594.36" fx="-24457.09" fy="-61594.36" r="708.25" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-359" cx="-24331.2" cy="-61849.75" fx="-24331.2" fy="-61849.75" r="708.4" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-360" cx="-31120.87" cy="-49158.7" fx="-31120.87" fy="-49158.7" r="708.29" gradientTransform="translate(1288.41 3086.08) rotate(17.68) scale(.02) skewX(-2.87)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-361" cx="58398.58" cy="9141.96" fx="58398.58" fy="9141.96" r="712.45" gradientTransform="translate(1242.88 3192.56) rotate(-104.62) scale(.02) skewX(2.98)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-362" cx="76255.4" cy="-72171.56" fx="76255.4" fy="-72171.56" r="711.83" gradientTransform="translate(1249.65 3122.54) rotate(-38.66) scale(.02) skewX(-.14)" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-363" cx="-13.59" cy="99241.67" fx="-13.59" fy="99241.67" r="712.13" xlink:href="#radial-gradient-31"/>
	<radialGradient id="radial-gradient-364" cx="-12554.22" cy="80121.29" fx="-12554.22" fy="80121.29" r="712.19" xlink:href="#radial-gradient-31"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="89250.11" cy="53148.24" fx="89250.11" fy="53148.24" r="1952.95" gradientTransform="translate(1194.68 3193.4) rotate(-123.69) scale(.02) skewX(-4.13)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#fff"/>
	  <stop offset="0" stop-color="#f5f5f5"/>
	  <stop offset=".05" stop-color="#c7c7c7"/>
	  <stop offset=".09" stop-color="#9c9c9c"/>
	  <stop offset=".14" stop-color="#777"/>
	  <stop offset=".2" stop-color="#565656"/>
	  <stop offset=".25" stop-color="#3b3b3b"/>
	  <stop offset=".32" stop-color="#252525"/>
	  <stop offset=".4" stop-color="#141414"/>
	  <stop offset=".49" stop-color="#080808"/>
	  <stop offset=".63" stop-color="#010101"/>
	  <stop offset="1" stop-color="#000"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-2" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="86899.25" cy="45565.72" fx="86899.25" fy="45565.72" r="1952.98" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-3" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="95201.02" cy="65291.9" fx="95201.02" fy="65291.9" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-4" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="99996.13" cy="29202.85" fx="99996.13" fy="29202.85" r="1953.05" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-5" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="118619.69" cy="35919.57" fx="118619.69" fy="35919.57" r="1953.02" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-6" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="112230.79" cy="45807.9" fx="112230.79" fy="45807.9" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-7" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="83434.7" cy="29661.92" fx="83434.7" fy="29661.92" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-8" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="121674.6" cy="43149.15" fx="121674.6" fy="43149.15" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-9" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="92882.54" cy="54145.31" fx="92882.54" fy="54145.31" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-10" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="82096.49" cy="62047.84" fx="82096.49" fy="62047.84" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-11" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="101066.1" cy="58564.07" fx="101066.1" fy="58564.07" r="1952.98" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-12" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="107833.78" cy="43822.21" fx="107833.78" fy="43822.21" r="1953.13" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-13" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="91102.78" cy="45665.91" fx="91102.78" fy="45665.91" r="1952.99" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-14" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="117646.5" cy="51781" fx="117646.5" fy="51781" r="1952.96" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-15" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="62337.31" cy="54117.89" fx="62337.31" fy="54117.89" r="1952.99" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-16" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="109856.44" cy="24049.22" fx="109856.44" fy="24049.22" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-17" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="76893.77" cy="49712.84" fx="76893.77" fy="49712.84" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-18" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="76558.62" cy="55690.84" fx="76558.62" fy="55690.84" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-19" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="92097.73" cy="64030.08" fx="92097.73" fy="64030.08" r="1953.04" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-20" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="63522.04" cy="71238.59" fx="63522.04" fy="71238.59" r="1953.05" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-21" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="115502.65" cy="25192.68" fx="115502.65" fy="25192.68" r="1953.06" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-22" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="70492.52" cy="32430.74" fx="70492.52" fy="32430.74" r="1953.04" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-23" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="68499.64" cy="61121.95" fx="68499.64" fy="61121.95" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-24" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="73952.39" cy="18450.21" fx="73952.39" fy="18450.21" r="1953" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-25" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="102209.92" cy="67837.88" fx="102209.92" fy="67837.88" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-26" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="127519.26" cy="51044.7" fx="127519.26" fy="51044.7" r="1953.08" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-27" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="124717.48" cy="22598.29" fx="124717.48" fy="22598.29" r="1953.03" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-28" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="93774.22" cy="23079.72" fx="93774.22" fy="23079.72" r="1953" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_2-29" data-name="Áåçûìÿííûé ãðàäèåíò 2" cx="84091.31" cy="62006.56" fx="84091.31" fy="62006.56" r="1952.95" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_2"/>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_208" data-name="Áåçûìÿííûé ãðàäèåíò 208" x1="308.77" y1="3239.72" x2="1895.31" y2="3239.72" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#3b3b3b"/>
	  <stop offset=".12" stop-color="#000"/>
	  <stop offset=".22" stop-color="#030303"/>
	  <stop offset=".31" stop-color="#0e0e0e"/>
	  <stop offset=".39" stop-color="#212121"/>
	  <stop offset=".48" stop-color="#3b3b3b"/>
	  <stop offset=".56" stop-color="#5c5c5c"/>
	  <stop offset=".57" stop-color="#616161"/>
	  <stop offset=".62" stop-color="#525252"/>
	  <stop offset=".78" stop-color="#272727"/>
	  <stop offset=".86" stop-color="#171717"/>
	  <stop offset="1" stop-color="#141414"/>
	</linearGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_229" data-name="Áåçûìÿííûé ãðàäèåíò 229" cx="1247.55" cy="3244.8" fx="1247.55" fy="3244.8" r="154.16" gradientTransform="translate(-3477.35 -3241.39) scale(3.67 1.97)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#ababab"/>
	  <stop offset=".07" stop-color="#b8b8b8"/>
	  <stop offset=".37" stop-color="#ebebeb"/>
	  <stop offset=".51" stop-color="#fff"/>
	  <stop offset=".55" stop-color="#f8f8f8"/>
	  <stop offset=".7" stop-color="#e4e4e4"/>
	  <stop offset=".85" stop-color="#d8d8d8"/>
	  <stop offset="1" stop-color="#d4d4d4"/>
	</radialGradient>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_215" data-name="Áåçûìÿííûé ãðàäèåíò 215" cx="1245.53" cy="4353.06" fx="1245.53" fy="4353.06" r="177.74" gradientTransform="translate(-3477.35 2104.12) scale(3.67 .24)" gradientUnits="userSpaceOnUse">
	  <stop offset="0" stop-color="#fff"/>
	  <stop offset=".05" stop-color="#f4f4f4"/>
	  <stop offset=".14" stop-color="#d7d7d7"/>
	  <stop offset=".25" stop-color="#a9a9a9"/>
	  <stop offset=".27" stop-color="#a1a1a1"/>
	  <stop offset=".49" stop-color="#727272"/>
	  <stop offset=".71" stop-color="#494949"/>
	  <stop offset=".89" stop-color="#2f2f2f"/>
	  <stop offset="1" stop-color="#262626"/>
	</radialGradient>
	<linearGradient id="_Áåçûìÿííûé_ãðàäèåíò_208-2" data-name="Áåçûìÿííûé ãðàäèåíò 208" x1="518.8" y1="3132.55" x2="1696.83" y2="3132.55" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_208"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_229-2" data-name="Áåçûìÿííûé ãðàäèåíò 229" cx="1249.13" cy="3200.56" fx="1249.13" fy="3200.56" r="114.47" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_229"/>
	<radialGradient id="_Áåçûìÿííûé_ãðàäèåíò_215-2" data-name="Áåçûìÿííûé ãðàäèåíò 215" cx="1247.63" cy="3995.09" fx="1247.63" fy="3995.09" r="131.97" xlink:href="#_Áåçûìÿííûé_ãðàäèåíò_215"/>
  </defs>`;
const BG_BODY = `<g class="cls-843">
	<g id="_Ñëîé_1" data-name="Ñëîé 1">
	  <g class="cls-1209">
		<g>
		  <rect class="cls-848" x="-24.99" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1244" x="69.51" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1062" width="48.71" height="50"/>
		  <rect class="cls-881" x="164.01" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1046" x="258.51" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1062" width="48.71" height="50"/>
		  <rect class="cls-690" x="353.02" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1062" width="48.71" height="50"/>
		  <rect class="cls-993" x="447.52" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1080" x="542.02" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1062" width="48.71" height="50"/>
		  <rect class="cls-527" x="636.52" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1062" width="48.71" height="50"/>
		  <rect class="cls-913" x="731.03" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1062" width="48.71" height="50"/>
		  <rect class="cls-541" x="825.53" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1062" width="48.71" height="50"/>
		  <rect class="cls-820" x="920.03" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1062" width="48.71" height="50"/>
		  <rect class="cls-924" x="1014.54" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1062" width="48.71" height="50"/>
		  <rect class="cls-714" x="1109.04" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1062" width="48.71" height="50"/>
		  <rect class="cls-650" x="1203.54" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1062" width="48.71" height="50"/>
		  <rect class="cls-739" x="1298.04" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1109" x="1392.55" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1062" width="48.71" height="50"/>
		  <rect class="cls-658" x="1487.05" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1062" width="48.71" height="50"/>
		  <rect class="cls-555" x="1581.55" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1127" x="1676.06" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1184" x="1770.56" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1062" width="48.71" height="50"/>
		  <rect class="cls-581" x="1865.06" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1062" width="48.71" height="50"/>
		  <rect class="cls-891" x="1959.56" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1062" width="48.71" height="50"/>
		  <rect class="cls-705" x="2054.07" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1062" width="48.71" height="50"/>
		  <rect class="cls-641" x="2148.57" y="1062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1211" x="22.51" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1112" width="48.71" height="50"/>
		  <rect class="cls-718" x="117.01" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1018" x="211.51" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1112" width="48.71" height="50"/>
		  <rect class="cls-655" x="306.02" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1112" width="48.71" height="50"/>
		  <rect class="cls-505" x="400.52" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1013" x="495.02" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1112" width="48.71" height="50"/>
		  <rect class="cls-914" x="589.52" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1112" width="48.71" height="50"/>
		  <rect class="cls-768" x="684.03" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1112" width="48.71" height="50"/>
		  <rect class="cls-592" x="778.53" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1089" x="873.03" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1112" width="48.71" height="50"/>
		  <rect class="cls-667" x="967.54" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1024" x="1062.04" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1112" width="48.71" height="50"/>
		  <rect class="cls-834" x="1156.54" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1112" width="48.71" height="50"/>
		  <rect class="cls-722" x="1251.04" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1076" x="1345.55" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1163" x="1440.05" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1112" width="48.71" height="50"/>
		  <rect class="cls-854" x="1534.55" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1063" x="1629.06" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1154" x="1723.56" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1112" width="48.71" height="50"/>
		  <rect class="cls-671" x="1818.06" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1112" width="48.71" height="50"/>
		  <rect class="cls-927" x="1912.56" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1112" width="48.71" height="50"/>
		  <rect class="cls-902" x="2007.07" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1112" width="48.71" height="50"/>
		  <rect class="cls-516" x="2101.57" y="1112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1112" width="48.71" height="50"/>
		  <rect class="cls-662" x="-24.99" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1065" x="69.51" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1162" width="48.71" height="50"/>
		  <rect class="cls-943" x="164.01" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1162" width="48.71" height="50"/>
		  <rect class="cls-918" x="258.51" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1162" width="48.71" height="50"/>
		  <rect class="cls-779" x="353.02" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1162" width="48.71" height="50"/>
		  <rect class="cls-736" x="447.52" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1162" width="48.71" height="50"/>
		  <rect class="cls-817" x="542.02" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1162" width="48.71" height="50"/>
		  <rect class="cls-515" x="636.52" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1162" width="48.71" height="50"/>
		  <rect class="cls-910" x="731.03" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1162" width="48.71" height="50"/>
		  <rect class="cls-762" x="825.53" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1058" x="920.03" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1155" x="1014.54" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1162" width="48.71" height="50"/>
		  <rect class="cls-830" x="1109.04" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1162" width="48.71" height="50"/>
		  <rect class="cls-496" x="1203.54" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1162" width="48.71" height="50"/>
		  <rect class="cls-814" x="1298.04" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1162" width="48.71" height="50"/>
		  <rect class="cls-959" x="1392.55" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1051" x="1487.05" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1162" width="48.71" height="50"/>
		  <rect class="cls-931" x="1581.55" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1162" width="48.71" height="50"/>
		  <rect class="cls-906" x="1676.06" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1207" x="1770.56" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1126" x="1865.06" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1213" x="1959.56" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1162" width="48.71" height="50"/>
		  <rect class="cls-540" x="2054.07" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1201" x="2148.57" y="1162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1168" x="22.51" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1009" x="117.01" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1037" x="211.51" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1212" width="48.71" height="50"/>
		  <rect class="cls-767" x="306.02" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1085" x="400.52" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1006" x="495.02" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1212" width="48.71" height="50"/>
		  <rect class="cls-827" x="589.52" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1212" width="48.71" height="50"/>
		  <rect class="cls-809" x="684.03" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1212" width="48.71" height="50"/>
		  <rect class="cls-613" x="778.53" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1212" width="48.71" height="50"/>
		  <rect class="cls-949" x="873.03" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1175" x="967.54" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1212" width="48.71" height="50"/>
		  <rect class="cls-534" x="1062.04" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1212" width="48.71" height="50"/>
		  <rect class="cls-909" x="1156.54" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1044" x="1251.04" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1212" width="48.71" height="50"/>
		  <rect class="cls-656" x="1345.55" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1212" width="48.71" height="50"/>
		  <rect class="cls-769" x="1440.05" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1212" width="48.71" height="50"/>
		  <rect class="cls-966" x="1534.55" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1062" x="1629.06" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1212" width="48.71" height="50"/>
		  <rect class="cls-523" x="1723.56" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1212" width="48.71" height="50"/>
		  <rect class="cls-873" x="1818.06" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1212" width="48.71" height="50"/>
		  <rect class="cls-614" x="1912.56" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1212" width="48.71" height="50"/>
		  <rect class="cls-666" x="2007.07" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1212" width="48.71" height="50"/>
		  <rect class="cls-845" x="2101.57" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1212" width="48.71" height="50"/>
		  <rect class="cls-1061" x="-24.99" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1064" x="69.51" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1262" width="48.71" height="50"/>
		  <rect class="cls-847" x="164.01" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1117" x="258.51" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1262" width="48.71" height="50"/>
		  <rect class="cls-629" x="353.02" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1262" width="48.71" height="50"/>
		  <rect class="cls-636" x="447.52" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1262" width="48.71" height="50"/>
		  <rect class="cls-608" x="542.02" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1262" width="48.71" height="50"/>
		  <rect class="cls-862" x="636.52" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1262" width="48.71" height="50"/>
		  <rect class="cls-916" x="731.03" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1262" width="48.71" height="50"/>
		  <rect class="cls-607" x="825.53" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1005" x="920.03" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1146" x="1014.54" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1262" width="48.71" height="50"/>
		  <rect class="cls-895" x="1109.04" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1057" x="1203.54" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1152" x="1298.04" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1262" width="48.71" height="50"/>
		  <rect class="cls-603" x="1392.55" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1262" width="48.71" height="50"/>
		  <rect class="cls-888" x="1487.05" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1262" width="48.71" height="50"/>
		  <rect class="cls-957" x="1581.55" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1262" width="48.71" height="50"/>
		  <rect class="cls-735" x="1676.06" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1262" width="48.71" height="50"/>
		  <rect class="cls-746" x="1770.56" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1148" x="1865.06" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1262" width="48.71" height="50"/>
		  <rect class="cls-969" x="1959.56" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1262" width="48.71" height="50"/>
		  <rect class="cls-938" x="2054.07" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1262" width="48.71" height="50"/>
		  <rect class="cls-683" x="2148.57" y="1262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1312" width="48.71" height="50"/>
		  <rect class="cls-701" x="22.51" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1312" width="48.71" height="50"/>
		  <rect class="cls-799" x="117.01" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1312" width="48.71" height="50"/>
		  <rect class="cls-558" x="211.51" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1023" x="306.02" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1312" width="48.71" height="50"/>
		  <rect class="cls-612" x="400.52" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1312" width="48.71" height="50"/>
		  <rect class="cls-710" x="495.02" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1312" width="48.71" height="50"/>
		  <rect class="cls-535" x="589.52" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1204" x="684.03" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1232" x="778.53" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1312" width="48.71" height="50"/>
		  <rect class="cls-876" x="873.03" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1086" x="967.54" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1312" width="48.71" height="50"/>
		  <rect class="cls-933" x="1062.04" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1312" width="48.71" height="50"/>
		  <rect class="cls-576" x="1156.54" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1167" x="1251.04" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1104" x="1345.55" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1087" x="1440.05" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1312" width="48.71" height="50"/>
		  <rect class="cls-548" x="1534.55" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1129" x="1629.06" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1082" x="1723.56" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1312" width="48.71" height="50"/>
		  <rect class="cls-882" x="1818.06" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1312" width="48.71" height="50"/>
		  <rect class="cls-573" x="1912.56" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1312" width="48.71" height="50"/>
		  <rect class="cls-669" x="2007.07" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1113" x="2101.57" y="1312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1312" width="48.71" height="50"/>
		  <rect class="cls-892" x="-24.99" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1362" width="48.71" height="50"/>
		  <rect class="cls-578" x="69.51" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1362" width="48.71" height="50"/>
		  <rect class="cls-513" x="164.01" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1362" width="48.71" height="50"/>
		  <rect class="cls-903" x="258.51" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1170" x="353.02" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1362" width="48.71" height="50"/>
		  <rect class="cls-544" x="447.52" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1227" x="542.02" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1229" x="636.52" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1212" x="731.03" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1362" width="48.71" height="50"/>
		  <rect class="cls-832" x="825.53" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1362" width="48.71" height="50"/>
		  <rect class="cls-700" x="920.03" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1362" width="48.71" height="50"/>
		  <rect class="cls-995" x="1014.54" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1362" width="48.71" height="50"/>
		  <rect class="cls-645" x="1109.04" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1144" x="1203.54" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1116" x="1298.04" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1072" x="1392.55" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1362" width="48.71" height="50"/>
		  <rect class="cls-898" x="1487.05" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1362" width="48.71" height="50"/>
		  <rect class="cls-774" x="1581.55" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1362" width="48.71" height="50"/>
		  <rect class="cls-532" x="1676.06" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1004" x="1770.56" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1362" width="48.71" height="50"/>
		  <rect class="cls-531" x="1865.06" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1" x="1959.56" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1362" width="48.71" height="50"/>
		  <rect class="cls-798" x="2054.07" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1362" width="48.71" height="50"/>
		  <rect class="cls-674" x="2148.57" y="1362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1412" width="48.71" height="50"/>
		  <rect class="cls-59" x="22.51" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1412" width="48.71" height="50"/>
		  <rect class="cls-57" x="117.01" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1412" width="48.71" height="50"/>
		  <rect class="cls-990" x="211.51" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1412" width="48.71" height="50"/>
		  <rect class="cls-849" x="306.02" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1412" width="48.71" height="50"/>
		  <rect class="cls-841" x="400.52" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1412" width="48.71" height="50"/>
		  <rect class="cls-794" x="495.02" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1412" width="48.71" height="50"/>
		  <rect class="cls-999" x="589.52" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1208" x="684.03" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1182" x="778.53" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1412" width="48.71" height="50"/>
		  <rect class="cls-601" x="873.03" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1412" width="48.71" height="50"/>
		  <rect class="cls-937" x="967.54" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1412" width="48.71" height="50"/>
		  <rect class="cls-635" x="1062.04" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1215" x="1156.54" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1412" width="48.71" height="50"/>
		  <rect class="cls-749" x="1251.04" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1159" x="1345.55" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1412" width="48.71" height="50"/>
		  <rect class="cls-679" x="1440.05" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1412" width="48.71" height="50"/>
		  <rect class="cls-763" x="1534.55" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1237" x="1629.06" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1011" x="1723.56" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1412" width="48.71" height="50"/>
		  <rect class="cls-615" x="1818.06" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1412" width="48.71" height="50"/>
		  <rect class="cls-528" x="1912.56" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1412" width="48.71" height="50"/>
		  <rect class="cls-604" x="2007.07" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1412" width="48.71" height="50"/>
		  <rect class="cls-723" x="2101.57" y="1412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1412" width="48.71" height="50"/>
		  <rect class="cls-887" x="-24.99" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1007" x="69.51" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1462" width="48.71" height="50"/>
		  <rect class="cls-977" x="164.01" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1219" x="258.51" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1462" width="48.71" height="50"/>
		  <rect class="cls-963" x="353.02" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1462" width="48.71" height="50"/>
		  <rect class="cls-826" x="447.52" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1177" x="542.02" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1197" x="636.52" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1462" width="48.71" height="50"/>
		  <rect class="cls-765" x="731.03" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1462" width="48.71" height="50"/>
		  <rect class="cls-833" x="825.53" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1125" x="920.03" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1462" width="48.71" height="50"/>
		  <rect class="cls-807" x="1014.54" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1462" width="48.71" height="50"/>
		  <rect class="cls-871" x="1109.04" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1462" width="48.71" height="50"/>
		  <rect class="cls-742" x="1203.54" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1462" width="48.71" height="50"/>
		  <rect class="cls-998" x="1298.04" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1462" width="48.71" height="50"/>
		  <rect class="cls-844" x="1392.55" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1026" x="1487.05" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1462" width="48.71" height="50"/>
		  <rect class="cls-3" x="1581.55" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1462" width="48.71" height="50"/>
		  <rect class="cls-508" x="1676.06" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1462" width="48.71" height="50"/>
		  <rect class="cls-953" x="1770.56" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1462" width="48.71" height="50"/>
		  <rect class="cls-605" x="1865.06" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1462" width="48.71" height="50"/>
		  <rect class="cls-921" x="1959.56" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1462" width="48.71" height="50"/>
		  <rect class="cls-958" x="2054.07" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1462" width="48.71" height="50"/>
		  <rect class="cls-912" x="2148.57" y="1462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1133" x="22.51" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1512" width="48.71" height="50"/>
		  <rect class="cls-929" x="117.01" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1512" width="48.71" height="50"/>
		  <rect class="cls-539" x="211.51" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1512" width="48.71" height="50"/>
		  <rect class="cls-682" x="306.02" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1512" width="48.71" height="50"/>
		  <rect class="cls-526" x="400.52" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1110" x="495.02" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1512" width="48.71" height="50"/>
		  <rect class="cls-646" x="589.52" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1226" x="684.03" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1218" x="778.53" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1041" x="873.03" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1512" width="48.71" height="50"/>
		  <rect class="cls-525" x="967.54" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1512" width="48.71" height="50"/>
		  <rect class="cls-954" x="1062.04" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1512" width="48.71" height="50"/>
		  <rect class="cls-766" x="1156.54" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1512" width="48.71" height="50"/>
		  <rect class="cls-611" x="1251.04" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1512" width="48.71" height="50"/>
		  <rect class="cls-997" x="1345.55" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1228" x="1440.05" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1512" width="48.71" height="50"/>
		  <rect class="cls-564" x="1534.55" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1512" width="48.71" height="50"/>
		  <rect class="cls-894" x="1629.06" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1512" width="48.71" height="50"/>
		  <rect class="cls-930" x="1723.56" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1512" width="48.71" height="50"/>
		  <rect class="cls-748" x="1818.06" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1512" width="48.71" height="50"/>
		  <rect class="cls-813" x="1912.56" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1512" width="48.71" height="50"/>
		  <rect class="cls-567" x="2007.07" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1221" x="2101.57" y="1512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1512" width="48.71" height="50"/>
		  <rect class="cls-866" x="-24.99" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1562" width="48.71" height="50"/>
		  <rect class="cls-755" x="69.51" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1047" x="164.01" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1562" width="48.71" height="50"/>
		  <rect class="cls-729" x="258.51" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1562" width="48.71" height="50"/>
		  <rect class="cls-785" x="353.02" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1562" width="48.71" height="50"/>
		  <rect class="cls-672" x="447.52" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1562" width="48.71" height="50"/>
		  <rect class="cls-631" x="542.02" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1039" x="636.52" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1562" width="48.71" height="50"/>
		  <rect class="cls-609" x="731.03" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1562" width="48.71" height="50"/>
		  <rect class="cls-571" x="825.53" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1562" width="48.71" height="50"/>
		  <rect class="cls-642" x="920.03" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1562" width="48.71" height="50"/>
		  <rect class="cls-654" x="1014.54" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1562" width="48.71" height="50"/>
		  <rect class="cls-851" x="1109.04" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1030" x="1203.54" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1173" x="1298.04" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1562" width="48.71" height="50"/>
		  <rect class="cls-932" x="1392.55" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1562" width="48.71" height="50"/>
		  <rect class="cls-595" x="1487.05" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1562" width="48.71" height="50"/>
		  <rect class="cls-588" x="1581.55" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1003" x="1676.06" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1562" width="48.71" height="50"/>
		  <rect class="cls-721" x="1770.56" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1562" width="48.71" height="50"/>
		  <rect class="cls-593" x="1865.06" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1108" x="1959.56" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1562" width="48.71" height="50"/>
		  <rect class="cls-688" x="2054.07" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1045" x="2148.57" y="1562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1078" x="22.51" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1612" width="48.71" height="50"/>
		  <rect class="cls-756" x="117.01" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1612" width="48.71" height="50"/>
		  <rect class="cls-896" x="211.51" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1612" width="48.71" height="50"/>
		  <rect class="cls-716" x="306.02" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1122" x="400.52" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1612" width="48.71" height="50"/>
		  <rect class="cls-870" x="495.02" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1612" width="48.71" height="50"/>
		  <rect class="cls-693" x="589.52" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1612" width="48.71" height="50"/>
		  <rect class="cls-980" x="684.03" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1612" width="48.71" height="50"/>
		  <rect class="cls-2" x="778.53" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1612" width="48.71" height="50"/>
		  <rect class="cls-934" x="873.03" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1091" x="967.54" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1612" width="48.71" height="50"/>
		  <rect class="cls-499" x="1062.04" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1612" width="48.71" height="50"/>
		  <rect class="cls-626" x="1156.54" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1612" width="48.71" height="50"/>
		  <rect class="cls-850" x="1251.04" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1612" width="48.71" height="50"/>
		  <rect class="cls-677" x="1345.55" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1612" width="48.71" height="50"/>
		  <rect class="cls-935" x="1440.05" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1074" x="1534.55" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1612" width="48.71" height="50"/>
		  <rect class="cls-973" x="1629.06" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1612" width="48.71" height="50"/>
		  <rect class="cls-979" x="1723.56" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1612" width="48.71" height="50"/>
		  <rect class="cls-846" x="1818.06" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1612" width="48.71" height="50"/>
		  <rect class="cls-594" x="1912.56" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1612" width="48.71" height="50"/>
		  <rect class="cls-661" x="2007.07" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1021" x="2101.57" y="1612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1612" width="48.71" height="50"/>
		  <rect class="cls-880" x="-24.99" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1662" width="48.71" height="50"/>
		  <rect class="cls-961" x="69.51" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1178" x="164.01" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1662" width="48.71" height="50"/>
		  <rect class="cls-659" x="258.51" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1662" width="48.71" height="50"/>
		  <rect class="cls-550" x="353.02" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1662" width="48.71" height="50"/>
		  <rect class="cls-623" x="447.52" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1143" x="542.02" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1240" x="636.52" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1068" x="731.03" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1662" width="48.71" height="50"/>
		  <rect class="cls-545" x="825.53" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1662" width="48.71" height="50"/>
		  <rect class="cls-923" x="920.03" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1662" width="48.71" height="50"/>
		  <rect class="cls-804" x="1014.54" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1662" width="48.71" height="50"/>
		  <rect class="cls-865" x="1109.04" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1662" width="48.71" height="50"/>
		  <rect class="cls-747" x="1203.54" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1174" x="1298.04" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1662" width="48.71" height="50"/>
		  <rect class="cls-731" x="1392.55" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1662" width="48.71" height="50"/>
		  <rect class="cls-554" x="1487.05" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1662" width="48.71" height="50"/>
		  <rect class="cls-561" x="1581.55" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1191" x="1676.06" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1662" width="48.71" height="50"/>
		  <rect class="cls-692" x="1770.56" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1662" width="48.71" height="50"/>
		  <rect class="cls-926" x="1865.06" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1662" width="48.71" height="50"/>
		  <rect class="cls-644" x="1959.56" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1662" width="48.71" height="50"/>
		  <rect class="cls-624" x="2054.07" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1662" width="48.71" height="50"/>
		  <rect class="cls-617" x="2148.57" y="1662" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1712" width="48.71" height="50"/>
		  <rect class="cls-732" x="22.51" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1712" width="48.71" height="50"/>
		  <rect class="cls-886" x="117.01" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1115" x="211.51" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1712" width="48.71" height="50"/>
		  <rect class="cls-533" x="306.02" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1712" width="48.71" height="50"/>
		  <rect class="cls-678" x="400.52" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1188" x="495.02" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1712" width="48.71" height="50"/>
		  <rect class="cls-795" x="589.52" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1712" width="48.71" height="50"/>
		  <rect class="cls-585" x="684.03" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1712" width="48.71" height="50"/>
		  <rect class="cls-751" x="778.53" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1712" width="48.71" height="50"/>
		  <rect class="cls-781" x="873.03" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1712" width="48.71" height="50"/>
		  <rect class="cls-542" x="967.54" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1712" width="48.71" height="50"/>
		  <rect class="cls-838" x="1062.04" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1132" x="1156.54" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1712" width="48.71" height="50"/>
		  <rect class="cls-733" x="1251.04" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1040" x="1345.55" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1001" x="1440.05" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1712" width="48.71" height="50"/>
		  <rect class="cls-553" x="1534.55" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1712" width="48.71" height="50"/>
		  <rect class="cls-520" x="1629.06" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1712" width="48.71" height="50"/>
		  <rect class="cls-879" x="1723.56" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1712" width="48.71" height="50"/>
		  <rect class="cls-760" x="1818.06" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1712" width="48.71" height="50"/>
		  <rect class="cls-859" x="1912.56" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1048" x="2007.07" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1176" x="2101.57" y="1712" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1712" width="48.71" height="50"/>
		  <rect class="cls-565" x="-24.99" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1762" width="48.71" height="50"/>
		  <rect class="cls-991" x="69.51" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1762" width="48.71" height="50"/>
		  <rect class="cls-967" x="164.01" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1150" x="258.51" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1762" width="48.71" height="50"/>
		  <rect class="cls-970" x="353.02" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1762" width="48.71" height="50"/>
		  <rect class="cls-684" x="447.52" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1762" width="48.71" height="50"/>
		  <rect class="cls-920" x="542.02" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1762" width="48.71" height="50"/>
		  <rect class="cls-577" x="636.52" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1094" x="731.03" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1762" width="48.71" height="50"/>
		  <rect class="cls-622" x="825.53" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1130" x="920.03" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1762" width="48.71" height="50"/>
		  <rect class="cls-719" x="1014.54" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1128" x="1109.04" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1762" width="48.71" height="50"/>
		  <rect class="cls-812" x="1203.54" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1762" width="48.71" height="50"/>
		  <rect class="cls-521" x="1298.04" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1762" width="48.71" height="50"/>
		  <rect class="cls-647" x="1392.55" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1098" x="1487.05" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1762" width="48.71" height="50"/>
		  <rect class="cls-976" x="1581.55" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1762" width="48.71" height="50"/>
		  <rect class="cls-633" x="1676.06" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1762" width="48.71" height="50"/>
		  <rect class="cls-522" x="1770.56" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1022" x="1865.06" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1192" x="1959.56" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1033" x="2054.07" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1762" width="48.71" height="50"/>
		  <rect class="cls-810" x="2148.57" y="1762" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1812" width="48.71" height="50"/>
		  <rect class="cls-649" x="22.51" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1812" width="48.71" height="50"/>
		  <rect class="cls-939" x="117.01" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1812" width="48.71" height="50"/>
		  <rect class="cls-758" x="211.51" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1202" x="306.02" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1812" width="48.71" height="50"/>
		  <rect class="cls-60" x="400.52" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1042" x="495.02" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1812" width="48.71" height="50"/>
		  <rect class="cls-652" x="589.52" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1812" width="48.71" height="50"/>
		  <rect class="cls-725" x="684.03" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1812" width="48.71" height="50"/>
		  <rect class="cls-514" x="778.53" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1812" width="48.71" height="50"/>
		  <rect class="cls-606" x="873.03" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1107" x="967.54" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1812" width="48.71" height="50"/>
		  <rect class="cls-752" x="1062.04" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1812" width="48.71" height="50"/>
		  <rect class="cls-651" x="1156.54" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1812" width="48.71" height="50"/>
		  <rect class="cls-919" x="1251.04" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1812" width="48.71" height="50"/>
		  <rect class="cls-922" x="1345.55" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1812" width="48.71" height="50"/>
		  <rect class="cls-685" x="1440.05" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1025" x="1534.55" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1016" x="1629.06" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1190" x="1723.56" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1812" width="48.71" height="50"/>
		  <rect class="cls-726" x="1818.06" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1140" x="1912.56" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1812" width="48.71" height="50"/>
		  <rect class="cls-897" x="2007.07" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1812" width="48.71" height="50"/>
		  <rect class="cls-572" x="2101.57" y="1812" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1812" width="48.71" height="50"/>
		  <rect class="cls-689" x="-24.99" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1220" x="69.51" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1862" width="48.71" height="50"/>
		  <rect class="cls-803" x="164.01" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1019" x="258.51" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1862" width="48.71" height="50"/>
		  <rect class="cls-694" x="353.02" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1862" width="48.71" height="50"/>
		  <rect class="cls-640" x="447.52" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1069" x="542.02" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1862" width="48.71" height="50"/>
		  <rect class="cls-638" x="636.52" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1093" x="731.03" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1862" width="48.71" height="50"/>
		  <rect class="cls-942" x="825.53" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1862" width="48.71" height="50"/>
		  <rect class="cls-936" x="920.03" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1862" width="48.71" height="50"/>
		  <rect class="cls-772" x="1014.54" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1862" width="48.71" height="50"/>
		  <rect class="cls-968" x="1109.04" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1235" x="1203.54" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1862" width="48.71" height="50"/>
		  <rect class="cls-837" x="1298.04" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1862" width="48.71" height="50"/>
		  <rect class="cls-709" x="1392.55" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1245" x="1487.05" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1862" width="48.71" height="50"/>
		  <rect class="cls-941" x="1581.55" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1862" width="48.71" height="50"/>
		  <rect class="cls-822" x="1676.06" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1862" width="48.71" height="50"/>
		  <rect class="cls-855" x="1770.56" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1862" width="48.71" height="50"/>
		  <rect class="cls-737" x="1865.06" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1862" width="48.71" height="50"/>
		  <rect class="cls-808" x="1959.56" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1862" width="48.71" height="50"/>
		  <rect class="cls-978" x="2054.07" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1862" width="48.71" height="50"/>
		  <rect class="cls-852" x="2148.57" y="1862" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1106" x="22.51" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="1912" width="48.71" height="50"/>
		  <rect class="cls-759" x="117.01" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="1912" width="48.71" height="50"/>
		  <rect class="cls-900" x="211.51" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="1912" width="48.71" height="50"/>
		  <rect class="cls-992" x="306.02" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="1912" width="48.71" height="50"/>
		  <rect class="cls-874" x="400.52" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1186" x="495.02" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1059" x="589.52" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1169" x="684.03" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="1912" width="48.71" height="50"/>
		  <rect class="cls-904" x="778.53" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="1912" width="48.71" height="50"/>
		  <rect class="cls-668" x="873.03" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="1912" width="48.71" height="50"/>
		  <rect class="cls-744" x="967.54" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="1912" width="48.71" height="50"/>
		  <rect class="cls-777" x="1062.04" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="1912" width="48.71" height="50"/>
		  <rect class="cls-757" x="1156.54" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1112" x="1251.04" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1157" x="1345.55" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="1912" width="48.71" height="50"/>
		  <rect class="cls-860" x="1440.05" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1060" x="1534.55" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="1912" width="48.71" height="50"/>
		  <rect class="cls-983" x="1629.06" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="1912" width="48.71" height="50"/>
		  <rect class="cls-591" x="1723.56" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="1912" width="48.71" height="50"/>
		  <rect class="cls-670" x="1818.06" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="1912" width="48.71" height="50"/>
		  <rect class="cls-706" x="1912.56" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1083" x="2007.07" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="1912" width="48.71" height="50"/>
		  <rect class="cls-630" x="2101.57" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="1912" width="48.71" height="50"/>
		  <rect class="cls-1035" x="-24.99" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1214" x="69.51" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="1962" width="48.71" height="50"/>
		  <rect class="cls-552" x="164.01" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="1962" width="48.71" height="50"/>
		  <rect class="cls-680" x="258.51" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="1962" width="48.71" height="50"/>
		  <rect class="cls-883" x="353.02" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="1962" width="48.71" height="50"/>
		  <rect class="cls-996" x="447.52" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="1962" width="48.71" height="50"/>
		  <rect class="cls-908" x="542.02" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1015" x="636.52" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1100" x="731.03" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1243" x="825.53" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="1962" width="48.71" height="50"/>
		  <rect class="cls-519" x="920.03" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="1962" width="48.71" height="50"/>
		  <rect class="cls-875" x="1014.54" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1151" x="1109.04" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1187" x="1203.54" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="1962" width="48.71" height="50"/>
		  <rect class="cls-928" x="1298.04" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="1962" width="48.71" height="50"/>
		  <rect class="cls-800" x="1392.55" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="1962" width="48.71" height="50"/>
		  <rect class="cls-974" x="1487.05" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="1962" width="48.71" height="50"/>
		  <rect class="cls-663" x="1581.55" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="1962" width="48.71" height="50"/>
		  <rect class="cls-960" x="1676.06" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="1962" width="48.71" height="50"/>
		  <rect class="cls-4" x="1770.56" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1056" x="1865.06" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1189" x="1959.56" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1055" x="2054.07" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="1962" width="48.71" height="50"/>
		  <rect class="cls-911" x="2148.57" y="1962" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2012" width="48.71" height="50"/>
		  <rect class="cls-806" x="22.51" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2012" width="48.71" height="50"/>
		  <rect class="cls-901" x="117.01" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2012" width="48.71" height="50"/>
		  <rect class="cls-590" x="211.51" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1032" x="306.02" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2012" width="48.71" height="50"/>
		  <rect class="cls-695" x="400.52" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2012" width="48.71" height="50"/>
		  <rect class="cls-507" x="495.02" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1114" x="589.52" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2012" width="48.71" height="50"/>
		  <rect class="cls-568" x="684.03" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2012" width="48.71" height="50"/>
		  <rect class="cls-824" x="778.53" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1172" x="873.03" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1162" x="967.54" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2012" width="48.71" height="50"/>
		  <rect class="cls-985" x="1062.04" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1118" x="1156.54" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2012" width="48.71" height="50"/>
		  <rect class="cls-569" x="1251.04" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2012" width="48.71" height="50"/>
		  <rect class="cls-783" x="1345.55" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2012" width="48.71" height="50"/>
		  <rect class="cls-583" x="1440.05" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1241" x="1534.55" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1142" x="1629.06" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1224" x="1723.56" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2012" width="48.71" height="50"/>
		  <rect class="cls-504" x="1818.06" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1196" x="1912.56" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1230" x="2007.07" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1008" x="2101.57" y="2012" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2012" width="48.71" height="50"/>
		  <rect class="cls-761" x="-24.99" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2062" width="48.71" height="50"/>
		  <rect class="cls-771" x="69.51" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2062" width="48.71" height="50"/>
		  <rect class="cls-816" x="164.01" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1070" x="258.51" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1029" x="353.02" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2062" width="48.71" height="50"/>
		  <rect class="cls-524" x="447.52" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2062" width="48.71" height="50"/>
		  <rect class="cls-857" x="542.02" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2062" width="48.71" height="50"/>
		  <rect class="cls-905" x="636.52" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2062" width="48.71" height="50"/>
		  <rect class="cls-599" x="731.03" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2062" width="48.71" height="50"/>
		  <rect class="cls-947" x="825.53" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2062" width="48.71" height="50"/>
		  <rect class="cls-740" x="920.03" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1225" x="1014.54" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1137" x="1109.04" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2062" width="48.71" height="50"/>
		  <rect class="cls-632" x="1203.54" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1066" x="1298.04" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2062" width="48.71" height="50"/>
		  <rect class="cls-664" x="1392.55" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2062" width="48.71" height="50"/>
		  <rect class="cls-962" x="1487.05" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2062" width="48.71" height="50"/>
		  <rect class="cls-653" x="1581.55" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2062" width="48.71" height="50"/>
		  <rect class="cls-510" x="1676.06" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2062" width="48.71" height="50"/>
		  <rect class="cls-536" x="1770.56" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2062" width="48.71" height="50"/>
		  <rect class="cls-546" x="1865.06" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1124" x="1959.56" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2062" width="48.71" height="50"/>
		  <rect class="cls-559" x="2054.07" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2062" width="48.71" height="50"/>
		  <rect class="cls-575" x="2148.57" y="2062" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1198" x="22.51" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2112" width="48.71" height="50"/>
		  <rect class="cls-738" x="117.01" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1014" x="211.51" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2112" width="48.71" height="50"/>
		  <rect class="cls-856" x="306.02" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1149" x="400.52" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2112" width="48.71" height="50"/>
		  <rect class="cls-745" x="495.02" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2112" width="48.71" height="50"/>
		  <rect class="cls-538" x="589.52" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1171" x="684.03" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1095" x="778.53" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1156" x="873.03" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1216" x="967.54" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2112" width="48.71" height="50"/>
		  <rect class="cls-775" x="1062.04" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2112" width="48.71" height="50"/>
		  <rect class="cls-724" x="1156.54" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2112" width="48.71" height="50"/>
		  <rect class="cls-616" x="1251.04" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2112" width="48.71" height="50"/>
		  <rect class="cls-776" x="1345.55" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1194" x="1440.05" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2112" width="48.71" height="50"/>
		  <rect class="cls-802" x="1534.55" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2112" width="48.71" height="50"/>
		  <rect class="cls-509" x="1629.06" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2112" width="48.71" height="50"/>
		  <rect class="cls-915" x="1723.56" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2112" width="48.71" height="50"/>
		  <rect class="cls-551" x="1818.06" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2112" width="48.71" height="50"/>
		  <rect class="cls-691" x="1912.56" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1238" x="2007.07" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2112" width="48.71" height="50"/>
		  <rect class="cls-529" x="2101.57" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2112" width="48.71" height="50"/>
		  <rect class="cls-1038" x="-24.99" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2162" width="48.71" height="50"/>
		  <rect class="cls-782" x="69.51" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2162" width="48.71" height="50"/>
		  <rect class="cls-556" x="164.01" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2162" width="48.71" height="50"/>
		  <rect class="cls-889" x="258.51" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2162" width="48.71" height="50"/>
		  <rect class="cls-549" x="353.02" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1203" x="447.52" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2162" width="48.71" height="50"/>
		  <rect class="cls-986" x="542.02" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1160" x="636.52" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1099" x="731.03" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1027" x="825.53" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2162" width="48.71" height="50"/>
		  <rect class="cls-842" x="920.03" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2162" width="48.71" height="50"/>
		  <rect class="cls-696" x="1014.54" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1180" x="1109.04" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2162" width="48.71" height="50"/>
		  <rect class="cls-495" x="1203.54" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2162" width="48.71" height="50"/>
		  <rect class="cls-503" x="1298.04" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1073" x="1392.55" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2162" width="48.71" height="50"/>
		  <rect class="cls-620" x="1487.05" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2162" width="48.71" height="50"/>
		  <rect class="cls-589" x="1581.55" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2162" width="48.71" height="50"/>
		  <rect class="cls-537" x="1676.06" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2162" width="48.71" height="50"/>
		  <rect class="cls-786" x="1770.56" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2162" width="48.71" height="50"/>
		  <rect class="cls-952" x="1865.06" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2162" width="48.71" height="50"/>
		  <rect class="cls-790" x="1959.56" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1147" x="2054.07" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1034" x="2148.57" y="2162" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2212" width="48.71" height="50"/>
		  <rect class="cls-643" x="22.51" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2212" width="48.71" height="50"/>
		  <rect class="cls-773" x="117.01" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2212" width="48.71" height="50"/>
		  <rect class="cls-703" x="211.51" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2212" width="48.71" height="50"/>
		  <rect class="cls-792" x="306.02" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2212" width="48.71" height="50"/>
		  <rect class="cls-730" x="400.52" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2212" width="48.71" height="50"/>
		  <rect class="cls-506" x="495.02" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2212" width="48.71" height="50"/>
		  <rect class="cls-951" x="589.52" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2212" width="48.71" height="50"/>
		  <rect class="cls-708" x="684.03" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1028" x="778.53" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2212" width="48.71" height="50"/>
		  <rect class="cls-811" x="873.03" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2212" width="48.71" height="50"/>
		  <rect class="cls-791" x="967.54" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2212" width="48.71" height="50"/>
		  <rect class="cls-579" x="1062.04" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1002" x="1156.54" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2212" width="48.71" height="50"/>
		  <rect class="cls-780" x="1251.04" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1185" x="1345.55" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1233" x="1440.05" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1081" x="1534.55" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2212" width="48.71" height="50"/>
		  <rect class="cls-863" x="1629.06" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2212" width="48.71" height="50"/>
		  <rect class="cls-720" x="1723.56" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2212" width="48.71" height="50"/>
		  <rect class="cls-741" x="1818.06" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2212" width="48.71" height="50"/>
		  <rect class="cls-828" x="1912.56" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2212" width="48.71" height="50"/>
		  <rect class="cls-988" x="2007.07" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1121" x="2101.57" y="2212" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2212" width="48.71" height="50"/>
		  <rect class="cls-823" x="-24.99" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2262" width="48.71" height="50"/>
		  <rect class="cls-600" x="69.51" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1231" x="164.01" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2262" width="48.71" height="50"/>
		  <rect class="cls-861" x="258.51" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2262" width="48.71" height="50"/>
		  <rect class="cls-989" x="353.02" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1206" x="447.52" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2262" width="48.71" height="50"/>
		  <rect class="cls-956" x="542.02" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2262" width="48.71" height="50"/>
		  <rect class="cls-702" x="636.52" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2262" width="48.71" height="50"/>
		  <rect class="cls-853" x="731.03" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1075" x="825.53" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2262" width="48.71" height="50"/>
		  <rect class="cls-498" x="920.03" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2262" width="48.71" height="50"/>
		  <rect class="cls-619" x="1014.54" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2262" width="48.71" height="50"/>
		  <rect class="cls-713" x="1109.04" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2262" width="48.71" height="50"/>
		  <rect class="cls-557" x="1203.54" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2262" width="48.71" height="50"/>
		  <rect class="cls-829" x="1298.04" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2262" width="48.71" height="50"/>
		  <rect class="cls-639" x="1392.55" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2262" width="48.71" height="50"/>
		  <rect class="cls-543" x="1487.05" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2262" width="48.71" height="50"/>
		  <rect class="cls-948" x="1581.55" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2262" width="48.71" height="50"/>
		  <rect class="cls-734" x="1676.06" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1158" x="1770.56" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1054" x="1865.06" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2262" width="48.71" height="50"/>
		  <rect class="cls-676" x="1959.56" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1217" x="2054.07" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2262" width="48.71" height="50"/>
		  <rect class="cls-750" x="2148.57" y="2262" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2312" width="48.71" height="50"/>
		  <rect class="cls-819" x="22.51" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2312" width="48.71" height="50"/>
		  <rect class="cls-972" x="117.01" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2312" width="48.71" height="50"/>
		  <rect class="cls-560" x="211.51" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1120" x="306.02" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2312" width="48.71" height="50"/>
		  <rect class="cls-621" x="400.52" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2312" width="48.71" height="50"/>
		  <rect class="cls-925" x="495.02" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2312" width="48.71" height="50"/>
		  <rect class="cls-753" x="589.52" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1199" x="684.03" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2312" width="48.71" height="50"/>
		  <rect class="cls-511" x="778.53" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1181" x="873.03" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1123" x="967.54" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2312" width="48.71" height="50"/>
		  <rect class="cls-610" x="1062.04" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2312" width="48.71" height="50"/>
		  <rect class="cls-754" x="1156.54" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2312" width="48.71" height="50"/>
		  <rect class="cls-699" x="1251.04" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2312" width="48.71" height="50"/>
		  <rect class="cls-715" x="1345.55" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1139" x="1440.05" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2312" width="48.71" height="50"/>
		  <rect class="cls-946" x="1534.55" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2312" width="48.71" height="50"/>
		  <rect class="cls-562" x="1629.06" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2312" width="48.71" height="50"/>
		  <rect class="cls-707" x="1723.56" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2312" width="48.71" height="50"/>
		  <rect class="cls-955" x="1818.06" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2312" width="48.71" height="50"/>
		  <rect class="cls-864" x="1912.56" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1183" x="2007.07" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1249" x="2101.57" y="2312" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2312" width="48.71" height="50"/>
		  <rect class="cls-697" x="-24.99" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2362" width="48.71" height="50"/>
		  <rect class="cls-770" x="69.51" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2362" width="48.71" height="50"/>
		  <rect class="cls-836" x="164.01" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2362" width="48.71" height="50"/>
		  <rect class="cls-728" x="258.51" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1077" x="353.02" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1053" x="447.52" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2362" width="48.71" height="50"/>
		  <rect class="cls-877" x="542.02" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1012" x="636.52" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2362" width="48.71" height="50"/>
		  <rect class="cls-597" x="731.03" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1141" x="825.53" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1234" x="920.03" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2362" width="48.71" height="50"/>
		  <rect class="cls-890" x="1014.54" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2362" width="48.71" height="50"/>
		  <rect class="cls-801" x="1109.04" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2362" width="48.71" height="50"/>
		  <rect class="cls-805" x="1203.54" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1101" x="1298.04" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2362" width="48.71" height="50"/>
		  <rect class="cls-940" x="1392.55" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1200" x="1487.05" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2362" width="48.71" height="50"/>
		  <rect class="cls-574" x="1581.55" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2362" width="48.71" height="50"/>
		  <rect class="cls-704" x="1676.06" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2362" width="48.71" height="50"/>
		  <rect class="cls-821" x="1770.56" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1000" x="1865.06" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2362" width="48.71" height="50"/>
		  <rect class="cls-965" x="1959.56" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2362" width="48.71" height="50"/>
		  <rect class="cls-884" x="2054.07" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2362" width="48.71" height="50"/>
		  <rect class="cls-502" x="2148.57" y="2362" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2412" width="48.71" height="50"/>
		  <rect class="cls-784" x="22.51" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1097" x="117.01" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1246" x="211.51" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2412" width="48.71" height="50"/>
		  <rect class="cls-698" x="306.02" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1092" x="400.52" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2412" width="48.71" height="50"/>
		  <rect class="cls-975" x="495.02" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1031" x="589.52" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2412" width="48.71" height="50"/>
		  <rect class="cls-660" x="684.03" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1131" x="778.53" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2412" width="48.71" height="50"/>
		  <rect class="cls-675" x="873.03" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1247" x="967.54" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2412" width="48.71" height="50"/>
		  <rect class="cls-788" x="1062.04" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1193" x="1156.54" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2412" width="48.71" height="50"/>
		  <rect class="cls-625" x="1251.04" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2412" width="48.71" height="50"/>
		  <rect class="cls-517" x="1345.55" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2412" width="48.71" height="50"/>
		  <rect class="cls-717" x="1440.05" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2412" width="48.71" height="50"/>
		  <rect class="cls-840" x="1534.55" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2412" width="48.71" height="50"/>
		  <rect class="cls-648" x="1629.06" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2412" width="48.71" height="50"/>
		  <rect class="cls-497" x="1723.56" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2412" width="48.71" height="50"/>
		  <rect class="cls-815" x="1818.06" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1084" x="1912.56" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1223" x="2007.07" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2412" width="48.71" height="50"/>
		  <rect class="cls-867" x="2101.57" y="2412" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2412" width="48.71" height="50"/>
		  <rect class="cls-831" x="-24.99" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2462" width="48.71" height="50"/>
		  <rect class="cls-885" x="69.51" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2462" width="48.71" height="50"/>
		  <rect class="cls-825" x="164.01" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2462" width="48.71" height="50"/>
		  <rect class="cls-681" x="258.51" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2462" width="48.71" height="50"/>
		  <rect class="cls-796" x="353.02" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1103" x="447.52" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2462" width="48.71" height="50"/>
		  <rect class="cls-628" x="542.02" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2462" width="48.71" height="50"/>
		  <rect class="cls-797" x="636.52" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2462" width="48.71" height="50"/>
		  <rect class="cls-665" x="731.03" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2462" width="48.71" height="50"/>
		  <rect class="cls-950" x="825.53" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2462" width="48.71" height="50"/>
		  <rect class="cls-987" x="920.03" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2462" width="48.71" height="50"/>
		  <rect class="cls-878" x="1014.54" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2462" width="48.71" height="50"/>
		  <rect class="cls-818" x="1109.04" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1105" x="1203.54" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2462" width="48.71" height="50"/>
		  <rect class="cls-673" x="1298.04" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2462" width="48.71" height="50"/>
		  <rect class="cls-981" x="1392.55" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2462" width="48.71" height="50"/>
		  <rect class="cls-586" x="1487.05" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2462" width="48.71" height="50"/>
		  <rect class="cls-580" x="1581.55" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1111" x="1676.06" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1136" x="1770.56" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2462" width="48.71" height="50"/>
		  <rect class="cls-530" x="1865.06" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1135" x="1959.56" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2462" width="48.71" height="50"/>
		  <rect class="cls-637" x="2054.07" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2462" width="48.71" height="50"/>
		  <rect class="cls-657" x="2148.57" y="2462" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2512" width="48.71" height="50"/>
		  <rect class="cls-500" x="22.51" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1088" x="117.01" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1049" x="211.51" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2512" width="48.71" height="50"/>
		  <rect class="cls-994" x="306.02" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2512" width="48.71" height="50"/>
		  <rect class="cls-712" x="400.52" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2512" width="48.71" height="50"/>
		  <rect class="cls-711" x="495.02" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1153" x="589.52" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2512" width="48.71" height="50"/>
		  <rect class="cls-982" x="684.03" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2512" width="48.71" height="50"/>
		  <rect class="cls-596" x="778.53" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1020" x="873.03" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2512" width="48.71" height="50"/>
		  <rect class="cls-907" x="967.54" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2512" width="48.71" height="50"/>
		  <rect class="cls-869" x="1062.04" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2512" width="48.71" height="50"/>
		  <rect class="cls-789" x="1156.54" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2512" width="48.71" height="50"/>
		  <rect class="cls-835" x="1251.04" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2512" width="48.71" height="50"/>
		  <rect class="cls-899" x="1345.55" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2512" width="48.71" height="50"/>
		  <rect class="cls-917" x="1440.05" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1067" x="1534.55" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1090" x="1629.06" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2512" width="48.71" height="50"/>
		  <rect class="cls-686" x="1723.56" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2512" width="48.71" height="50"/>
		  <rect class="cls-547" x="1818.06" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2512" width="48.71" height="50"/>
		  <rect class="cls-945" x="1912.56" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1161" x="2007.07" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2512" width="48.71" height="50"/>
		  <rect class="cls-602" x="2101.57" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2512" width="48.71" height="50"/>
		  <rect class="cls-1052" x="-24.99" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="23.72" y="2562" width="48.71" height="50"/>
		  <rect class="cls-984" x="69.51" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="118.22" y="2562" width="48.71" height="50"/>
		  <rect class="cls-868" x="164.01" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="212.72" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1165" x="258.51" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="307.23" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1102" x="353.02" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="401.73" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1222" x="447.52" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="496.23" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1134" x="542.02" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="590.73" y="2562" width="48.71" height="50"/>
		  <rect class="cls-563" x="636.52" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="685.24" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1010" x="731.03" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="779.74" y="2562" width="48.71" height="50"/>
		  <rect class="cls-618" x="825.53" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="874.24" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1236" x="920.03" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="968.75" y="2562" width="48.71" height="50"/>
		  <rect class="cls-893" x="1014.54" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1063.25" y="2562" width="48.71" height="50"/>
		  <rect class="cls-518" x="1109.04" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1157.75" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1248" x="1203.54" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1252.25" y="2562" width="48.71" height="50"/>
		  <rect class="cls-839" x="1298.04" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1346.76" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1071" x="1392.55" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1441.26" y="2562" width="48.71" height="50"/>
		  <rect class="cls-512" x="1487.05" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1535.76" y="2562" width="48.71" height="50"/>
		  <rect class="cls-971" x="1581.55" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1630.27" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1017" x="1676.06" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1724.77" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1205" x="1770.56" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1819.27" y="2562" width="48.71" height="50"/>
		  <rect class="cls-587" x="1865.06" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1913.77" y="2562" width="48.71" height="50"/>
		  <rect class="cls-793" x="1959.56" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2008.28" y="2562" width="48.71" height="50"/>
		  <rect class="cls-566" x="2054.07" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2102.78" y="2562" width="48.71" height="50"/>
		  <rect class="cls-627" x="2148.57" y="2562" width="48.71" height="50"/>
		  <rect class="cls-1096" x="-23.28" y="2612" width="48.71" height="50"/>
		  <rect class="cls-501" x="22.51" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="71.22" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1239" x="117.01" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="165.72" y="2612" width="48.71" height="50"/>
		  <rect class="cls-582" x="211.51" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="260.23" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1164" x="306.02" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="354.73" y="2612" width="48.71" height="50"/>
		  <rect class="cls-570" x="400.52" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="449.23" y="2612" width="48.71" height="50"/>
		  <rect class="cls-58" x="495.02" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="543.73" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1119" x="589.52" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="638.24" y="2612" width="48.71" height="50"/>
		  <rect class="cls-778" x="684.03" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="732.74" y="2612" width="48.71" height="50"/>
		  <rect class="cls-598" x="778.53" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="827.24" y="2612" width="48.71" height="50"/>
		  <rect class="cls-944" x="873.03" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="921.75" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1138" x="967.54" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1016.25" y="2612" width="48.71" height="50"/>
		  <rect class="cls-743" x="1062.04" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1110.75" y="2612" width="48.71" height="50"/>
		  <rect class="cls-787" x="1156.54" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1205.25" y="2612" width="48.71" height="50"/>
		  <rect class="cls-858" x="1251.04" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1299.76" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1166" x="1345.55" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1394.26" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1242" x="1440.05" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1488.76" y="2612" width="48.71" height="50"/>
		  <rect class="cls-964" x="1534.55" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1583.27" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1145" x="1629.06" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1677.77" y="2612" width="48.71" height="50"/>
		  <rect class="cls-872" x="1723.56" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1772.27" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1036" x="1818.06" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1866.77" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1195" x="1912.56" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="1961.28" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1079" x="2007.07" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2055.78" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1210" x="2101.57" y="2612" width="48.71" height="50"/>
		  <rect class="cls-1096" x="2150.28" y="2612" width="48.71" height="50"/>
		</g>
		<rect class="cls-764" x="-214" y="-10" width="2499" height="3848"/>
		<g>
		  <g>
			<g>
			  <path class="cls-288" d="M257.55,2200.24c401.12,666.8,713.34,1216.43,697.36,1227.62-15.97,11.2-354.09-520.27-755.21-1187.07C-201.41,1574-513.63,1024.37-497.65,1013.17c15.97-11.2,354.09,520.27,755.21,1187.07Z"/>
			  <path class="cls-420" d="M280.98,2307.54c-431.26,302.36-804.31,508.52-833.22,460.46-28.91-48.06,297.26-332.13,728.53-634.49,431.27-302.36,804.31-508.52,833.22-460.46,28.91,48.06-297.26,332.13-728.53,634.49Z"/>
			  <path class="cls-349" d="M353.89,2292.67c-132.67,295.05-296.29,501.93-365.47,462.08-69.18-39.85-17.72-311.33,114.95-606.38,132.66-295.05,296.29-501.93,365.47-462.08,69.18,39.85,17.72,311.33-114.95,606.38Z"/>
			  <path class="cls-394" d="M253.44,2234.81c-227.13,505.15-422.37,908.25-436.07,900.36-13.7-7.89,159.32-423.79,386.45-928.94,227.13-505.15,422.37-908.25,436.07-900.36,13.7,7.89-159.32,423.79-386.45,928.94Z"/>
			  <path class="cls-445" d="M233.81,2191.01c511.93,130.26,924.6,249.07,921.74,265.37-2.86,16.3-420.18-76.09-932.1-206.36-511.93-130.26-924.6-249.07-921.74-265.37,2.86-16.3,420.18,76.09,932.1,206.36Z"/>
			  <path class="cls-295" d="M496.16,1765.05c443.34,307.48,682.96,760.67,535.2,1012.21-147.75,251.55-626.92,206.2-1070.26-101.28-443.34-307.48-682.96-760.67-535.2-1012.22,147.75-251.55,626.92-206.2,1070.26,101.28Z"/>
			  <path class="cls-362" d="M682.44,2431.89c-190.75,537.38-548.56,878.38-799.19,761.65-250.63-116.74-299.17-647-108.41-1184.38,190.75-537.38,548.56-878.38,799.19-761.65,250.63,116.73,299.17,647,108.41,1184.38Z"/>
			  <path class="cls-210" d="M630.82,1938.54c298.96,496.98,361.25,1026.12,139.13,1181.85-222.12,155.73-644.55-120.91-943.51-617.89-298.96-496.98-361.25-1026.12-139.13-1181.85,222.12-155.73,644.55,120.91,943.51,617.89Z"/>
			</g>
			<g>
			  <path class="cls-97" d="M1220.5,3651.45c-14.58,8.78-248.13-302.9-521.65-696.17-273.52-393.27-483.44-719.2-468.87-727.98,14.58-8.78,248.13,302.9,521.65,696.17,273.52,393.27,483.44,719.19,468.87,727.98Z"/>
			  <path class="cls-286" d="M1220.5,3651.45c-14.58,8.78-248.13-302.9-521.65-696.17-273.52-393.27-483.44-719.2-468.87-727.98,14.58-8.78,248.13,302.9,521.65,696.17,273.52,393.27,483.44,719.19,468.87,727.98Z"/>
			  <path class="cls-85" d="M1689.49,4325.75c-147.42,88.85-592.14-306.72-993.32-883.53-401.18-576.81-606.89-1116.43-459.48-1205.27,147.42-88.85,592.14,306.72,993.32,883.53,401.18,576.81,606.89,1116.43,459.48,1205.27Z"/>
			  <path class="cls-347" d="M1689.49,4325.75c-147.42,88.85-592.14-306.72-993.32-883.53-401.18-576.81-606.89-1116.43-459.48-1205.27,147.42-88.85,592.14,306.72,993.32,883.53,401.18,576.81,606.89,1116.43,459.48,1205.27Z"/>
			  <path class="cls-206" d="M1264.78,4490.37c-61.58,24.68-348.39-468.82-640.61-1102.25-292.22-633.43-479.2-1166.94-417.62-1191.61,61.58-24.68,348.39,468.82,640.61,1102.25,292.22,633.43,479.2,1166.94,417.62,1191.61Z"/>
			  <path class="cls-213" d="M1958.61,4081.62c-50.98,40.53-476.14-344.42-949.6-859.8-473.47-515.38-815.95-966.04-764.97-1006.57,50.98-40.53,476.13,344.42,949.6,859.8,473.47,515.38,815.95,966.04,764.97,1006.57Z"/>
			</g>
			<g>
			  <path class="cls-69" d="M1682.82,3172.36c-10.26,13.58-343.07-188.72-743.36-451.86-400.29-263.14-716.48-487.46-706.22-501.04,10.26-13.58,343.07,188.73,743.36,451.86,400.29,263.14,716.48,487.46,706.22,501.04Z"/>
			  <path class="cls-141" d="M1682.82,3172.36c-10.26,13.58-343.07-188.72-743.36-451.86-400.29-263.14-716.48-487.46-706.22-501.04,10.26-13.58,343.07,188.73,743.36,451.86,400.29,263.14,716.48,487.46,706.22,501.04Z"/>
			  <path class="cls-425" d="M2369.17,3623.54c-103.73,137.35-663.77-64.18-1250.88-450.12-587.11-385.94-978.96-810.16-875.23-947.51,103.73-137.35,663.77,64.18,1250.88,450.12,587.11,385.95,978.96,810.16,875.23,947.51Z"/>
			  <path class="cls-271" d="M2369.17,3623.54c-103.73,137.35-663.77-64.18-1250.88-450.12-587.11-385.94-978.96-810.16-875.23-947.51,103.73-137.35,663.77,64.18,1250.88,450.12,587.11,385.95,978.96,810.16,875.23,947.51Z"/>
			  <path class="cls-464" d="M2036.3,3934.47c-47.96,45.83-497.91-305.38-1004.98-784.44-507.07-479.07-879.26-904.59-831.3-950.42,47.96-45.83,497.91,305.37,1004.98,784.44,507.07,479.07,879.26,904.59,831.3,950.42Z"/>
			  <path class="cls-260" d="M2528.02,3296.76c-32.23,56.6-570.14-142.36-1201.47-444.38-631.33-302.02-1116.99-592.74-1084.77-649.34,32.23-56.6,570.14,142.36,1201.47,444.38,631.33,302.02,1116.99,592.74,1084.77,649.34Z"/>
			</g>
		  </g>
		  <g>
			<g>
			  <path class="cls-200" d="M1942.44,2200.24c-401.12,666.8-713.34,1216.43-697.36,1227.62,15.97,11.2,354.09-520.27,755.21-1187.07,401.12-666.8,713.34-1216.42,697.36-1227.62-15.97-11.2-354.09,520.27-755.21,1187.07Z"/>
			  <path class="cls-183" d="M1919.01,2307.54c431.26,302.36,804.31,508.52,833.22,460.46,28.91-48.06-297.26-332.13-728.53-634.49-431.27-302.36-804.31-508.52-833.22-460.46-28.91,48.06,297.26,332.13,728.53,634.49Z"/>
			  <path class="cls-383" d="M1846.1,2292.67c132.67,295.05,296.29,501.93,365.47,462.08,69.18-39.85,17.72-311.33-114.95-606.38-132.66-295.05-296.29-501.93-365.47-462.08-69.18,39.85-17.72,311.33,114.95,606.38Z"/>
			  <path class="cls-319" d="M1946.55,2234.81c227.13,505.15,422.37,908.25,436.07,900.36,13.7-7.89-159.32-423.79-386.45-928.94-227.13-505.15-422.37-908.25-436.07-900.36-13.7,7.89,159.32,423.79,386.45,928.94Z"/>
			  <path class="cls-274" d="M1966.18,2191.01c-511.93,130.26-924.6,249.07-921.74,265.37,2.86,16.3,420.18-76.09,932.1-206.36,511.93-130.26,924.6-249.07,921.74-265.37-2.86-16.3-420.18,76.09-932.1,206.36Z"/>
			  <path class="cls-440" d="M1703.83,1765.05c-443.34,307.48-682.96,760.67-535.2,1012.21,147.75,251.55,626.92,206.2,1070.26-101.28,443.34-307.48,682.96-760.67,535.2-1012.22-147.75-251.55-626.92-206.2-1070.26,101.28Z"/>
			  <path class="cls-68" d="M1517.55,2431.89c190.75,537.38,548.56,878.38,799.19,761.65,250.63-116.74,299.17-647,108.41-1184.38-190.75-537.38-548.56-878.38-799.19-761.65-250.63,116.73-299.17,647-108.41,1184.38Z"/>
			  <path class="cls-419" d="M1569.17,1938.54c-298.96,496.98-361.25,1026.12-139.13,1181.85,222.12,155.73,644.55-120.91,943.51-617.89,298.96-496.98,361.25-1026.12,139.13-1181.85-222.12-155.73-644.55,120.91-943.51,617.89Z"/>
			</g>
			<g>
			  <path class="cls-418" d="M979.49,3651.45c14.58,8.78,248.13-302.9,521.65-696.17,273.52-393.27,483.44-719.2,468.87-727.98-14.58-8.78-248.13,302.9-521.65,696.17-273.52,393.27-483.44,719.19-468.86,727.98Z"/>
			  <path class="cls-234" d="M979.49,3651.45c14.58,8.78,248.13-302.9,521.65-696.17,273.52-393.27,483.44-719.2,468.87-727.98-14.58-8.78-248.13,302.9-521.65,696.17-273.52,393.27-483.44,719.19-468.86,727.98Z"/>
			  <path class="cls-114" d="M510.5,4325.75c147.42,88.85,592.14-306.72,993.32-883.53,401.18-576.81,606.89-1116.43,459.48-1205.27-147.42-88.85-592.14,306.72-993.32,883.53-401.18,576.81-606.89,1116.43-459.48,1205.27Z"/>
			  <path class="cls-254" d="M510.5,4325.75c147.42,88.85,592.14-306.72,993.32-883.53,401.18-576.81,606.89-1116.43,459.48-1205.27-147.42-88.85-592.14,306.72-993.32,883.53-401.18,576.81-606.89,1116.43-459.48,1205.27Z"/>
			  <path class="cls-332" d="M935.21,4490.37c61.58,24.68,348.39-468.82,640.61-1102.25,292.22-633.43,479.2-1166.94,417.62-1191.61-61.58-24.68-348.39,468.82-640.61,1102.25-292.22,633.43-479.2,1166.94-417.62,1191.61Z"/>
			  <path class="cls-162" d="M241.38,4081.62c50.98,40.53,476.14-344.42,949.6-859.8,473.47-515.38,815.95-966.04,764.97-1006.57-50.98-40.53-476.13,344.42-949.6,859.8-473.47,515.38-815.95,966.04-764.97,1006.57Z"/>
			</g>
			<g>
			  <path class="cls-175" d="M517.17,3172.36c10.26,13.58,343.07-188.72,743.36-451.86,400.29-263.14,716.48-487.46,706.22-501.04-10.26-13.58-343.07,188.73-743.36,451.86-400.29,263.14-716.48,487.46-706.22,501.04Z"/>
			  <path class="cls-144" d="M517.17,3172.36c10.26,13.58,343.07-188.72,743.36-451.86,400.29-263.14,716.48-487.46,706.22-501.04-10.26-13.58-343.07,188.73-743.36,451.86-400.29,263.14-716.48,487.46-706.22,501.04Z"/>
			  <path class="cls-281" d="M-169.18,3623.54c103.73,137.35,663.77-64.18,1250.88-450.12,587.11-385.94,978.96-810.16,875.23-947.51-103.73-137.35-663.77,64.18-1250.88,450.12-587.11,385.95-978.96,810.16-875.23,947.51Z"/>
			  <path class="cls-189" d="M-169.18,3623.54c103.73,137.35,663.77-64.18,1250.88-450.12,587.11-385.94,978.96-810.16,875.23-947.51-103.73-137.35-663.77,64.18-1250.88,450.12-587.11,385.95-978.96,810.16-875.23,947.51Z"/>
			  <path class="cls-167" d="M163.69,3934.47c47.96,45.83,497.91-305.38,1004.98-784.44,507.07-479.07,879.26-904.59,831.3-950.42-47.96-45.83-497.91,305.37-1004.98,784.44-507.07,479.07-879.26,904.59-831.3,950.42Z"/>
			  <path class="cls-71" d="M-328.03,3296.76c32.23,56.6,570.14-142.36,1201.47-444.38,631.33-302.02,1116.99-592.74,1084.77-649.34-32.23-56.6-570.14,142.36-1201.47,444.38-631.33,302.02-1116.99,592.74-1084.77,649.34Z"/>
			</g>
		  </g>
		  <path class="cls-215" d="M1065.25,3042.7c1361.75-6.28,2486.97,103.15,2513.23,244.41,26.27,141.26-1056.35,260.87-2418.1,267.15-1361.75,6.28-2486.97-103.15-2513.23-244.41-26.27-141.26,1056.35-260.87,2418.1-267.15Z"/>
		</g>
		<path class="cls-447" d="M1191.48,5128.98c-1523.49,0-2758.52-1163.38-2758.52-2598.49,0-1435.11,1235.03-2598.49,2758.52-2598.49,1523.49,0,2758.52,1163.38,2758.52,2598.49,0,1435.11-1235.03,2598.49-2758.52,2598.49Z"/>
		<g>
		  <g>
			<g>
			  <ellipse class="cls-434" cx="537.92" cy="1601.85" rx="1944.07" ry="107.43" transform="translate(-1148.61 1706.2) rotate(-74.98)"/>
			  <path class="cls-303" d="M519.02,3565.82c-58.8-7.9,8.69-871.48,150.76-1928.86,142.06-1057.38,304.89-1908.15,363.7-1900.26,58.8,7.9-8.69,871.48-150.76,1928.86-142.06,1057.38-304.89,1908.15-363.7,1900.25Z"/>
			  <ellipse class="cls-336" cx="776.24" cy="1651.27" rx="1931.76" ry="578.36" transform="translate(-963.68 2200.72) rotate(-82.35)"/>
			  <path class="cls-182" d="M727.32,3587.93c-25.36-2.05,23.93-865.77,110.08-1929.17,86.15-1063.4,176.54-1923.79,201.9-1921.73,25.36,2.05-23.93,865.77-110.08,1929.17-86.15,1063.4-176.54,1923.79-201.9,1921.73Z"/>
			  <ellipse class="cls-156" cx="15.93" cy="1375.25" rx="1931.76" ry="107.43" transform="translate(-1161.36 664.23) rotate(-58.21)"/>
			  <ellipse class="cls-346" cx="139.57" cy="1418.49" rx="1912.2" ry="214.14" transform="translate(-1177.47 873.53) rotate(-61.9)"/>
			  <ellipse class="cls-482" cx="1097.48" cy="1657.2" rx="107.43" ry="1931.76" transform="translate(-46.54 31.78) rotate(-1.62)"/>
			  <path class="cls-62" d="M-179.44,3383.86c-28.93-9.54,217.13-834.49,549.59-1842.59C702.61,533.18,995.57-276.3,1024.5-266.76c28.93,9.54-217.13,834.49-549.59,1842.59C142.45,2583.92-150.51,3393.4-179.44,3383.86Z"/>
			  <path class="cls-244" d="M1481.71,3356.06c-15.31,1.9-128.28-808.44-252.33-1809.93-124.05-1001.5-212.21-1814.91-196.9-1816.8,15.31-1.9,128.28,808.44,252.33,1809.93,124.05,1001.5,212.21,1814.91,196.9,1816.8Z"/>
			  <path class="cls-335" d="M2315.9,3164.59c-14.47,5.35-310.07-757.55-660.26-1703.99-350.18-946.44-622.34-1718.02-607.87-1723.38,14.47-5.35,310.07,757.55,660.26,1703.99,350.18,946.44,622.34,1718.02,607.87,1723.38Z"/>
			  <path class="cls-457" d="M-696.49,3174.2c-27.19-13.73,340.08-795.77,820.31-1746.73C604.06,476.51,1015.41-283.26,1042.6-269.53c27.19,13.73-340.08,795.77-820.31,1746.73-480.24,950.96-891.59,1710.74-918.78,1697.01Z"/>
			  <ellipse class="cls-340" cx="2113.59" cy="1338.4" rx="55.15" ry="1928.97" transform="translate(-387.65 1386.88) rotate(-33.45)"/>
			  <ellipse class="cls-242" cx="1527.96" cy="1525.69" rx="107.43" ry="1856.05" transform="translate(-353.96 467.03) rotate(-15.6)"/>
			  <ellipse class="cls-423" cx="1527.95" cy="1525.69" rx="328.34" ry="1856.05" transform="translate(-353.96 467.03) rotate(-15.6)"/>
			  <ellipse class="cls-193" cx="1895.73" cy="1384.46" rx="107.43" ry="1859.66" transform="translate(-423.54 1021.8) rotate(-27.25)"/>
			</g>
			<g>
			  <ellipse class="cls-434" cx="537.92" cy="1601.85" rx="1944.07" ry="107.43" transform="translate(-1148.61 1706.2) rotate(-74.98)"/>
			  <path class="cls-439" d="M519.02,3565.82c-58.8-7.9,8.69-871.48,150.76-1928.86,142.06-1057.38,304.89-1908.15,363.7-1900.26,58.8,7.9-8.69,871.48-150.76,1928.86-142.06,1057.38-304.89,1908.15-363.7,1900.25Z"/>
			  <ellipse class="cls-171" cx="776.24" cy="1651.27" rx="1931.76" ry="578.36" transform="translate(-963.68 2200.72) rotate(-82.35)"/>
			  <path class="cls-142" d="M727.32,3587.93c-25.36-2.05,23.93-865.77,110.08-1929.17,86.15-1063.4,176.54-1923.79,201.9-1921.73,25.36,2.05-23.93,865.77-110.08,1929.17-86.15,1063.4-176.54,1923.79-201.9,1921.73Z"/>
			  <ellipse class="cls-291" cx="15.93" cy="1375.25" rx="1931.76" ry="107.43" transform="translate(-1161.36 664.23) rotate(-58.21)"/>
			  <ellipse class="cls-214" cx="139.57" cy="1418.49" rx="1912.2" ry="214.14" transform="translate(-1177.47 873.53) rotate(-61.9)"/>
			  <ellipse class="cls-365" cx="1097.48" cy="1657.2" rx="107.43" ry="1931.76" transform="translate(-46.54 31.78) rotate(-1.62)"/>
			  <path class="cls-444" d="M-179.44,3383.86c-28.93-9.54,217.13-834.49,549.59-1842.59C702.61,533.18,995.57-276.3,1024.5-266.76c28.93,9.54-217.13,834.49-549.59,1842.59C142.45,2583.92-150.51,3393.4-179.44,3383.86Z"/>
			  <path class="cls-456" d="M1481.71,3356.06c-15.31,1.9-128.28-808.44-252.33-1809.93-124.05-1001.5-212.21-1814.91-196.9-1816.8,15.31-1.9,128.28,808.44,252.33,1809.93,124.05,1001.5,212.21,1814.91,196.9,1816.8Z"/>
			  <path class="cls-455" d="M2315.9,3164.59c-14.47,5.35-310.07-757.55-660.26-1703.99-350.18-946.44-622.34-1718.02-607.87-1723.38,14.47-5.35,310.07,757.55,660.26,1703.99,350.18,946.44,622.34,1718.02,607.87,1723.38Z"/>
			  <path class="cls-321" d="M-696.49,3174.2c-27.19-13.73,340.08-795.77,820.31-1746.73C604.06,476.51,1015.41-283.26,1042.6-269.53c27.19,13.73-340.08,795.77-820.31,1746.73-480.24,950.96-891.59,1710.74-918.78,1697.01Z"/>
			  <ellipse class="cls-309" cx="2113.59" cy="1338.4" rx="55.15" ry="1928.97" transform="translate(-387.65 1386.88) rotate(-33.45)"/>
			  <ellipse class="cls-313" cx="1527.96" cy="1525.69" rx="107.43" ry="1856.05" transform="translate(-353.96 467.03) rotate(-15.6)"/>
			  <ellipse class="cls-139" cx="1527.95" cy="1525.69" rx="328.34" ry="1856.05" transform="translate(-353.96 467.03) rotate(-15.6)"/>
			  <ellipse class="cls-490" cx="1895.73" cy="1384.46" rx="107.43" ry="1859.66" transform="translate(-423.54 1021.8) rotate(-27.25)"/>
			</g>
		  </g>
		  <g>
			<g>
			  <path class="cls-67" d="M1114.57,1622.45c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.44,14.93,1.39,16.95,8.58,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.92-1.39-16.95-8.57Z"/>
			  <path class="cls-155" d="M898.23,1421c-2.02-7.19,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.03,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-331" d="M1080.14,1588.65c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.44-14.93-1.4-16.95-8.57Z"/>
			  <path class="cls-356" d="M157.39,1083.63c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-194" d="M1189.96,1576.84c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-222" d="M507.56,1562.79c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.38,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-330" d="M1160.08,1515.59c-2.02-7.18,2.28-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.56,2.02,7.19-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.56Z"/>
			  <path class="cls-318" d="M189.8,1035.69c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.44,14.92,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-438" d="M236.78,1033.97c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-86" d="M756.6,1448.48c-2.02-7.17,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.44-7.34,2.45-14.93-1.39-16.95-8.58Z"/>
			  <path class="cls-125" d="M208.38,1077.87c-2.02-7.18,2.28-14.98,9.63-17.43,7.33-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.28,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-216" d="M864.72,1294.71c-2.02-7.19,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.94,8.57,2.03,7.18-2.28,14.98-9.62,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-108" d="M209.82,1015.48c-2.02-7.18,2.29-14.99,9.63-17.44,7.34-2.44,14.93,1.4,16.95,8.57,2.02,7.19-2.29,14.99-9.63,17.44-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-225" d="M315.63,1007.71c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.4,16.95,8.57,2.03,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-98" d="M230.21,979.66c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-192" d="M250.24,959.45c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.44,14.93,1.39,16.95,8.57,2.02,7.17-2.29,14.98-9.63,17.43-7.35,2.44-14.93-1.39-16.96-8.57Z"/>
			  <path class="cls-268" d="M171.39,985.71c-2.02-7.18,2.28-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-344" d="M1246.69,752.74c5.43,4.98,5.51,13.66.18,19.38-5.33,5.72-14.06,6.32-19.49,1.34-5.44-4.98-5.52-13.66-.18-19.38,5.33-5.72,14.06-6.32,19.49-1.34Z"/>
			  <path class="cls-230" d="M1155.71,1535.23c-2.02-7.19,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-84" d="M1161.92,1605.14c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.44-7.34,2.44-14.93-1.39-16.95-8.58Z"/>
			  <path class="cls-251" d="M1115.48,1583.46c-2.02-7.18,2.28-14.99,9.63-17.43,7.34-2.45,14.92,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-442" d="M1221.29,1575.69c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.28,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-315" d="M419.82,1070.15c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.03,7.18-2.28,14.98-9.62,17.43-7.35,2.45-14.93-1.4-16.95-8.57Z"/>
			  <path class="cls-134" d="M434.77,1100.78c-2.02-7.18,2.28-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-481" d="M369.55,1044.71c-2.02-7.19,2.29-14.99,9.64-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.92-1.39-16.95-8.57Z"/>
			  <path class="cls-466" d="M539.5,1139.81c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-391" d="M619.29,1242.11c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-220" d="M616.18,1207.15c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-358" d="M476.48,1157.7c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.03,7.18-2.28,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-211" d="M541.87,1205.97c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-195" d="M533.47,1153.94c7.44-2.05,14.78,2.2,16.4,9.51,1.61,7.3-3.11,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-135" d="M460.61,1090.36c7.44-2.06,14.78,2.2,16.4,9.5,1.62,7.3-3.11,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-280" d="M487.75,1101.05c7.44-2.05,14.78,2.21,16.4,9.51,1.61,7.3-3.11,14.89-10.55,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-262" d="M426.54,1040.94c7.44-2.05,14.78,2.21,16.39,9.51,1.62,7.3-3.1,14.88-10.53,16.93-7.44,2.05-14.79-2.21-16.4-9.51-1.61-7.31,3.1-14.88,10.55-16.94Z"/>
			  <path class="cls-257" d="M432.17,966.7c7.44-2.05,14.79,2.21,16.4,9.51,1.62,7.31-3.11,14.89-10.54,16.94-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-174" d="M389.19,964.37c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.79-2.21-16.4-9.51-1.62-7.3,3.11-14.88,10.54-16.93Z"/>
			  <path class="cls-478" d="M395.93,1010.89c7.44-2.06,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.55,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-363" d="M478.79,980.58c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.39-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-147" d="M793.8,358.89c7.44-2.05,14.78,2.2,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.2-16.41-9.51-1.61-7.3,3.11-14.88,10.54-16.93Z"/>
			  <path class="cls-249" d="M394.28,913.54c7.44-2.06,14.78,2.2,16.4,9.51,1.62,7.3-3.11,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-184" d="M441.99,880.61c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.11,14.89-10.55,16.94-7.44,2.05-14.78-2.2-16.39-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-94" d="M456.38,934.64c7.44-2.05,14.79,2.21,16.4,9.51,1.61,7.3-3.11,14.89-10.55,16.94-7.44,2.05-14.77-2.21-16.4-9.51-1.61-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-168" d="M484.24,914.14c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.2-16.4-9.51-1.61-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-255" d="M835.7,1763.6c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-264" d="M485.54,1027.09c7.44-2.05,14.78,2.21,16.4,9.52,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-451" d="M540.18,1032.9c7.44-2.06,14.78,2.2,16.39,9.5,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.3,3.11-14.88,10.54-16.93Z"/>
			  <path class="cls-91" d="M481,1054.54c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.31,3.11-14.89,10.54-16.94Z"/>
			  <path class="cls-235" d="M496.66,1053.97c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.11,14.89-10.54,16.93-7.44,2.06-14.78-2.2-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-96" d="M497.02,1038.37c7.44-2.05,14.78,2.2,16.39,9.51,1.62,7.31-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.11-14.89,10.54-16.93Z"/>
			  <path class="cls-233" d="M503.77,1084.88c7.44-2.05,14.78,2.21,16.4,9.51,1.61,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-187" d="M547.29,1063.81c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-428" d="M551.84,1036.36c7.44-2.05,14.78,2.2,16.4,9.51,1.62,7.3-3.11,14.89-10.55,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-491" d="M518.89,611.77c7.44-2.06,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-471" d="M677.14,1031.79c7.44-2.06,14.78,2.2,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-205" d="M577.68,934.11c7.44-2.05,14.78,2.21,16.4,9.52,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-159" d="M628.85,920.55c7.43-2.05,14.78,2.21,16.39,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.43,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.55-16.94Z"/>
			  <path class="cls-124" d="M628.31,943.95c7.44-2.05,14.78,2.21,16.41,9.51,1.62,7.3-3.11,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.63-7.3,3.1-14.88,10.53-16.94Z"/>
			  <path class="cls-154" d="M708.05,2189.56c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.11,14.89-10.54,16.94-7.44,2.06-14.78-2.21-16.4-9.51-1.61-7.3,3.11-14.89,10.55-16.94Z"/>
			  <path class="cls-306" d="M539.78,880.94c7.44-2.06,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-65" d="M1163.14,1119.36c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-185" d="M413.33,746.9c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.2-16.4-9.52-1.61-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-385" d="M917.76,885.44c-6.4,4.48-14.93,3.15-19.05-2.97-4.13-6.12-2.28-14.71,4.12-19.19,6.4-4.48,14.93-3.15,19.05,2.97,4.12,6.12,2.27,14.71-4.13,19.2Z"/>
			  <path class="cls-290" d="M931.48,2039.69c7.44-2.05,14.78,2.21,16.39,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.06-14.78-2.21-16.39-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-107" d="M1767,880.19c7.44-2.05,14.78,2.21,16.4,9.52,1.61,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.39-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-178" d="M105.34,1238.29c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.43,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-307" d="M1068.86,1124.58c7.43-2.05,14.77,2.21,16.4,9.51,1.62,7.3-3.11,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.55-16.94Z"/>
			  <path class="cls-429" d="M1077.32,1462.43c-5.62,5.44-14.34,5.56-19.48.27-5.13-5.29-4.74-13.98.89-19.42,5.62-5.44,14.34-5.56,19.47-.28,5.13,5.29,4.74,13.99-.89,19.43Z"/>
			  <path class="cls-83" d="M860.66,879.74c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.27-14.72,4.13-19.19,6.4-4.48,14.93-3.15,19.05,2.97,4.12,6.12,2.27,14.71-4.13,19.19Z"/>
			  <path class="cls-243" d="M793.53,1074.29c7.44-2.05,14.78,2.21,16.4,9.52,1.61,7.3-3.11,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.3,3.11-14.88,10.54-16.94Z"/>
			  <path class="cls-209" d="M934.96,874.34c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.27-14.72,4.12-19.19,6.4-4.49,14.93-3.16,19.05,2.97,4.12,6.12,2.27,14.71-4.13,19.2Z"/>
			  <path class="cls-278" d="M843.12,866.23c-6.4,4.48-14.93,3.15-19.05-2.97-4.13-6.12-2.28-14.72,4.12-19.19,6.4-4.48,14.93-3.15,19.05,2.97,4.13,6.11,2.28,14.71-4.12,19.19Z"/>
			  <path class="cls-196" d="M877.7,856.33c-6.4,4.48-14.93,3.15-19.05-2.98-4.13-6.12-2.28-14.71,4.12-19.19,6.4-4.47,14.93-3.15,19.05,2.98,4.12,6.12,2.28,14.71-4.13,19.19Z"/>
			  <path class="cls-95" d="M1925.15,1066.59c7.44-2.05,14.79,2.21,16.4,9.51,1.62,7.3-3.11,14.89-10.55,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-74" d="M871.85,1908.23c7.44-2.05,14.78,2.2,16.4,9.51,1.61,7.3-3.1,14.88-10.55,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.11-14.89,10.54-16.94Z"/>
			  <path class="cls-131" d="M621.78,1057.19c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-328" d="M657.1,1052c7.45-2.05,14.78,2.21,16.41,9.52,1.61,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-61" d="M645.09,1064.13c7.44-2.06,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-88" d="M1100.59,1664.18c7.44-2.04,14.78,2.21,16.4,9.51,1.61,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-404" d="M941.12,1861.9c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.39-9.51-1.62-7.31,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-453" d="M1723.17,1732.67c7.44-2.06,14.78,2.2,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.2-16.4-9.51-1.61-7.3,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-364" d="M933.38,940.98c-6.4,4.49-14.93,3.15-19.06-2.97-4.12-6.12-2.27-14.72,4.13-19.19,6.4-4.48,14.93-3.15,19.05,2.97,4.12,6.11,2.28,14.71-4.12,19.19Z"/>
			  <path class="cls-366" d="M974.69,878.84c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.28-14.71,4.12-19.2,6.4-4.48,14.93-3.15,19.05,2.97,4.13,6.13,2.28,14.72-4.12,19.2Z"/>
			  <path class="cls-293" d="M396.62,1470.97c7.44-2.05,14.78,2.21,16.4,9.51,1.61,7.3-3.11,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-406" d="M1057.22,931.97c-6.4,4.48-14.93,3.15-19.06-2.97-4.12-6.12-2.27-14.72,4.13-19.2,6.4-4.47,14.93-3.15,19.05,2.98,4.13,6.12,2.28,14.71-4.12,19.19Z"/>
			  <path class="cls-410" d="M966.2,985.41c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.28-14.72,4.13-19.2,6.4-4.48,14.93-3.15,19.05,2.98,4.12,6.12,2.28,14.71-4.13,19.19Z"/>
			  <path class="cls-339" d="M1022.48,929.57c-6.41,4.48-14.93,3.15-19.06-2.97-4.12-6.12-2.27-14.72,4.12-19.2,6.41-4.48,14.93-3.16,19.06,2.97,4.12,6.12,2.27,14.72-4.13,19.19Z"/>
			  <path class="cls-284" d="M694.43,961.02c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.11-14.88,10.54-16.94Z"/>
			  <path class="cls-219" d="M303.73,1419.14c7.44-2.05,14.78,2.21,16.41,9.51,1.61,7.3-3.11,14.88-10.55,16.94-7.44,2.04-14.78-2.21-16.4-9.51-1.62-7.31,3.11-14.89,10.54-16.94Z"/>
			  <path class="cls-179" d="M1006.27,1014.53c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.27-14.72,4.12-19.2,6.4-4.48,14.93-3.15,19.05,2.97,4.12,6.12,2.28,14.72-4.12,19.19Z"/>
			  <path class="cls-250" d="M1084.73,949.69c-6.41,4.48-14.93,3.15-19.06-2.97-4.12-6.12-2.28-14.71,4.13-19.2,6.4-4.48,14.93-3.15,19.06,2.97,4.12,6.12,2.28,14.71-4.13,19.19Z"/>
			  <path class="cls-469" d="M836.2,1496.19c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.3,3.1-14.88,10.54-16.93Z"/>
			  <path class="cls-241" d="M801.93,1218.16c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.11,14.88-10.55,16.94-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-426" d="M726.73,1255.98c7.44-2.05,14.78,2.2,16.4,9.52,1.61,7.3-3.11,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.52-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-226" d="M797.57,1237.81c7.44-2.06,14.78,2.21,16.4,9.51,1.61,7.3-3.11,14.88-10.55,16.94-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-316" d="M802.3,1202.56c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-279" d="M825.97,1186.45c7.15,2.17,10.84,9.82,8.23,17.09-2.61,7.27-10.52,11.4-17.68,9.23-7.15-2.17-10.83-9.82-8.22-17.09,2.61-7.28,10.52-11.41,17.67-9.24Z"/>
			  <path class="cls-353" d="M1676.09,907.72c-7.49,1.77-14.65-2.77-15.99-10.15-1.33-7.38,3.67-14.8,11.16-16.57,7.5-1.77,14.65,2.77,15.99,10.15,1.34,7.37-3.66,14.79-11.16,16.56Z"/>
			  <path class="cls-299" d="M1675.91,947.84c-7.49,1.77-14.65-2.78-15.98-10.15-1.34-7.37,3.66-14.79,11.16-16.56,7.49-1.78,14.65,2.77,15.98,10.15,1.33,7.37-3.66,14.79-11.16,16.56Z"/>
			  <path class="cls-163" d="M866.75,1114.83c7.16,2.17,10.84,9.82,8.23,17.09-2.61,7.27-10.52,11.41-17.67,9.23-7.15-2.17-10.84-9.82-8.23-17.08,2.61-7.27,10.52-11.4,17.67-9.23Z"/>
			  <path class="cls-160" d="M1723.96,918.7c-7.49,1.77-14.65-2.78-15.99-10.15-1.33-7.38,3.66-14.79,11.16-16.56,7.5-1.77,14.65,2.77,15.98,10.15,1.33,7.37-3.66,14.79-11.16,16.57Z"/>
			  <path class="cls-188" d="M897.89,1121.48c7.16,2.17,10.84,9.82,8.23,17.09-2.61,7.27-10.53,11.4-17.68,9.23-7.15-2.17-10.83-9.82-8.22-17.09,2.61-7.27,10.52-11.4,17.67-9.23Z"/>
			  <path class="cls-446" d="M874.22,1130.14c7.15,2.17,10.84,9.82,8.22,17.09-2.61,7.26-10.52,11.4-17.67,9.23-7.15-2.17-10.84-9.82-8.23-17.09,2.61-7.27,10.52-11.4,17.68-9.23Z"/>
			  <path class="cls-376" d="M1977.41,952.53c7.15,2.17,10.83,9.82,8.22,17.09-2.61,7.27-10.52,11.4-17.67,9.24-7.16-2.17-10.84-9.83-8.23-17.1,2.61-7.27,10.52-11.4,17.67-9.23Z"/>
			  <path class="cls-191" d="M759.86,1169.38c7.15,2.17,10.83,9.82,8.23,17.1-2.61,7.26-10.52,11.4-17.68,9.23-7.15-2.17-10.84-9.82-8.23-17.09,2.61-7.27,10.52-11.4,17.68-9.23Z"/>
			  <path class="cls-129" d="M677.18,1191.89c7.15,2.17,10.83,9.82,8.23,17.09-2.61,7.26-10.52,11.4-17.68,9.23-7.15-2.17-10.83-9.82-8.23-17.09,2.61-7.26,10.52-11.4,17.67-9.23Z"/>
			  <path class="cls-342" d="M786.89,1590.76c7.44-2.06,14.78,2.21,16.39,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-104" d="M590.49,1225.89c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.88-10.55,16.94-7.44,2.05-14.77-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.55-16.94Z"/>
			  <path class="cls-150" d="M683.21,1277.05c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.11-14.89,10.55-16.94Z"/>
			  <path class="cls-218" d="M743.83,1193.01c7.44-2.05,14.78,2.21,16.4,9.51,1.61,7.3-3.1,14.88-10.54,16.93-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-270" d="M799.91,1136.41c7.44-2.06,14.78,2.2,16.4,9.51,1.62,7.3-3.11,14.89-10.54,16.94-7.43,2.05-14.77-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-172" d="M507.91,1691.52c7.43-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.79-2.21-16.4-9.51-1.62-7.3,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-393" d="M681.72,1171.9c7.44-2.06,14.79,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.61-7.3,3.1-14.89,10.54-16.93Z"/>
			  <path class="cls-296" d="M676.99,1667.51c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.77-2.2-16.4-9.51-1.61-7.3,3.11-14.89,10.54-16.94Z"/>
			  <path class="cls-199" d="M1204.25,987.82c-6.4,4.48-14.93,3.15-19.05-2.97-4.12-6.12-2.28-14.72,4.12-19.2,6.41-4.47,14.94-3.15,19.06,2.97,4.12,6.12,2.28,14.72-4.12,19.2Z"/>
			  <path class="cls-488" d="M603.66,1846.04c7.47,1.04,12.31,7.98,10.82,15.49-1.49,7.51-8.75,12.76-16.22,11.72-7.47-1.04-12.31-7.97-10.82-15.49,1.49-7.51,8.75-12.76,16.22-11.72Z"/>
			  <path class="cls-493" d="M527.27,1084.02c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.88-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-337" d="M561.46,1070.61c3.49-6.94,11.81-10.07,18.57-7,6.76,3.07,9.42,11.18,5.93,18.12-3.49,6.93-11.8,10.07-18.57,7-6.77-3.07-9.42-11.18-5.93-18.12Z"/>
			  <path class="cls-470" d="M531.45,1072.18c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-152" d="M513.22,1014.4c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.21-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-289" d="M196.44,1354.32c7.44-2.05,14.78,2.21,16.4,9.51,1.61,7.3-3.11,14.89-10.54,16.93-7.44,2.05-14.78-2.2-16.4-9.51-1.62-7.31,3.1-14.89,10.54-16.94Z"/>
			  <path class="cls-239" d="M413.8,1084.27c7.44-2.05,14.78,2.21,16.4,9.51,1.62,7.3-3.1,14.89-10.54,16.94-7.44,2.05-14.79-2.21-16.4-9.51-1.62-7.3,3.1-14.88,10.54-16.94Z"/>
			  <path class="cls-361" d="M633.15,1734.25c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.44,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-102" d="M679.02,1197.07c-2.02-7.19,2.28-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.44-14.92-1.39-16.94-8.57Z"/>
			  <path class="cls-223" d="M1514.43,1794.49c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.28,14.98-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-474" d="M633.47,1136.39c-2.02-7.18,2.29-14.99,9.63-17.44,7.34-2.44,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-198" d="M567.17,1127.11c-2.02-7.18,2.28-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.17-2.29,14.99-9.63,17.42-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-232" d="M601.96,1145.32c-2.02-7.18,2.29-14.98,9.63-17.43,7.35-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-165" d="M649.11,1928.35c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.38,16.95,8.56,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-128" d="M915.28,2098.68c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-431" d="M1039.02,1833.8c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.44,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-122" d="M481.7,1765.27c-2.02-7.18,2.28-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.33,2.45-14.92-1.39-16.94-8.56Z"/>
			  <path class="cls-374" d="M623.43,1062.71c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.44-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-204" d="M417.37,698.11c-2.02-7.18,2.29-14.99,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.44-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-397" d="M464.83,1154.23c-2.02-7.18,2.29-14.99,9.62-17.43,7.35-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-149" d="M322.74,1038.63c-2.02-7.18,2.29-14.98,9.63-17.44,7.34-2.44,14.93,1.4,16.95,8.57,2.02,7.18-2.29,14.98-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-341" d="M837.22,878.85c3.51,6.51.86,14.94-5.89,18.83-6.77,3.89-15.08,1.75-18.58-4.76-3.5-6.52-.86-14.95,5.89-18.83,6.76-3.88,15.08-1.76,18.58,4.76Z"/>
			  <path class="cls-121" d="M843.68,849.5c3.5,6.52.87,14.95-5.89,18.83-6.76,3.89-15.08,1.76-18.58-4.76-3.51-6.51-.87-14.95,5.89-18.83,6.76-3.89,15.08-1.76,18.58,4.76Z"/>
			  <path class="cls-186" d="M815.15,931.87c3.5,6.51.86,14.94-5.9,18.83-6.76,3.89-15.08,1.76-18.59-4.75-3.5-6.52-.87-14.95,5.89-18.84,6.76-3.88,15.08-1.75,18.59,4.76Z"/>
			  <path class="cls-368" d="M1681.75,1079.77c4.58,5.77,3.37,14.45-2.71,19.37-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.07-4.92,14.72-4.22,19.31,1.55Z"/>
			  <path class="cls-302" d="M1665.94,1128.05c4.58,5.77,3.37,14.44-2.71,19.36-6.07,4.92-14.73,4.23-19.3-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-387" d="M1985.78,1185.57c4.58,5.78,3.37,14.44-2.71,19.37-6.08,4.92-14.72,4.22-19.31-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.54Z"/>
			  <path class="cls-99" d="M1692.52,1029.48c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-417" d="M1679.43,1084.91c4.59,5.77,3.37,14.45-2.7,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.36-14.44,2.71-19.37,6.08-4.92,14.72-4.22,19.3,1.55Z"/>
			  <path class="cls-461" d="M799.54,955.55c3.5,6.51.86,14.95-5.9,18.83-6.75,3.88-15.08,1.76-18.58-4.76-3.5-6.51-.86-14.94,5.89-18.83,6.76-3.89,15.08-1.75,18.59,4.76Z"/>
			  <path class="cls-310" d="M1616.42,1132.59c4.58,5.78,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.35,6.08-4.92,14.72-4.23,19.31,1.54Z"/>
			  <path class="cls-415" d="M1610.59,1106.01c4.58,5.77,3.36,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.54-4.59-5.78-3.37-14.45,2.71-19.37,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-63" d="M1711.05,988.34c4.58,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.59-5.77-3.37-14.44,2.71-19.37,6.08-4.92,14.73-4.22,19.31,1.55Z"/>
			  <path class="cls-390" d="M1641.8,997.16c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.59-5.77-3.37-14.44,2.7-19.36,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-381" d="M1635.57,958.29c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.59-5.77-3.36-14.44,2.71-19.37,6.08-4.92,14.72-4.22,19.31,1.55Z"/>
			  <path class="cls-324" d="M1576.39,971.1c4.59,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.59-5.78-3.37-14.45,2.71-19.36,6.08-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-177" d="M338.61,1598.3c-.91-7.46,4.48-14.61,12.04-15.97,7.56-1.36,14.42,3.59,15.34,11.06.91,7.46-4.48,14.61-12.03,15.98-7.56,1.35-14.43-3.6-15.34-11.06Z"/>
			  <path class="cls-443" d="M604.47,1807.26c-.91-7.46,4.47-14.61,12.03-15.97,7.55-1.36,14.42,3.59,15.33,11.06.91,7.46-4.47,14.61-12.04,15.97-7.55,1.36-14.42-3.59-15.33-11.06Z"/>
			  <path class="cls-285" d="M1532.61,923.35c4.59,5.77,3.37,14.44-2.7,19.36-6.08,4.92-14.73,4.23-19.31-1.55-4.58-5.77-3.37-14.44,2.71-19.37,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-272" d="M1041.67,1669.94c-.91-7.47,4.48-14.62,12.04-15.97,7.56-1.36,14.43,3.6,15.34,11.06.91,7.47-4.48,14.61-12.04,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-261" d="M662.46,1588.83c-.91-7.46,4.48-14.61,12.03-15.97,7.56-1.36,14.43,3.6,15.34,11.05.91,7.47-4.48,14.62-12.03,15.98-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-275" d="M1768.1,1689.51c-.91-7.46,4.48-14.61,12.04-15.97,7.56-1.36,14.42,3.59,15.34,11.05.91,7.46-4.48,14.62-12.04,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-77" d="M1015.55,1028.51c3.5,6.52.87,14.94-5.89,18.84-6.76,3.89-15.08,1.75-18.58-4.76-3.51-6.51-.87-14.94,5.89-18.83,6.76-3.88,15.08-1.75,18.58,4.76Z"/>
			  <path class="cls-258" d="M816.69,1277.39c-.92-7.47,4.47-14.62,12.03-15.98,7.56-1.36,14.43,3.59,15.34,11.06.91,7.47-4.47,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.34-11.05Z"/>
			  <path class="cls-403" d="M923.59,1085.7c3.5,6.52.86,14.95-5.89,18.83-6.76,3.89-15.08,1.76-18.59-4.76-3.5-6.51-.86-14.94,5.89-18.83,6.76-3.89,15.08-1.75,18.59,4.76Z"/>
			  <path class="cls-396" d="M1591.17,1043.7c4.58,5.78,3.37,14.45-2.71,19.37-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.54Z"/>
			  <path class="cls-485" d="M1526.56,1042.23c4.59,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.45,2.71-19.37,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-269" d="M1496.35,1825.93c4.58,5.78,3.37,14.44-2.71,19.37-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.45,2.71-19.37,6.08-4.93,14.72-4.22,19.31,1.55Z"/>
			  <path class="cls-212" d="M1494.15,1114.22c4.58,5.78,3.37,14.45-2.71,19.37-6.08,4.92-14.72,4.22-19.31-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-197" d="M1321.32,1399.16c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.73,4.23-19.31-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-92" d="M1468.58,1091.91c4.59,5.78,3.37,14.45-2.71,19.37-6.07,4.92-14.72,4.23-19.3-1.55-4.58-5.78-3.37-14.44,2.71-19.36,6.07-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-422" d="M857.03,1034.87c3.5,6.52.86,14.94-5.89,18.83-6.76,3.89-15.08,1.76-18.58-4.76-3.5-6.51-.87-14.95,5.89-18.83,6.75-3.89,15.08-1.76,18.58,4.76Z"/>
			  <path class="cls-103" d="M970.46,1837.11c-.91-7.46,4.47-14.62,12.03-15.97,7.56-1.36,14.43,3.59,15.34,11.06.91,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.43-3.6-15.34-11.05Z"/>
			  <path class="cls-208" d="M1354.46,1094.98c4.59,5.78,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.77-3.37-14.45,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-373" d="M1325.69,974.37c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.73,4.23-19.31-1.54-4.59-5.77-3.37-14.45,2.7-19.36,6.08-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-494" d="M899.22,463.84c4.58,5.78,3.36,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.37,6.08-4.91,14.72-4.22,19.31,1.55Z"/>
			  <path class="cls-435" d="M1256.54,1062.05c4.59,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.54-4.58-5.78-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-151" d="M942.87,793.03c-.91-7.46,4.48-14.61,12.04-15.97,7.56-1.36,14.43,3.59,15.34,11.06.91,7.46-4.47,14.61-12.03,15.96-7.56,1.36-14.42-3.59-15.34-11.05Z"/>
			  <path class="cls-369" d="M1606.17,970.84c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-427" d="M1633.97,1350.77c-.91-7.46,4.48-14.62,12.03-15.97,7.56-1.36,14.43,3.59,15.34,11.06.91,7.46-4.47,14.61-12.04,15.97-7.55,1.36-14.42-3.59-15.33-11.05Z"/>
			  <path class="cls-354" d="M951.3,1346.57c-.91-7.46,4.47-14.61,12.04-15.97,7.56-1.36,14.42,3.59,15.34,11.06.91,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.35-11.06Z"/>
			  <path class="cls-113" d="M1967.24,1058.22c4.58,5.78,3.37,14.45-2.71,19.36-6.08,4.92-14.73,4.23-19.31-1.54-4.59-5.78-3.37-14.45,2.71-19.37,6.08-4.92,14.72-4.23,19.3,1.54Z"/>
			  <path class="cls-252" d="M1600.89,851.61c4.58,5.78,3.37,14.45-2.71,19.37-6.08,4.92-14.73,4.22-19.31-1.55-4.58-5.78-3.37-14.45,2.71-19.36,6.08-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-489" d="M1365.54,978.11c4.58,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.93,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-375" d="M1256.77,2069.68c4.59,5.77,3.37,14.44-2.71,19.37-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-136" d="M1515.7,1013.64c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.78-3.38-14.44,2.71-19.37,6.08-4.91,14.73-4.22,19.31,1.55Z"/>
			  <path class="cls-400" d="M1407.8,1055.58c4.59,5.77,3.37,14.44-2.7,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-202" d="M1327.69,1035.81c4.59,5.77,3.37,14.44-2.7,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.36-14.44,2.71-19.36,6.09-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-283" d="M1386.47,1010.7c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-180" d="M1358.89,1017.78c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.77-19.25,6.32-4.59,14.88-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-203" d="M1464.06,1074.89c-6.32,4.59-14.89,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.26Z"/>
			  <path class="cls-111" d="M1473.44,824.18c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.04-2.55-14.65,3.76-19.26,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-292" d="M1291.1,921.39c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.04-2.56-14.66,3.76-19.25,6.33-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-181" d="M1498.57,1143.21c-6.32,4.6-14.88,3.43-19.13-2.61-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-300" d="M1520.71,1212.66c-6.32,4.59-14.88,3.43-19.12-2.6-4.24-6.04-2.57-14.66,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.6,4.25,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-382" d="M1562.48,1198.97c-6.33,4.6-14.89,3.43-19.13-2.6-4.25-6.04-2.56-14.66,3.76-19.26,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-480" d="M1117.94,867.63c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.66,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-452" d="M1471.19,1217.2c-6.33,4.6-14.89,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-388" d="M1485.58,1277.51c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-329" d="M1576.46,1246.99c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.66,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-81" d="M1543.24,1294.41c-6.31,4.6-14.88,3.44-19.12-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.61,4.25,6.03,2.56,14.65-3.77,19.24Z"/>
			  <path class="cls-110" d="M1509.54,1250.66c-6.33,4.6-14.89,3.44-19.13-2.6-4.25-6.03-2.56-14.65,3.76-19.24,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-169" d="M1490.61,1279.51c-6.32,4.6-14.89,3.43-19.12-2.6-4.24-6.04-2.56-14.65,3.76-19.26,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-351" d="M1419.76,1239.17c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-118" d="M1447.54,1177.46c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-367" d="M440.44,1665.24c7.6-.95,14.16,4.39,14.66,11.92.5,7.53-5.26,14.4-12.86,15.34-7.6.95-14.16-4.38-14.66-11.92-.5-7.53,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-120" d="M1148.81,986.17c-6.32,4.6-14.88,3.43-19.12-2.61-4.25-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-322" d="M1143.53,776.88c7.59-.95,14.16,4.38,14.66,11.91.5,7.53-5.26,14.39-12.86,15.34-7.6.95-14.16-4.38-14.66-11.91-.5-7.53,5.26-14.39,12.86-15.34Z"/>
			  <path class="cls-462" d="M1432.45,1171.45c-6.32,4.6-14.89,3.44-19.13-2.6-4.25-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.61,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-73" d="M1134.24,1988.85c7.6-.95,14.16,4.38,14.66,11.91.5,7.53-5.26,14.4-12.85,15.35-7.59.94-14.15-4.39-14.66-11.92-.5-7.52,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-325" d="M900.24,1385.41c7.59-.94,14.16,4.39,14.66,11.92.5,7.53-5.26,14.4-12.86,15.34-7.6.95-14.15-4.38-14.65-11.91-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-277" d="M1563.58,1367.25c-6.32,4.59-14.88,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-190" d="M1333.11,1247.12c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.03,2.57,14.65-3.76,19.25Z"/>
			  <path class="cls-143" d="M1257.52,1687.48c7.59-.95,14.15,4.38,14.65,11.91.5,7.52-5.26,14.4-12.86,15.34-7.6.95-14.16-4.39-14.66-11.92-.5-7.52,5.26-14.39,12.86-15.34Z"/>
			  <path class="cls-384" d="M1394.29,1295.74c-6.32,4.59-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.44,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-145" d="M1350.61,1326.86c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.77,19.25Z"/>
			  <path class="cls-352" d="M1342.46,1305.42c-6.32,4.6-14.88,3.44-19.13-2.6-4.25-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-248" d="M1330.88,1331.13c-6.32,4.6-14.88,3.43-19.12-2.61-4.25-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-412" d="M1450.04,1330.07c-6.31,4.6-14.88,3.44-19.12-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.12,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-392" d="M1318.42,1253.39c-6.32,4.6-14.89,3.43-19.13-2.61-4.25-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.61,4.25,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-386" d="M1080.96,1834.28c7.6-.95,14.16,4.38,14.65,11.91.5,7.53-5.26,14.4-12.85,15.34-7.6.95-14.16-4.39-14.66-11.91-.5-7.53,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-380" d="M1109.18,1309.55c-6.33,4.6-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-132" d="M1135.05,1265.27c-6.32,4.6-14.89,3.44-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-479" d="M1164.03,1240.43c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-433" d="M1463.42,1437.6c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.77-19.25,6.32-4.59,14.88-3.43,19.12,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-70" d="M1183.76,1236.16c-6.32,4.6-14.88,3.44-19.13-2.6-4.24-6.04-2.56-14.65,3.77-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-294" d="M2022.83,921.8c7.59-.95,14.16,4.39,14.66,11.92.5,7.52-5.26,14.39-12.86,15.34-7.59.95-14.15-4.38-14.66-11.91-.5-7.52,5.26-14.39,12.86-15.34Z"/>
			  <path class="cls-475" d="M1051.91,1304.94c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.25,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-483" d="M1555.11,739.11c7.6-.94,14.16,4.39,14.66,11.92.5,7.52-5.26,14.39-12.86,15.34-7.59.95-14.16-4.38-14.66-11.91-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-430" d="M1126.18,1298.13c-6.32,4.6-14.89,3.43-19.13-2.6-4.25-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.12,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-157" d="M1034.1,1291.78c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.33-4.59,14.89-3.43,19.13,2.61,4.25,6.03,2.56,14.65-3.76,19.24Z"/>
			  <path class="cls-153" d="M1068.52,1281.24c-6.32,4.59-14.88,3.43-19.13-2.61-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-476" d="M1076.27,1290.38c-6.32,4.6-14.89,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.44,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-454" d="M847.53,994.77c-6.94,3.53-15.1.94-18.23-5.78-3.13-6.71-.04-15.02,6.9-18.54,6.94-3.53,15.1-.94,18.23,5.78,3.13,6.72.04,15.02-6.9,18.55Z"/>
			  <path class="cls-137" d="M1306.74,1200.24c-6.32,4.59-14.88,3.42-19.13-2.61-4.24-6.03-2.56-14.66,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-80" d="M1275.04,1217.93c-6.32,4.6-14.89,3.44-19.13-2.6-4.24-6.04-2.56-14.66,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-459" d="M1429.88,1477.37c-6.32,4.6-14.88,3.43-19.13-2.6-4.25-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.61,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-448" d="M1242.53,1211.05c-6.32,4.6-14.88,3.44-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.61,4.25,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-64" d="M1193.36,2039.36c7.59-.95,14.16,4.38,14.65,11.91.5,7.53-5.25,14.39-12.85,15.34-7.6.95-14.16-4.39-14.66-11.92-.5-7.52,5.26-14.39,12.86-15.34Z"/>
			  <path class="cls-246" d="M1197.03,1338.47c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.77-19.25,6.32-4.59,14.88-3.43,19.12,2.61,4.25,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-378" d="M597.07,1711.05c-6.32,4.6-14.88,3.44-19.13-2.61-4.24-6.03-2.56-14.65,3.77-19.25,6.32-4.6,14.88-3.43,19.12,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-317" d="M1255.41,1301.08c-6.33,4.6-14.89,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-487" d="M1249.67,1353.37c-6.32,4.6-14.89,3.44-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.77,19.25Z"/>
			  <path class="cls-409" d="M1421.46,1918.21c7.6-.95,14.16,4.38,14.66,11.92.5,7.52-5.26,14.39-12.85,15.33-7.6.95-14.16-4.38-14.66-11.91-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-350" d="M1273.22,1314.23c-6.32,4.6-14.88,3.44-19.12-2.6-4.24-6.04-2.56-14.66,3.75-19.25,6.33-4.6,14.89-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-256" d="M1277.54,1370.53c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-407" d="M1148.84,1155.55c-6.32,4.6-14.89,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.44,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-105" d="M660.3,880.76c4.43-6.42,13.04-8.35,19.23-4.3,6.19,4.04,7.61,12.52,3.19,18.94-4.44,6.42-13.04,8.35-19.24,4.31-6.18-4.04-7.61-12.52-3.18-18.94Z"/>
			  <path class="cls-164" d="M627.01,957.64c4.43-6.42,13.04-8.35,19.23-4.31,6.19,4.04,7.62,12.52,3.18,18.94-4.43,6.42-13.04,8.35-19.23,4.31-6.2-4.04-7.61-12.52-3.18-18.94Z"/>
			  <path class="cls-90" d="M670.13,897.46c4.43-6.42,13.04-8.35,19.23-4.31,6.19,4.04,7.61,12.52,3.18,18.94-4.43,6.42-13.04,8.35-19.23,4.31-6.18-4.04-7.62-12.52-3.18-18.94Z"/>
			  <path class="cls-357" d="M1899.69,1416.53c7.6-.94,14.16,4.39,14.66,11.91.5,7.53-5.26,14.4-12.85,15.35-7.6.94-14.16-4.39-14.66-11.92-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-119" d="M657.7,842.41c7.05-3.26,15.09-.36,17.95,6.48,2.87,6.85-.53,15.05-7.58,18.31-7.06,3.27-15.09.37-17.96-6.48-2.87-6.85.53-15.04,7.59-18.31Z"/>
			  <path class="cls-106" d="M723.32,777.01c7.05-3.27,15.09-.37,17.95,6.48,2.87,6.85-.53,15.04-7.59,18.31-7.05,3.27-15.1.36-17.96-6.48-2.86-6.85.54-15.05,7.59-18.31Z"/>
			  <path class="cls-265" d="M975.27,1237.64c-7.61.66-13.95-4.93-14.16-12.49-.21-7.56,5.79-14.22,13.4-14.88,7.61-.66,13.95,4.93,14.16,12.48.21,7.57-5.79,14.23-13.4,14.88Z"/>
			  <path class="cls-468" d="M1156.06,1940.24c6.69,3.22,9.16,11.4,5.52,18.27-3.64,6.87-12.01,9.82-18.7,6.6-6.69-3.22-9.15-11.4-5.52-18.27,3.64-6.87,12.01-9.82,18.69-6.6Z"/>
			  <path class="cls-66" d="M673.6,776.34c7.05-3.26,15.09-.36,17.96,6.48,2.86,6.85-.53,15.04-7.59,18.31-7.05,3.27-15.09.36-17.95-6.48-2.87-6.85.53-15.05,7.59-18.32Z"/>
			  <path class="cls-133" d="M670.1,748.68c7.05-3.27,15.09-.36,17.96,6.48,2.86,6.85-.54,15.04-7.59,18.31-7.05,3.27-15.09.36-17.96-6.48-2.86-6.85.54-15.05,7.59-18.31Z"/>
			  <path class="cls-311" d="M1561.55,1389.7c6.69,3.22,9.16,11.4,5.52,18.27-3.64,6.86-12.01,9.82-18.7,6.6-6.69-3.22-9.16-11.4-5.52-18.27,3.64-6.86,12.01-9.82,18.7-6.6Z"/>
			  <path class="cls-323" d="M664.58,748.6c7.05-3.26,15.09-.36,17.96,6.48,2.86,6.84-.54,15.04-7.59,18.31-7.05,3.27-15.09.36-17.95-6.48-2.86-6.85.53-15.04,7.59-18.31Z"/>
			  <path class="cls-308" d="M1339.09,1870.66c6.68,3.22,9.16,11.4,5.52,18.27-3.64,6.87-12.01,9.82-18.69,6.6-6.68-3.22-9.16-11.4-5.52-18.26,3.64-6.87,12.01-9.82,18.7-6.6Z"/>
			  <path class="cls-314" d="M1204.14,1098.33c-7.61.66-13.95-4.92-14.16-12.48-.21-7.56,5.79-14.22,13.4-14.88,7.61-.66,13.95,4.93,14.16,12.49.21,7.56-5.79,14.22-13.4,14.88Z"/>
			  <path class="cls-148" d="M1157.87,1477.38c7.6-.95,14.16,4.39,14.66,11.92.5,7.53-5.26,14.4-12.85,15.35-7.6.94-14.16-4.39-14.66-11.92-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-72" d="M1893.62,1151.69c7.6-.95,14.16,4.39,14.66,11.91.5,7.53-5.25,14.4-12.85,15.34-7.59.95-14.16-4.39-14.66-11.91-.5-7.52,5.26-14.39,12.85-15.34Z"/>
			  <path class="cls-463" d="M797.05,532.37c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-473" d="M1166.87,1023.25c-6.32,4.6-14.89,3.43-19.13-2.6-4.25-6.04-2.56-14.66,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-115" d="M597.91,902.01c4.44-6.42,13.05-8.35,19.24-4.31,6.19,4.04,7.61,12.52,3.18,18.94-4.43,6.42-13.04,8.35-19.23,4.31-6.19-4.04-7.61-12.52-3.19-18.94Z"/>
			  <path class="cls-161" d="M718.96,947.34c4.43-6.42,13.04-8.35,19.23-4.31,6.19,4.04,7.61,12.52,3.18,18.94-4.44,6.42-13.05,8.35-19.24,4.31-6.19-4.04-7.62-12.52-3.18-18.94Z"/>
			  <path class="cls-253" d="M1182.55,1199.3c-6.32,4.59-14.88,3.43-19.13-2.61-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.61,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-207" d="M1207.21,1118.15c-6.32,4.6-14.88,3.43-19.12-2.6-4.25-6.04-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.42,19.13,2.61,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-492" d="M1396.7,1369.47c-6.32,4.59-14.89,3.43-19.12-2.61-4.25-6.03-2.56-14.65,3.76-19.24,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-282" d="M1397.9,1406.33c-6.32,4.6-14.88,3.43-19.13-2.6-4.24-6.04-2.56-14.66,3.76-19.25,6.32-4.6,14.88-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-399" d="M1511.76,1328.81c-7.49,1.8-14.67-2.71-16.03-10.08-1.36-7.37,3.61-14.8,11.1-16.6,7.49-1.8,14.67,2.72,16.03,10.08,1.36,7.37-3.61,14.81-11.1,16.6Z"/>
			  <path class="cls-389" d="M1970.88,933.61c7.59-.95,14.16,4.38,14.65,11.92.5,7.52-5.25,14.39-12.85,15.34-7.6.95-14.16-4.38-14.66-11.91-.5-7.53,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-166" d="M1015.35,864.52c4.45-6.4,13.07-8.3,19.24-4.24,6.18,4.06,7.57,12.55,3.11,18.96-4.45,6.4-13.07,8.3-19.24,4.24-6.18-4.07-7.57-12.55-3.11-18.96Z"/>
			  <path class="cls-238" d="M1918.64,941.44c7.6-.95,14.16,4.38,14.66,11.91.5,7.53-5.26,14.39-12.86,15.34-7.59.95-14.16-4.39-14.65-11.91-.5-7.53,5.26-14.4,12.85-15.34Z"/>
			  <path class="cls-402" d="M1654.56,1205.32c-6.32,4.59-14.89,3.43-19.13-2.61-4.24-6.04-2.56-14.66,3.76-19.25,6.32-4.59,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-201" d="M1647.82,1948.08c-6.32,4.59-14.88,3.43-19.13-2.6-4.24-6.03-2.56-14.65,3.76-19.25,6.32-4.59,14.88-3.43,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-460" d="M1327.73,925.87c-6.32,4.6-14.89,3.44-19.13-2.6-4.25-6.04-2.56-14.66,3.76-19.25,6.32-4.6,14.89-3.43,19.13,2.6,4.24,6.04,2.56,14.66-3.76,19.25Z"/>
			  <path class="cls-411" d="M893.01,1309.37c7.6-.94,14.16,4.39,14.66,11.91.49,7.53-5.26,14.4-12.86,15.34-7.6.95-14.16-4.39-14.65-11.92-.5-7.52,5.26-14.39,12.85-15.34Z"/>
			  <path class="cls-359" d="M746.73,1639.42c7.6-.95,14.16,4.39,14.66,11.91.5,7.52-5.26,14.4-12.85,15.34-7.6.94-14.16-4.39-14.66-11.92-.51-7.52,5.25-14.4,12.85-15.34Z"/>
			  <path class="cls-298" d="M1692.62,1002.17c-6.32,4.59-14.89,3.43-19.13-2.61-4.24-6.04-2.56-14.65,3.76-19.25,6.32-4.6,14.88-3.44,19.13,2.6,4.24,6.03,2.56,14.65-3.76,19.25Z"/>
			  <path class="cls-82" d="M935.45,1503.96c7.6-.94,14.16,4.39,14.66,11.91.5,7.53-5.26,14.4-12.86,15.34-7.6.94-14.16-4.39-14.66-11.91-.5-7.53,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-240" d="M1260.5,1433.12c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.44,2.71-19.37,6.08-4.92,14.73-4.23,19.31,1.55Z"/>
			  <path class="cls-227" d="M1121.27,1177.98c4.58,5.77,3.37,14.45-2.71,19.37-6.08,4.92-14.72,4.22-19.31-1.56-4.58-5.77-3.37-14.44,2.71-19.35,6.08-4.92,14.72-4.23,19.31,1.54Z"/>
			  <path class="cls-138" d="M1266.29,1132.64c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.37,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-123" d="M1332.82,1116.69c4.58,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-146" d="M1508.11,1489.29c4.59,5.77,3.38,14.44-2.71,19.36-6.08,4.92-14.72,4.22-19.31-1.55-4.58-5.77-3.37-14.45,2.71-19.36,6.07-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-117" d="M975.64,738.1c-.92-7.46,4.47-14.61,12.03-15.97,7.56-1.36,14.42,3.59,15.34,11.06.91,7.46-4.48,14.61-12.04,15.97-7.56,1.36-14.42-3.59-15.33-11.06Z"/>
			  <path class="cls-224" d="M1074.44,892.17c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.54-4.58-5.77-3.37-14.44,2.71-19.36,6.07-4.91,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-371" d="M782.49,1694.19c-.92-7.47,4.47-14.61,12.03-15.97,7.56-1.36,14.42,3.59,15.34,11.06.91,7.47-4.48,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-408" d="M901.3,1075.43c3.51,6.51.87,14.95-5.89,18.83-6.76,3.89-15.08,1.76-18.58-4.75-3.51-6.52-.87-14.94,5.89-18.83,6.76-3.89,15.08-1.77,18.58,4.76Z"/>
			  <path class="cls-304" d="M1109.13,841.26c-.91-7.47,4.48-14.61,12.04-15.97,7.56-1.36,14.43,3.59,15.34,11.05.91,7.47-4.47,14.62-12.03,15.98-7.56,1.35-14.42-3.6-15.34-11.06Z"/>
			  <path class="cls-127" d="M1309.77,857.87c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.22,19.31,1.55Z"/>
			  <path class="cls-395" d="M945.78,1999.11c-.91-7.46,4.48-14.61,12.03-15.97,7.56-1.36,14.43,3.59,15.34,11.06.91,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-217" d="M1417.02,960.78c6.05,4.22,7.24,12.75,2.63,19.05-4.61,6.3-13.25,7.98-19.32,3.77-6.06-4.22-7.24-12.75-2.63-19.06,4.6-6.3,13.25-7.99,19.32-3.76Z"/>
			  <path class="cls-287" d="M1363.23,983.25c4.59,5.77,3.37,14.44-2.71,19.36-6.07,4.92-14.72,4.23-19.3-1.55-4.59-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-450" d="M1845.09,1375.33c-.91-7.46,4.48-14.61,12.03-15.97,7.56-1.35,14.43,3.59,15.34,11.06.91,7.46-4.48,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-173" d="M1505.13,918.47c4.59,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.77-3.37-14.45,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-273" d="M1673.6,1911.02c4.58,5.77,3.37,14.45-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-477" d="M1467.19,897.3c4.59,5.77,3.37,14.44-2.7,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.45,2.71-19.37,6.08-4.92,14.72-4.22,19.3,1.55Z"/>
			  <path class="cls-100" d="M1411.14,929.56c4.58,5.78,3.37,14.44-2.71,19.37-6.08,4.91-14.72,4.22-19.31-1.55-4.58-5.77-3.37-14.45,2.71-19.37,6.08-4.92,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-432" d="M1780.89,923.4c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-334" d="M963.13,1844.08c4.59,5.77,3.38,14.45-2.7,19.36-6.08,4.92-14.72,4.23-19.31-1.55-4.58-5.78-3.37-14.44,2.71-19.37,6.07-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-101" d="M1441.38,826.16c7.44-2.05,14.79,2.2,16.41,9.5,1.62,7.31-3.1,14.89-10.54,16.94-7.44,2.05-14.78-2.2-16.4-9.5-1.62-7.31,3.1-14.89,10.53-16.94Z"/>
			  <path class="cls-360" d="M1667.36,1019.46c4.58,5.77,3.37,14.44-2.71,19.36-6.09,4.92-14.72,4.22-19.31-1.55-4.58-5.78-3.37-14.45,2.71-19.36,6.08-4.92,14.72-4.23,19.3,1.55Z"/>
			  <path class="cls-436" d="M885.3,1272.29c-.91-7.46,4.48-14.61,12.03-15.97,7.56-1.35,14.42,3.59,15.34,11.06.91,7.46-4.48,14.61-12.03,15.97-7.56,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-263" d="M1392.44,1908.23c-.91-7.46,4.48-14.62,12.03-15.97,7.56-1.36,14.42,3.59,15.34,11.06.91,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.42-3.59-15.34-11.05Z"/>
			  <path class="cls-401" d="M1936.81,1455.89c-.92-7.47,4.47-14.61,12.03-15.97,7.56-1.36,14.43,3.59,15.34,11.05.91,7.47-4.48,14.62-12.03,15.97-7.56,1.36-14.43-3.6-15.34-11.05Z"/>
			  <path class="cls-176" d="M810.45,2077.19c-.91-7.46,4.47-14.62,12.03-15.97,7.56-1.36,14.42,3.59,15.34,11.05.92,7.47-4.47,14.62-12.03,15.97-7.56,1.36-14.42-3.59-15.34-11.06Z"/>
			  <path class="cls-158" d="M1361.06,1884.91c-.91-7.46,4.47-14.61,12.03-15.97,7.56-1.36,14.43,3.59,15.34,11.05.92,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.42-3.59-15.33-11.06Z"/>
			  <path class="cls-78" d="M730.4,1768.98c-.91-7.47,4.47-14.61,12.03-15.97,7.56-1.36,14.42,3.59,15.34,11.06.92,7.46-4.47,14.61-12.03,15.97-7.56,1.36-14.42-3.6-15.34-11.06Z"/>
			  <path class="cls-414" d="M1839.13,1529.12c7.59-.95,14.16,4.38,14.66,11.91.5,7.53-5.26,14.4-12.85,15.34-7.6.95-14.16-4.39-14.66-11.92-.5-7.52,5.26-14.39,12.86-15.34Z"/>
			  <path class="cls-370" d="M1264.71,1999.4c7.59-.95,14.16,4.39,14.65,11.92.5,7.52-5.25,14.39-12.85,15.34-7.6.95-14.16-4.38-14.66-11.91-.5-7.53,5.25-14.4,12.86-15.34Z"/>
			  <path class="cls-170" d="M2040.05,1485.61c7.6-.95,14.16,4.38,14.66,11.92.5,7.52-5.26,14.39-12.86,15.34-7.59.95-14.16-4.39-14.66-11.92-.5-7.52,5.25-14.4,12.85-15.34Z"/>
			  <path class="cls-326" d="M1911,1435.44c7.6-.94,14.16,4.39,14.66,11.92.5,7.52-5.26,14.39-12.85,15.34-7.6.95-14.16-4.39-14.66-11.91-.5-7.53,5.26-14.4,12.85-15.35Z"/>
			  <path class="cls-472" d="M1994.25,1500.2c7.6-.94,14.16,4.39,14.66,11.91.5,7.53-5.25,14.39-12.86,15.34-7.6.95-14.16-4.39-14.66-11.92-.5-7.53,5.26-14.39,12.85-15.34Z"/>
			  <path class="cls-229" d="M1366.27,1950.6c7.6-.95,14.16,4.38,14.65,11.91.5,7.53-5.25,14.4-12.85,15.34-7.6.95-14.16-4.39-14.66-11.91-.5-7.53,5.26-14.4,12.86-15.34Z"/>
			  <path class="cls-231" d="M1365.58,1881.47c-.91-7.46,4.48-14.61,12.03-15.96,7.56-1.37,14.43,3.59,15.34,11.05.91,7.46-4.48,14.61-12.04,15.97-7.55,1.36-14.43-3.59-15.34-11.06Z"/>
			  <path class="cls-413" d="M1280.1,1976.71c-4.88,6.1-13.58,7.39-19.42,2.88-5.84-4.51-6.61-13.11-1.73-19.21,4.88-6.1,13.58-7.39,19.42-2.88,5.85,4.51,6.62,13.11,1.73,19.21Z"/>
			  <path class="cls-327" d="M1957.86,1540.25c-3.28-6.64-.38-15,6.49-18.67,6.87-3.67,15.09-1.26,18.38,5.37,3.28,6.63.37,14.99-6.49,18.67-6.87,3.68-15.1,1.27-18.39-5.36Z"/>
			  <path class="cls-245" d="M1837.38,1597.07c-3.69,6.84-12.08,9.73-18.74,6.45-6.65-3.27-9.06-11.48-5.37-18.32,3.69-6.84,12.08-9.74,18.74-6.45,6.65,3.27,9.06,11.48,5.37,18.32Z"/>
			  <path class="cls-421" d="M1879.88,1547.78c-3.69,6.84-12.09,9.73-18.74,6.46-6.66-3.28-9.06-11.48-5.37-18.33,3.69-6.84,12.08-9.73,18.74-6.45,6.66,3.28,9.06,11.48,5.37,18.32Z"/>
			  <path class="cls-338" d="M1826.03,1304.33c1.52,7.33-3.29,14.85-10.76,16.81-7.46,1.95-14.74-2.41-16.26-9.73-1.52-7.33,3.3-14.85,10.76-16.81,7.46-1.96,14.74,2.4,16.26,9.73Z"/>
			  <path class="cls-484" d="M1796.14,1266.06c1.51,7.33-3.3,14.85-10.76,16.81-7.46,1.95-14.74-2.41-16.26-9.73-1.52-7.33,3.3-14.86,10.76-16.81,7.46-1.95,14.74,2.4,16.26,9.74Z"/>
			  <path class="cls-379" d="M1763.69,1298c1.52,7.33-3.3,14.86-10.76,16.81-7.46,1.95-14.74-2.4-16.26-9.73-1.52-7.34,3.3-14.85,10.76-16.81,7.46-1.95,14.74,2.4,16.26,9.73Z"/>
			  <path class="cls-320" d="M1796.79,1355.7c1.52,7.33-3.3,14.85-10.76,16.81-7.46,1.95-14.74-2.41-16.25-9.73-1.52-7.33,3.3-14.85,10.75-16.81,7.46-1.95,14.74,2.41,16.26,9.74Z"/>
			  <path class="cls-297" d="M1822.83,1284.92c1.52,7.33-3.3,14.85-10.76,16.81-7.46,1.95-14.73-2.4-16.26-9.73-1.52-7.33,3.3-14.85,10.76-16.81,7.46-1.95,14.74,2.4,16.26,9.74Z"/>
			  <path class="cls-305" d="M1332.25,1811.7c1.52,7.33-3.3,14.86-10.75,16.81-7.46,1.95-14.74-2.4-16.26-9.73-1.52-7.33,3.3-14.86,10.76-16.81,7.46-1.96,14.74,2.4,16.26,9.73Z"/>
			  <path class="cls-140" d="M1781.99,1332.65c1.53,7.33-3.29,14.85-10.75,16.81-7.46,1.95-14.74-2.4-16.26-9.74-1.52-7.33,3.3-14.85,10.76-16.81,7.46-1.96,14.74,2.4,16.25,9.73Z"/>
			  <path class="cls-424" d="M1793.87,1328.47c1.52,7.33-3.3,14.86-10.76,16.81-7.45,1.95-14.74-2.4-16.26-9.73-1.52-7.33,3.3-14.86,10.76-16.81,7.46-1.96,14.74,2.4,16.26,9.73Z"/>
			  <path class="cls-348" d="M1221.76,1829.71c-2.7,7.24-10.66,11.27-17.78,9.01-7.12-2.26-10.7-9.97-8-17.21,2.7-7.24,10.66-11.27,17.78-9,7.12,2.27,10.69,9.97,8,17.21Z"/>
			  <path class="cls-449" d="M1256.27,1848.39c-2.7,7.24-10.66,11.27-17.78,9.01-7.12-2.27-10.7-9.97-7.99-17.21,2.7-7.24,10.67-11.27,17.79-9.01,7.12,2.27,10.69,9.98,7.98,17.21Z"/>
			  <path class="cls-266" d="M1258.26,1793.78c-2.7,7.24-10.66,11.27-17.78,9.01-7.12-2.27-10.69-9.97-7.99-17.21,2.7-7.24,10.66-11.28,17.78-9,7.11,2.26,10.69,9.97,7.99,17.21Z"/>
			  <path class="cls-416" d="M1281.18,1808.83c-2.71,7.24-10.66,11.27-17.78,9.01-7.12-2.27-10.7-9.97-7.99-17.21,2.7-7.24,10.66-11.27,17.78-9.01,7.12,2.26,10.69,9.97,7.99,17.21Z"/>
			  <path class="cls-441" d="M1285.23,1804.84c-2.7,7.24-10.66,11.27-17.78,9.01-7.12-2.27-10.7-9.97-8-17.21,2.7-7.24,10.66-11.27,17.78-9.01,7.11,2.27,10.69,9.97,7.99,17.21Z"/>
			  <path class="cls-237" d="M1074.09,2000.24c-2.71,7.24-10.66,11.27-17.78,9-7.11-2.26-10.69-9.97-7.99-17.21,2.71-7.24,10.66-11.27,17.79-9,7.11,2.26,10.69,9.97,7.99,17.21Z"/>
			  <path class="cls-276" d="M1130.04,2051.03c7.37-2.35,14.9,1.59,16.82,8.8,1.92,7.21-2.48,14.96-9.85,17.32-7.36,2.35-14.9-1.59-16.82-8.79-1.93-7.22,2.48-14.97,9.85-17.32Z"/>
			  <path class="cls-343" d="M1598.21,1107.15c4.58,5.77,3.37,14.44-2.71,19.36-6.08,4.92-14.73,4.23-19.3-1.55-4.58-5.77-3.37-14.44,2.71-19.36,6.08-4.93,14.72-4.23,19.31,1.55Z"/>
			  <path class="cls-221" d="M796.65,1388.73c-2.03-7.18,2.28-14.98,9.63-17.43,7.34-2.44,14.93,1.39,16.95,8.57,2.02,7.18-2.28,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			  <path class="cls-301" d="M1129.33,1660.88c-2.02-7.18,2.29-14.98,9.63-17.43,7.34-2.45,14.93,1.39,16.95,8.57,2.02,7.18-2.29,14.99-9.63,17.43-7.34,2.45-14.93-1.39-16.95-8.57Z"/>
			</g>
			<g>
			  <path class="cls-126" d="M1156.73,1363.82c17.39-10.03,39.98-5.35,50.47,10.46,10.49,15.82,4.9,36.77-12.49,46.8-17.38,10.04-39.98,5.35-50.47-10.46-10.49-15.81-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-75" d="M1057.68,1468.14c17.38-10.03,39.98-5.35,50.47,10.46,10.49,15.82,4.9,36.77-12.49,46.81-17.39,10.04-39.99,5.35-50.47-10.46-10.49-15.81-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-228" d="M1293.91,1164.62c17.39-10.04,39.98-5.36,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.03-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-333" d="M665.89,1426.15c17.39-10.04,39.99-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.04-39.98,5.35-50.47-10.46-10.48-15.82-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-76" d="M591.52,1090.59c17.39-10.03,39.99-5.35,50.47,10.47,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.03-39.99,5.35-50.47-10.46-10.49-15.81-4.89-36.78,12.49-46.81Z"/>
			  <path class="cls-377" d="M813.33,1093.54c17.39-10.03,39.98-5.35,50.47,10.46,10.49,15.82,4.89,36.77-12.5,46.81-17.39,10.04-39.98,5.35-50.47-10.47-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-345" d="M835.58,1665.38c17.39-10.04,39.99-5.35,50.47,10.46,10.49,15.81,4.9,36.77-12.49,46.81-17.39,10.04-39.99,5.35-50.47-10.47-10.49-15.81-4.9-36.77,12.49-46.8Z"/>
			  <path class="cls-437" d="M677.98,979.18c17.39-10.04,39.99-5.35,50.47,10.46,10.49,15.82,4.89,36.77-12.49,46.81-17.39,10.04-39.99,5.35-50.47-10.46-10.49-15.82-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-116" d="M1137.18,1301.25c17.39-10.04,39.99-5.35,50.47,10.46,10.49,15.81,4.9,36.77-12.49,46.81-17.38,10.03-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-130" d="M1370.11,1387.11c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.03-39.98,5.35-50.47-10.46-10.49-15.81-4.89-36.77,12.49-46.8Z"/>
			  <path class="cls-109" d="M1128.12,1140.3c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.82,4.89,36.77-12.49,46.8-17.39,10.04-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-89" d="M824.45,1176.44c17.39-10.04,39.99-5.35,50.48,10.47,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.03-39.99,5.35-50.48-10.46-10.49-15.81-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-458" d="M1018.1,1405.43c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.82,4.9,36.77-12.49,46.81-17.38,10.03-39.98,5.35-50.47-10.47-10.49-15.81-4.89-36.77,12.49-46.8Z"/>
			  <path class="cls-87" d="M856.43,958.98c17.39-10.04,39.99-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.04-39.98,5.35-50.47-10.46-10.49-15.81-4.89-36.77,12.49-46.8Z"/>
			  <path class="cls-467" d="M1436.08,1750.52c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.81,4.9,36.77-12.49,46.81-17.38,10.04-39.98,5.35-50.47-10.47-10.49-15.81-4.89-36.77,12.49-46.8Z"/>
			  <path class="cls-372" d="M486.29,1328.62c17.38-10.04,39.99-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.04-39.98,5.35-50.47-10.47-10.49-15.81-4.89-36.77,12.49-46.8Z"/>
			  <path class="cls-405" d="M1222.51,1577.06c17.39-10.03,39.98-5.35,50.47,10.47,10.49,15.81,4.9,36.77-12.49,46.81-17.39,10.03-39.99,5.35-50.47-10.46-10.49-15.82-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-355" d="M1322.04,1526.99c17.39-10.03,39.98-5.35,50.47,10.46,10.49,15.81,4.9,36.77-12.49,46.81-17.39,10.03-39.98,5.35-50.47-10.47-10.49-15.81-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-247" d="M1304.02,1221.85c17.38-10.04,39.98-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.03-39.99,5.35-50.48-10.46-10.48-15.81-4.89-36.77,12.5-46.81Z"/>
			  <path class="cls-465" d="M1700.11,1575.59c17.39-10.03,39.98-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.81-17.39,10.04-39.98,5.35-50.47-10.46-10.49-15.82-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-398" d="M449.37,1235.1c17.39-10.03,39.99-5.35,50.47,10.47,10.49,15.82,4.89,36.77-12.5,46.81-17.38,10.03-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-259" d="M1007,1830.16c17.38-10.03,39.98-5.35,50.47,10.47,10.49,15.82,4.9,36.77-12.49,46.81-17.39,10.03-39.98,5.35-50.47-10.46-10.48-15.82-4.89-36.78,12.5-46.81Z"/>
			  <path class="cls-93" d="M1488.46,1595.5c17.39-10.03,39.99-5.35,50.47,10.46,10.49,15.82,4.9,36.77-12.49,46.81-17.39,10.04-39.98,5.35-50.47-10.46-10.48-15.81-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-312" d="M748,1907.92c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.81,4.9,36.77-12.5,46.8-17.39,10.04-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-79" d="M1266.22,1038.17c17.38-10.03,39.98-5.35,50.47,10.46,10.49,15.82,4.9,36.77-12.49,46.81-17.39,10.03-39.99,5.35-50.47-10.46-10.49-15.81-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-267" d="M747.82,820.62c17.38-10.03,39.98-5.35,50.47,10.46,10.49,15.82,4.89,36.78-12.49,46.81-17.39,10.03-39.98,5.35-50.47-10.47-10.49-15.81-4.89-36.77,12.49-46.81Z"/>
			  <path class="cls-486" d="M317.29,1123.51c17.39-10.04,39.99-5.35,50.47,10.47,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.04-39.99,5.35-50.48-10.47-10.49-15.81-4.89-36.76,12.49-46.8Z"/>
			  <path class="cls-236" d="M628.29,1573.95c17.38-10.04,39.98-5.36,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.04-39.98,5.35-50.47-10.46-10.49-15.82-4.9-36.77,12.49-46.81Z"/>
			  <path class="cls-112" d="M1349.9,1358.16c17.39-10.04,39.98-5.35,50.47,10.46,10.49,15.81,4.89,36.77-12.49,46.8-17.39,10.03-39.98,5.35-50.47-10.46-10.49-15.81-4.9-36.77,12.49-46.8Z"/>
			</g>
		  </g>
		</g>
		<g>
		  <g>
			<g>
			  <path class="cls-11" d="M2136,3309.26c0,98.78-465,154.14-1038.6,154.14s-984.46-42.77-984.46-141.56c0-80.96,410.86-216.18,984.46-216.18s1038.6,104.81,1038.6,203.59Z"/>
			  <path class="cls-19" d="M2132,3308.95c.33,97.52-463.93,151.79-1035.4,151.79s-980.99-42.17-980.99-139.45c0-80.64,409.52-212.48,980.99-212.48s1035.06,102.61,1035.4,200.14Z"/>
			  <path class="cls-13" d="M2128,3308.63c.67,96.25-462.87,149.44-1032.2,149.44s-977.52-41.58-977.52-137.35c0-80.32,408.19-208.78,977.52-208.78s1031.52,100.41,1032.2,196.69Z"/>
			  <path class="cls-56" d="M2124,3308.32c1,94.98-461.81,147.08-1029,147.08s-974.05-40.98-974.05-135.24c0-80.01,406.85-205.09,974.05-205.09s1027.98,98.22,1029,193.24Z"/>
			  <path class="cls-31" d="M2120,3308c1.33,93.72-460.74,144.73-1025.81,144.73s-970.58-40.39-970.58-133.13c0-79.69,405.52-201.39,970.58-201.39s1024.45,96.02,1025.81,189.79Z"/>
			  <path class="cls-47" d="M2116,3307.69c1.67,92.45-459.68,142.38-1022.61,142.38s-967.11-39.79-967.11-131.03c0-79.37,404.18-197.69,967.11-197.69s1020.91,93.82,1022.61,186.34Z"/>
			  <path class="cls-33" d="M2112,3307.38c2,91.18-458.62,140.03-1019.41,140.03s-963.64-39.19-963.64-128.92c0-79.05,402.85-193.99,963.64-193.99s1017.37,91.63,1019.41,182.89Z"/>
			  <path class="cls-29" d="M2108,3307.06c2.33,89.92-457.55,137.68-1016.21,137.68s-960.17-38.6-960.17-126.82c0-78.73,401.51-190.3,960.17-190.3s1013.83,89.43,1016.21,179.44Z"/>
			  <path class="cls-12" d="M2104,3306.75c2.67,88.65-456.49,135.32-1013.02,135.32s-956.71-38-956.71-124.71c0-78.41,400.18-186.6,956.71-186.6s1010.3,87.23,1013.02,175.99Z"/>
			  <path class="cls-34" d="M2100,3306.43c3,87.38-455.43,132.97-1009.82,132.97s-953.24-37.4-953.24-122.61c0-78.09,398.84-182.9,953.24-182.9s1006.76,85.04,1009.82,172.54Z"/>
			  <path class="cls-39" d="M2096,3306.12c3.33,86.12-454.36,130.62-1006.62,130.62s-949.77-36.81-949.77-120.5c0-77.78,397.51-179.21,949.77-179.21s1003.22,82.84,1006.62,169.09Z"/>
			  <path class="cls-22" d="M2092,3305.81c3.67,84.85-453.3,128.27-1003.42,128.27s-946.3-36.21-946.3-118.4c0-77.46,396.17-175.51,946.3-175.51s999.68,80.64,1003.42,165.64Z"/>
			  <path class="cls-45" d="M2088,3305.49c4,83.58-452.24,125.91-1000.23,125.91s-942.83-35.62-942.83-116.29,394.84-171.81,942.83-171.81,996.15,78.45,1000.23,162.19Z"/>
			  <path class="cls-49" d="M2084,3305.18c4.33,82.32-451.17,123.56-997.03,123.56s-939.36-35.02-939.36-114.19,393.5-168.12,939.36-168.12,992.61,76.25,997.03,158.74Z"/>
			  <path class="cls-6" d="M2080,3304.86c4.67,81.05-450.11,121.21-993.83,121.21s-935.89-34.42-935.89-112.08,392.17-164.42,935.89-164.42,989.07,74.05,993.83,155.29Z"/>
			  <path class="cls-15" d="M2076,3304.55c5,79.78-449.05,118.86-990.63,118.86s-932.42-33.83-932.42-109.97,390.83-160.72,932.42-160.72,985.53,71.85,990.63,151.84Z"/>
			  <path class="cls-36" d="M2072,3304.24c5.33,78.52-447.98,116.51-987.44,116.51s-928.95-33.23-928.95-107.87,389.49-157.03,928.95-157.03,982,69.66,987.44,148.39Z"/>
			  <path class="cls-10" d="M2068,3303.92c5.67,77.25-446.92,114.15-984.24,114.15s-925.48-32.63-925.48-105.76,388.16-153.33,925.48-153.33,978.46,67.46,984.24,144.94Z"/>
			  <path class="cls-32" d="M2064,3303.61c6,75.98-445.86,111.8-981.04,111.8s-922.01-32.04-922.01-103.66c0-75.23,386.82-149.63,922.01-149.63s974.92,65.26,981.04,141.49Z"/>
			  <path class="cls-5" d="M2060,3303.29c6.33,74.72-444.79,109.45-977.84,109.45s-918.54-31.44-918.54-101.55c0-74.91,385.49-145.94,918.54-145.94s971.38,63.07,977.84,138.04Z"/>
			  <path class="cls-46" d="M2056,3302.98c6.67,73.45-443.73,107.1-974.65,107.1s-915.07-30.85-915.07-99.45c0-74.59,384.15-142.24,915.07-142.24s967.85,60.87,974.65,134.59Z"/>
			  <path class="cls-41" d="M2052,3302.66c7,72.18-442.67,104.75-971.45,104.75s-911.6-30.25-911.6-97.34c0-74.27,382.82-138.54,911.6-138.54s964.31,58.67,971.45,131.14Z"/>
			  <path class="cls-52" d="M2048,3302.35c7.33,70.92-441.6,102.39-968.25,102.39s-908.13-29.65-908.13-95.24c0-73.96,381.48-134.84,908.13-134.84s960.77,56.48,968.25,127.69Z"/>
			  <path class="cls-40" d="M2044,3302.04c7.67,69.65-440.54,100.04-965.05,100.04s-904.67-29.06-904.67-93.13c0-73.64,380.15-131.15,904.67-131.15s957.23,54.28,965.05,124.24Z"/>
			  <path class="cls-28" d="M2040,3301.72c8,68.38-439.48,97.69-961.86,97.69s-901.2-28.46-901.2-91.03c0-73.32,378.81-127.45,901.2-127.45s953.7,52.08,961.86,120.79Z"/>
			  <path class="cls-27" d="M2036,3301.41c8.33,67.12-438.41,95.34-958.66,95.34s-897.73-27.87-897.73-88.92c0-73,377.48-123.75,897.73-123.75s950.16,49.89,958.66,117.34Z"/>
			  <path class="cls-20" d="M2032,3301.09c8.67,65.85-437.35,92.98-955.46,92.98s-894.26-27.27-894.26-86.82c0-72.68,376.14-120.06,894.26-120.06s946.62,47.69,955.46,113.89Z"/>
			  <path class="cls-23" d="M2028,3300.78c9,64.58-436.29,90.63-952.26,90.63s-890.79-26.67-890.79-84.71c0-72.36,374.81-116.36,890.79-116.36s943.08,45.49,952.26,110.44Z"/>
			  <path class="cls-7" d="M2024,3300.47c9.33,63.32-435.22,88.28-949.07,88.28s-887.32-26.08-887.32-82.6c0-72.04,373.47-112.66,887.32-112.66s939.55,43.3,949.07,106.99Z"/>
			  <path class="cls-38" d="M2020,3300.15c9.67,62.05-434.16,85.93-945.87,85.93s-883.85-25.48-883.85-80.5c0-71.73,372.14-108.97,883.85-108.97s936.01,41.1,945.87,103.54Z"/>
			  <path class="cls-43" d="M2016,3299.84c10,60.78-433.1,83.58-942.67,83.58s-880.38-24.88-880.38-78.39c0-71.41,370.8-105.27,880.38-105.27s932.47,38.9,942.67,100.09Z"/>
			  <path class="cls-25" d="M2012,3299.52c10.33,59.51-432.03,81.22-939.48,81.22s-876.91-24.29-876.91-76.29c0-71.09,369.47-101.57,876.91-101.57s928.93,36.7,939.48,96.64Z"/>
			  <path class="cls-37" d="M2008,3299.21c10.67,58.25-430.97,78.87-936.28,78.87s-873.44-23.69-873.44-74.18c0-70.77,368.13-97.88,873.44-97.88s925.39,34.51,936.28,93.19Z"/>
			  <path class="cls-48" d="M2004,3298.9c11,56.98-429.91,76.52-933.08,76.52s-869.97-23.1-869.97-72.08c0-70.45,366.8-94.18,869.97-94.18s921.86,32.31,933.08,89.74Z"/>
			  <path class="cls-26" d="M2000,3298.58c11.33,55.71-428.84,74.17-929.88,74.17s-866.5-22.5-866.5-69.97c0-70.13,365.46-90.48,866.5-90.48s918.32,30.11,929.88,86.29Z"/>
			  <path class="cls-21" d="M1996,3298.27c11.67,54.45-427.78,71.81-926.69,71.81s-863.03-21.9-863.03-67.87c0-69.82,364.13-86.79,863.03-86.79s914.78,27.92,926.69,82.84Z"/>
			  <path class="cls-8" d="M1992,3297.95c12,53.18-426.72,69.46-923.49,69.46s-859.56-21.31-859.56-65.76c0-69.5,362.79-83.09,859.56-83.09s911.24,25.72,923.49,79.39Z"/>
			  <path class="cls-54" d="M1988,3297.64c12.33,51.91-425.65,67.11-920.29,67.11s-856.09-20.71-856.09-63.66c0-69.18,361.46-79.39,856.09-79.39s907.71,23.52,920.29,75.94Z"/>
			  <path class="cls-55" d="M1984,3297.33c12.67,50.65-424.59,64.76-917.09,64.76s-852.62-20.11-852.62-61.55c0-68.86,360.12-75.69,852.62-75.69s904.17,21.33,917.09,72.49Z"/>
			  <path class="cls-9" d="M1980,3297.01c13,49.38-423.53,62.41-913.9,62.41s-849.16-19.52-849.16-59.44c0-68.54,358.78-72,849.16-72s900.63,19.13,913.9,69.04Z"/>
			  <path class="cls-24" d="M1976,3296.7c13.33,48.11-422.46,60.05-910.7,60.05s-845.69-18.92-845.69-57.34c0-68.22,357.45-68.3,845.69-68.3s897.09,16.93,910.7,65.59Z"/>
			  <path class="cls-44" d="M1972,3296.38c13.67,46.85-421.4,57.7-907.5,57.7s-842.22-18.33-842.22-55.23c0-67.91,356.11-64.6,842.22-64.6s893.56,14.74,907.5,62.14Z"/>
			  <path class="cls-50" d="M1968,3296.07c14,45.58-420.34,55.35-904.3,55.35s-838.75-17.73-838.75-53.13c0-67.59,354.78-60.91,838.75-60.91s890.02,12.54,904.3,58.69Z"/>
			  <path class="cls-18" d="M1964,3295.76c14.33,44.31-419.27,53-901.11,53s-835.28-17.13-835.28-51.02c0-67.27,353.44-57.21,835.28-57.21s886.48,10.34,901.11,55.24Z"/>
			  <path class="cls-14" d="M1960,3295.44c14.67,43.05-418.21,50.64-897.91,50.64s-831.81-16.54-831.81-48.92c0-66.95,352.11-53.51,831.81-53.51s882.94,8.15,897.91,51.79Z"/>
			  <path class="cls-30" d="M1956,3295.13c15,41.78-417.15,48.29-894.71,48.29s-828.34-15.94-828.34-46.81c0-66.63,350.77-49.82,828.34-49.82s879.41,5.95,894.71,48.34Z"/>
			  <path class="cls-53" d="M1952,3294.81c15.33,40.51-416.08,45.94-891.51,45.94s-824.87-15.34-824.87-44.71c0-66.31,349.44-46.12,824.87-46.12s875.87,3.75,891.51,44.89Z"/>
			  <path class="cls-17" d="M1947.99,3294.5c15.67,39.25-415.02,43.59-888.32,43.59s-821.4-14.75-821.4-42.6c0-66,348.1-42.42,821.4-42.42s872.33,1.56,888.32,41.44Z"/>
			  <path class="cls-35" d="M1943.99,3294.19c16,37.98-413.96,41.24-885.12,41.24s-817.93-14.15-817.93-40.5c0-65.68,346.77-38.73,817.93-38.73s868.79-.64,885.12,37.99Z"/>
			  <path class="cls-16" d="M1939.99,3293.87c16.33,36.71-412.89,38.88-881.92,38.88s-814.46-13.56-814.46-38.39c0-65.36,345.43-35.03,814.46-35.03s865.26-2.84,881.92,34.54Z"/>
			  <path class="cls-51" d="M1935.99,3293.56c16.67,35.45-411.83,36.53-878.72,36.53s-810.99-12.96-810.99-36.28c0-65.04,344.1-31.33,810.99-31.33s861.72-5.04,878.72,31.09Z"/>
			  <path class="cls-42" d="M1931.99,3293.24c17,34.18-410.77,34.18-875.53,34.18s-807.52-12.36-807.52-34.18c0-64.72,342.76-27.64,807.52-27.64s858.18-7.23,875.53,27.64Z"/>
			</g>
			<path class="cls-1179" d="M1895.31,3267.41c0,5.14-6.78,9.52-16.21,10.37-80.89,7.34-450.21,39.12-782.1,39.12-398,0-701.93-30.97-772.62-38.83-9.11-1.01-15.62-5.31-15.62-10.31v-105.22s332.42,56.87,793.27,56.87c370.19,0,793.27-56.87,793.27-56.87v104.87Z"/>
			<path class="cls-1043" d="M1895.31,3162.54c0-31.41-355.16-56.87-793.27-56.87s-793.27,25.46-793.27,56.87,355.16,56.87,793.27,56.87,793.27-25.46,793.27-56.87Z"/>
			<ellipse class="cls-634" cx="1094.62" cy="3161.04" rx="652.41" ry="43.16"/>
		  </g>
		  <g>
			<g>
			  <path class="cls-11" d="M1875.54,3184.18c0,73.35-345.26,114.45-771.17,114.45s-730.97-31.76-730.97-105.11c0-60.11,305.07-160.51,730.97-160.51s771.17,77.82,771.17,151.17Z"/>
			  <path class="cls-19" d="M1872.57,3183.95c.25,72.41-344.48,112.7-768.79,112.7s-728.4-31.31-728.4-103.54c0-59.88,304.08-157.77,728.4-157.77s768.54,76.19,768.79,148.61Z"/>
			  <path class="cls-13" d="M1869.6,3183.71c.5,71.47-343.69,110.96-766.42,110.96s-725.82-30.87-725.82-101.98c0-59.64,303.08-155.02,725.82-155.02s765.92,74.56,766.42,146.05Z"/>
			  <path class="cls-56" d="M1866.63,3183.48c.74,70.53-342.9,109.21-764.05,109.21s-723.24-30.43-723.24-100.42c0-59.4,302.09-152.28,723.24-152.28s763.29,72.93,764.05,143.48Z"/>
			  <path class="cls-31" d="M1863.66,3183.25c.99,69.59-342.11,107.47-761.67,107.47s-720.67-29.99-720.67-98.85c0-59.17,301.1-149.53,720.67-149.53s760.66,71.3,761.67,140.92Z"/>
			  <path class="cls-47" d="M1860.69,3183.02c1.24,68.65-341.32,105.72-759.3,105.72s-718.09-29.54-718.09-97.29c0-58.93,300.11-146.79,718.09-146.79s758.04,69.66,759.3,138.36Z"/>
			  <path class="cls-33" d="M1857.72,3182.78c1.49,67.71-340.53,103.97-756.92,103.97s-715.52-29.1-715.52-95.73c0-58.7,299.12-144.04,715.52-144.04s755.41,68.03,756.92,135.8Z"/>
			  <path class="cls-29" d="M1854.75,3182.55c1.73,66.76-339.74,102.23-754.55,102.23s-712.94-28.66-712.94-94.16c0-58.46,298.13-141.3,712.94-141.3s752.78,66.4,754.55,133.24Z"/>
			  <path class="cls-12" d="M1851.78,3182.32c1.98,65.82-338.95,100.48-752.18,100.48s-710.36-28.22-710.36-92.6c0-58.22,297.14-138.55,710.36-138.55s750.16,64.77,752.18,130.67Z"/>
			  <path class="cls-34" d="M1848.81,3182.08c2.23,64.88-338.16,98.73-749.8,98.73s-707.79-27.77-707.79-91.04c0-57.99,296.14-135.81,707.79-135.81s747.53,63.14,749.8,128.11Z"/>
			  <path class="cls-39" d="M1845.84,3181.85c2.48,63.94-337.37,96.99-747.43,96.99s-705.21-27.33-705.21-89.47c0-57.75,295.15-133.06,705.21-133.06s744.9,61.51,747.43,125.55Z"/>
			  <path class="cls-22" d="M1842.87,3181.62c2.72,63-336.58,95.24-745.05,95.24s-702.64-26.89-702.64-87.91c0-57.51,294.16-130.32,702.64-130.32s742.28,59.88,745.05,122.99Z"/>
			  <path class="cls-45" d="M1839.9,3181.38c2.97,62.06-335.79,93.49-742.68,93.49s-700.06-26.45-700.06-86.35,293.17-127.57,700.06-127.57,739.65,58.25,742.68,120.43Z"/>
			  <path class="cls-49" d="M1836.93,3181.15c3.22,61.12-335,91.75-740.3,91.75s-697.48-26-697.48-84.78,292.18-124.83,697.48-124.83,737.02,56.62,740.3,117.87Z"/>
			  <path class="cls-6" d="M1833.96,3180.92c3.47,60.18-334.21,90-737.93,90s-694.91-25.56-694.91-83.22,291.19-122.08,694.91-122.08,734.4,54.98,737.93,115.3Z"/>
			  <path class="cls-15" d="M1830.99,3180.68c3.71,59.24-333.42,88.25-735.56,88.25s-692.33-25.12-692.33-81.66,290.2-119.34,692.33-119.34,731.77,53.35,735.56,112.74Z"/>
			  <path class="cls-36" d="M1828.02,3180.45c3.96,58.3-332.63,86.51-733.18,86.51s-689.76-24.67-689.76-80.09,289.2-116.59,689.76-116.59,729.14,51.72,733.18,110.18Z"/>
			  <path class="cls-10" d="M1825.05,3180.22c4.21,57.36-331.84,84.76-730.81,84.76s-687.18-24.23-687.18-78.53,288.21-113.85,687.18-113.85,726.52,50.09,730.81,107.62Z"/>
			  <path class="cls-32" d="M1822.08,3179.98c4.46,56.42-331.05,83.01-728.43,83.01s-684.6-23.79-684.6-76.97c0-55.86,287.22-111.1,684.6-111.1s723.89,48.46,728.43,105.06Z"/>
			  <path class="cls-5" d="M1819.11,3179.75c4.7,55.48-330.26,81.27-726.06,81.27s-682.03-23.35-682.03-75.4c0-55.62,286.23-108.36,682.03-108.36s721.26,46.83,726.06,102.5Z"/>
			  <path class="cls-46" d="M1816.14,3179.52c4.95,54.54-329.47,79.52-723.69,79.52s-679.45-22.9-679.45-73.84c0-55.39,285.24-105.61,679.45-105.61s718.64,45.2,723.69,99.93Z"/>
			  <path class="cls-41" d="M1813.17,3179.28c5.2,53.6-328.68,77.77-721.31,77.77s-676.87-22.46-676.87-72.28c0-55.15,284.25-102.87,676.87-102.87s716.01,43.57,721.31,97.37Z"/>
			  <path class="cls-52" d="M1810.2,3179.05c5.45,52.66-327.89,76.03-718.94,76.03s-674.3-22.02-674.3-70.71c0-54.91,283.26-100.12,674.3-100.12s713.38,41.93,718.94,94.81Z"/>
			  <path class="cls-40" d="M1807.23,3178.82c5.69,51.72-327.11,74.28-716.56,74.28s-671.72-21.58-671.72-69.15c0-54.68,282.26-97.38,671.72-97.38s710.76,40.3,716.56,92.25Z"/>
			  <path class="cls-28" d="M1804.26,3178.58c5.94,50.77-326.32,72.53-714.19,72.53s-669.15-21.13-669.15-67.59c0-54.44,281.27-94.63,669.15-94.63s708.13,38.67,714.19,89.69Z"/>
			  <path class="cls-27" d="M1801.29,3178.35c6.19,49.83-325.53,70.79-711.81,70.79s-666.57-20.69-666.57-66.02c0-54.2,280.28-91.89,666.57-91.89s705.5,37.04,711.81,87.12Z"/>
			  <path class="cls-20" d="M1798.32,3178.12c6.44,48.89-324.74,69.04-709.44,69.04s-663.99-20.25-663.99-64.46c0-53.97,279.29-89.14,663.99-89.14s702.87,35.41,709.44,84.56Z"/>
			  <path class="cls-23" d="M1795.35,3177.89c6.68,47.95-323.95,67.3-707.07,67.3s-661.42-19.8-661.42-62.9c0-53.73,278.3-86.4,661.42-86.4s700.25,33.78,707.07,82Z"/>
			  <path class="cls-7" d="M1792.38,3177.65c6.93,47.01-323.16,65.55-704.69,65.55s-658.84-19.36-658.84-61.33c0-53.49,277.31-83.65,658.84-83.65s697.62,32.15,704.69,79.44Z"/>
			  <path class="cls-38" d="M1789.41,3177.42c7.18,46.07-322.37,63.8-702.32,63.8s-656.27-18.92-656.27-59.77c0-53.26,276.32-80.91,656.27-80.91s694.99,30.52,702.32,76.88Z"/>
			  <path class="cls-43" d="M1786.44,3177.19c7.43,45.13-321.58,62.06-699.94,62.06s-653.69-18.48-653.69-58.21c0-53.02,275.32-78.16,653.69-78.16s692.37,28.89,699.94,74.32Z"/>
			  <path class="cls-25" d="M1783.47,3176.95c7.67,44.19-320.79,60.31-697.57,60.31s-651.11-18.03-651.11-56.64c0-52.78,274.33-75.42,651.11-75.42s689.74,27.25,697.57,71.75Z"/>
			  <path class="cls-37" d="M1780.5,3176.72c7.92,43.25-320,58.56-695.2,58.56s-648.54-17.59-648.54-55.08c0-52.55,273.34-72.67,648.54-72.67s687.11,25.62,695.2,69.19Z"/>
			  <path class="cls-48" d="M1777.53,3176.49c8.17,42.31-319.21,56.82-692.82,56.82s-645.96-17.15-645.96-53.52c0-52.31,272.35-69.93,645.96-69.93s684.49,23.99,692.82,66.63Z"/>
			  <path class="cls-26" d="M1774.56,3176.25c8.42,41.37-318.42,55.07-690.45,55.07s-643.39-16.71-643.39-51.95c0-52.08,271.36-67.18,643.39-67.18s681.86,22.36,690.45,64.07Z"/>
			  <path class="cls-21" d="M1771.59,3176.02c8.66,40.43-317.63,53.32-688.07,53.32s-640.81-16.26-640.81-50.39c0-51.84,270.37-64.44,640.81-64.44s679.23,20.73,688.07,61.51Z"/>
			  <path class="cls-8" d="M1768.62,3175.79c8.91,39.49-316.84,51.58-685.7,51.58s-638.23-15.82-638.23-48.83c0-51.6,269.38-61.69,638.23-61.69s676.61,19.1,685.7,58.95Z"/>
			  <path class="cls-54" d="M1765.65,3175.55c9.16,38.55-316.05,49.83-683.32,49.83s-635.66-15.38-635.66-47.26c0-51.37,268.38-58.95,635.66-58.95s673.98,17.47,683.32,56.38Z"/>
			  <path class="cls-55" d="M1762.68,3175.32c9.41,37.61-315.26,48.08-680.95,48.08s-633.08-14.93-633.08-45.7c0-51.13,267.39-56.2,633.08-56.2s671.35,15.84,680.95,53.82Z"/>
			  <path class="cls-9" d="M1759.71,3175.09c9.65,36.67-314.47,46.34-678.58,46.34s-630.51-14.49-630.51-44.14c0-50.89,266.4-53.46,630.51-53.46s668.73,14.2,678.58,51.26Z"/>
			  <path class="cls-24" d="M1756.74,3174.85c9.9,35.72-313.68,44.59-676.2,44.59s-627.93-14.05-627.93-42.57c0-50.66,265.41-50.71,627.93-50.71s666.1,12.57,676.2,48.7Z"/>
			  <path class="cls-44" d="M1753.77,3174.62c10.15,34.78-312.89,42.84-673.83,42.84s-625.35-13.61-625.35-41.01c0-50.42,264.42-47.97,625.35-47.97s663.47,10.94,673.83,46.14Z"/>
			  <path class="cls-50" d="M1750.8,3174.39c10.4,33.84-312.1,41.1-671.45,41.1s-622.78-13.16-622.78-39.45c0-50.18,263.43-45.22,622.78-45.22s660.85,9.31,671.45,43.58Z"/>
			  <path class="cls-18" d="M1747.83,3174.15c10.64,32.9-311.31,39.35-669.08,39.35s-620.2-12.72-620.2-37.88c0-49.95,262.44-42.48,620.2-42.48s658.22,7.68,669.08,41.01Z"/>
			  <path class="cls-14" d="M1744.86,3173.92c10.89,31.96-310.52,37.6-666.71,37.6s-617.63-12.28-617.63-36.32c0-49.71,261.44-39.73,617.63-39.73s655.59,6.05,666.71,38.45Z"/>
			  <path class="cls-30" d="M1741.89,3173.69c11.14,31.02-309.73,35.86-664.33,35.86s-615.05-11.84-615.05-34.76c0-49.47,260.45-36.99,615.05-36.99s652.97,4.42,664.33,35.89Z"/>
			  <path class="cls-53" d="M1738.92,3173.45c11.39,30.08-308.95,34.11-661.96,34.11s-612.47-11.39-612.47-33.19c0-49.24,259.46-34.24,612.47-34.24s650.34,2.79,661.96,33.33Z"/>
			  <path class="cls-17" d="M1735.95,3173.22c11.63,29.14-308.16,32.36-659.58,32.36s-609.9-10.95-609.9-31.63c0-49,258.47-31.5,609.9-31.5s647.71,1.15,659.58,30.77Z"/>
			  <path class="cls-35" d="M1732.98,3172.99c11.88,28.2-307.37,30.62-657.21,30.62s-607.32-10.51-607.32-30.07c0-48.77,257.48-28.75,607.32-28.75s645.09-.48,657.21,28.2Z"/>
			  <path class="cls-16" d="M1730.01,3172.76c12.13,27.26-306.58,28.87-654.83,28.87s-604.75-10.07-604.75-28.5c0-48.53,256.49-26.01,604.75-26.01s642.46-2.11,654.83,25.64Z"/>
			  <path class="cls-51" d="M1727.04,3172.52c12.38,26.32-305.79,27.12-652.46,27.12s-602.17-9.62-602.17-26.94c0-48.29,255.5-23.26,602.17-23.26s639.83-3.74,652.46,23.08Z"/>
			  <path class="cls-42" d="M1724.07,3172.29c12.62,25.38-305,25.38-650.09,25.38s-599.59-9.18-599.59-25.38c0-48.06,254.5-20.52,599.59-20.52s637.21-5.37,650.09,20.52Z"/>
			</g>
			<path class="cls-1050" d="M1696.83,3153.11c0,3.82-5.04,7.07-12.03,7.7-60.06,5.45-334.29,29.05-580.71,29.05-295.52,0-521.19-23-573.68-28.83-6.76-.75-11.6-3.94-11.6-7.66v-78.13s246.82,42.23,589.01,42.23c274.87,0,589.01-42.23,589.01-42.23v77.87Z"/>
			<path class="cls-584" d="M1696.83,3075.24c0-23.32-263.71-42.23-589.01-42.23s-589.01,18.91-589.01,42.23,263.71,42.23,589.01,42.23,589.01-18.91,589.01-42.23Z"/>
			<ellipse class="cls-687" cx="1102.31" cy="3074.13" rx="484.42" ry="32.04"/>
		  </g>
		</g>
	  </g>
	</g>
  </g>`;

const LOGO_VB = { minX: 0.0, minY: 0.0, width: 378.0, height: 172.0 };
const LOGO_DEFS = ``;
const LOGO_BODY = `<path d="M286.00,57.00 L280.00,57.00 L272.00,61.00 L270.00,59.00 L270.00,57.00 L259.00,57.00 L257.00,59.00 L257.00,62.00 L256.00,63.00 L256.00,67.00 L255.00,68.00 L255.00,72.00 L254.00,73.00 L254.00,77.00 L253.00,78.00 L253.00,83.00 L252.00,84.00 L252.00,88.00 L251.00,89.00 L251.00,91.00 L252.00,92.00 L263.00,92.00 L265.00,89.00 L265.00,85.00 L266.00,84.00 L266.00,80.00 L267.00,79.00 L268.00,73.00 L273.00,68.00 L275.00,67.00 L284.00,67.00 L285.00,66.00 L285.00,63.00 L286.00,62.00 Z M246.00,57.00 L235.00,57.00 L234.00,58.00 L233.00,66.00 L232.00,67.00 L232.00,71.00 L231.00,72.00 L231.00,76.00 L230.00,77.00 L230.00,81.00 L229.00,82.00 L229.00,86.00 L228.00,87.00 L228.00,91.00 L229.00,92.00 L240.00,92.00 L241.00,91.00 L241.00,89.00 L242.00,88.00 L242.00,84.00 L243.00,83.00 L243.00,79.00 L244.00,78.00 L245.00,68.00 L246.00,67.00 L246.00,63.00 L247.00,62.00 L247.00,58.00 Z M129.00,60.00 L129.00,64.00 L128.00,65.00 L128.00,69.00 L127.00,70.00 L127.00,74.00 L126.00,75.00 L126.00,85.00 L129.00,89.00 L133.00,91.00 L135.00,91.00 L136.00,92.00 L151.00,92.00 L152.00,91.00 L155.00,91.00 L156.00,90.00 L160.00,89.00 L165.00,84.00 L167.00,80.00 L168.00,72.00 L169.00,71.00 L169.00,67.00 L170.00,66.00 L170.00,62.00 L171.00,61.00 L171.00,58.00 L170.00,57.00 L159.00,57.00 L158.00,58.00 L154.00,78.00 L150.00,82.00 L148.00,83.00 L143.00,83.00 L139.00,78.00 L140.00,77.00 L140.00,72.00 L141.00,71.00 L141.00,67.00 L142.00,66.00 L143.00,58.00 L142.00,57.00 L131.00,57.00 Z M324.00,59.00 L320.00,57.00 L316.00,57.00 L315.00,56.00 L307.00,56.00 L306.00,57.00 L303.00,57.00 L302.00,58.00 L300.00,58.00 L296.00,60.00 L289.00,67.00 L287.00,71.00 L287.00,73.00 L286.00,74.00 L286.00,81.00 L287.00,82.00 L288.00,86.00 L293.00,90.00 L297.00,91.00 L298.00,92.00 L312.00,92.00 L313.00,91.00 L315.00,91.00 L316.00,90.00 L320.00,89.00 L325.00,85.00 L326.00,81.00 L315.00,81.00 L310.00,84.00 L303.00,84.00 L299.00,80.00 L299.00,78.00 L301.00,76.00 L328.00,76.00 L329.00,75.00 L329.00,66.00 L328.00,65.00 L328.00,63.00 Z M302.00,68.00 L306.00,64.00 L309.00,64.00 L310.00,63.00 L314.00,64.00 L317.00,67.00 L317.00,68.00 L315.00,70.00 L304.00,70.00 Z M180.00,64.00 L175.00,74.00 L175.00,81.00 L176.00,82.00 L176.00,84.00 L180.00,89.00 L184.00,91.00 L186.00,91.00 L187.00,92.00 L196.00,92.00 L202.00,89.00 L203.00,89.00 L205.00,91.00 L217.00,91.00 L218.00,89.00 L218.00,86.00 L219.00,85.00 L220.00,76.00 L221.00,75.00 L221.00,70.00 L222.00,69.00 L223.00,60.00 L224.00,59.00 L223.00,57.00 L212.00,57.00 L210.00,59.00 L208.00,59.00 L202.00,56.00 L195.00,56.00 L194.00,57.00 L188.00,58.00 Z M198.00,66.00 L202.00,66.00 L204.00,67.00 L208.00,71.00 L208.00,74.00 L207.00,75.00 L207.00,77.00 L204.00,80.00 L200.00,82.00 L194.00,82.00 L189.00,78.00 L189.00,74.00 L191.00,70.00 L193.00,68.00 L197.00,67.00 Z M116.00,59.00 L115.00,59.00 L113.00,57.00 L110.00,57.00 L109.00,56.00 L103.00,56.00 L102.00,57.00 L99.00,57.00 L94.00,60.00 L91.00,57.00 L80.00,57.00 L79.00,58.00 L79.00,61.00 L78.00,62.00 L78.00,66.00 L77.00,67.00 L77.00,71.00 L76.00,72.00 L76.00,76.00 L75.00,77.00 L75.00,81.00 L74.00,82.00 L73.00,91.00 L85.00,91.00 L86.00,90.00 L86.00,88.00 L87.00,87.00 L87.00,83.00 L88.00,82.00 L88.00,78.00 L89.00,77.00 L90.00,71.00 L94.00,66.00 L96.00,66.00 L97.00,65.00 L100.00,65.00 L104.00,68.00 L104.00,74.00 L103.00,75.00 L103.00,79.00 L102.00,80.00 L102.00,84.00 L101.00,85.00 L101.00,91.00 L113.00,91.00 L114.00,90.00 L115.00,82.00 L116.00,81.00 L116.00,77.00 L117.00,76.00 L117.00,72.00 L118.00,71.00 L118.00,63.00 Z M235.00,37.00 L244.00,39.00 L246.00,40.00 L250.00,44.00 L250.00,47.00 L246.00,51.00 L252.00,50.00 L256.00,47.00 L256.00,42.00 L249.00,38.00 L246.00,38.00 L245.00,37.00 Z M11.00,30.00 L7.00,39.00 L9.00,56.00 L18.00,71.00 L32.00,85.00 L50.00,98.00 L82.00,115.00 L107.00,125.00 L139.00,134.00 L91.00,115.00 L44.00,87.00 L27.00,70.00 L21.00,60.00 L18.00,50.00 L21.00,35.00 L29.00,27.00 L43.00,21.00 L62.00,18.00 L82.00,18.00 L133.00,27.00 L178.00,44.00 L152.00,31.00 L126.00,22.00 L79.00,13.00 L39.00,15.00 L22.00,21.00 Z" fill="#FFFFFF" fill-rule="evenodd" />`;
