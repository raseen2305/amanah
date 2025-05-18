import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Combined product data from both categories
const allProducts = [
  // Medical products
  {
    id: "med-1",
    title: "CENTRAL VENOUS CATHETER KIT",
    description: "Central Venous Catheter made of specially formulated and biocompatible Polyurethane material for reliable vascular access.",
    detailedDescription: "This premium Central Venous Catheter Kit features a catheter made of specially formulated biocompatible Polyurethane that provides excellent strength during insertion while softening at body temperature to conform to body tissues, significantly reducing the risk of vascular trauma. The kit includes a specially designed soft and beveled tip for smooth, easy insertion and a kink-resistant guidewire with soft, flexible J-tip that prevents vessel perforation while providing excellent torque for firm insertion. The catheter material is sufficiently radio-opaque with clear, definite markings to facilitate correct placement of the catheter tip under imaging guidance. The innovative 2-piece design of the guidewire advancer enhances control during placement procedures, making this kit ideal for critical care, emergency medicine, and long-term vascular access needs.",
    features: [
      "Central Venous Catheter made of specially formulated and biocompatible Polyurethane material provides strength during insertion and also softens at body temperature to conform to the body tissues and reduces the risk and vascular trauma",
      "Specially Designed Soft & beveled tip for smooth & easy insertion of catheter",
      "Soft Flexible J-Tip Guide wire prevents the vessel perforation and also provides good torque to ensure film insertion",
      "Sufficiently radio-Opaque material of catheter with clear, definite marking facilitates correct placement of catheter tip",
      "Kink resistant Guidewire with soft & flexible J-tip offers better torque which helps in easy insertion & prevents vessel perforation",
      "Wires are Double Distal",
      "2 piece design of guidewire advancer"
    ],
    specifications: [
      "Complete Set of CVC Kit Consist :",
      "Indwelling catheter",
      "Y-Introducer needle with check valve",
      "J-Tip guide wire",
      "Vessel dilator",
      "Luer lock syrings",
      "Scalpel",
      "Catheter holder",
      "Catheter holder clamp",
      "Injection cap",
      "Extension Line Clamp",
      "Guiding Syringe / LOR Syringe (Optional)"
    ],
    image: "/assests/medical/central venous/1.jpeg",
    category: "medical"
  },
  {
    id: "med-2",
    title: "HEMODIALYSIS CATHETER KIT",
    description: "Polyurethane hemodialysis catheter with geometrically designed conical tip for temporary vascular access.",
    detailedDescription: "The Hemodialysis Catheter Kit provides essential temporary vascular access for hemodialysis patients when a permanent access is not yet available or when alternative dialysis therapy is being substituted. Crafted from high-quality polyurethane material, the catheter features a soft, geometrically designed conical tip that ensures easy insertion while preventing catheter-related trauma. Available in single, double, or multiple lumen configurations, the multiple lumen catheter contains two large-bore lumens that connect directly to the dialysis machine, forming a complete circuit for efficient removal and return of the patient's blood during treatment. Enhanced visibility and safety are provided by clear silicon lumen extensions, allowing healthcare professionals to monitor flow and detect any issues immediately.",
    features: [
      "Polyurethane material",
      "Soft, geometrically designed conical tip to ensure easy insertion and prevent catheter related trauma",
      "Hemodialysis catheter are single/double/multiple lumen catheter that provides temporary vascular access for hemodialysis until a permanent acress is available or until another type of dialysis therapy is substituted",
      "He multiple lumen catheter contains two large bore lumens that are connected to the dialysis machine to form a complete circuit for the removal and return of the patient's blood during treatment",
      "Clear silicon lumen extensions for enhanced visibility and safety"
    ],
    specifications: [
      "Sterile / Disposable / Individually Tray Packed"
    ],
    image: "/assests/medical/central venous/2.jpeg",
    category: "medical"
  },
  {
    id: "med-3",
    title: "BLOOD TUBING SET",
    description: "Medical grade PVC tubing with built-in Heparin and Saline line for extracorporeal blood circulation during dialysis.",
    detailedDescription: "The Blood Tubing Set is specifically designed for creating an extracorporeal blood circuit during hemodialysis procedures. Manufactured from medical-grade PVC tubing for enhanced biocompatibility, this set features the advantage of built-in Heparin and Saline lines for convenient administration during treatment. The set is engineered with low priming volume to minimize blood volume outside the body and comes with a large finger guard injection site for safe medication delivery. Available with various diameter drip chambers to accommodate different clinical requirements, the set includes secure clamps to guarantee blocking performance during the dialysis procedure. These sets can be customized according to clinic protocols and are compatible with different dialysis machine models to ensure versatility across healthcare settings.",
    features: [
      "Medical grade PVC tubing for higher bio-compatibility",
      "Advantage of built-in Heparin and Saline line",
      "Extra corporeal blood circuit tubing set, used during dialysis",
      "Low Priming Volume",
      "Easy of use",
      "Customised blood tubing set as per clinic protocol and for different dialysis machines are available",
      "Injection Site : Large finger guard",
      "Drip Chamber : Available Various diameter sizes",
      "Clamp : Clamps to secure blocking performance"
    ],
    specifications: [
      "Sterile /Disposable/ Individually Packed"
    ],
    image: "/assests/medical/central venous/3.jpeg",
    category: "medical"
  },
  {
    id: "med-4",
    title: "PERITONEAL TRANSFUSION DIALYSIS KIT",
    description: "Peritoneal dialysis kit with polypropylene catheter and stainless steel trocar for patients of all age groups.",
    detailedDescription: "The Peritoneal Transfusion Dialysis Kit is designed to perform peritoneal dialysis effectively across patients of all age groups. The kit features a perforated open-end catheter manufactured from medical-grade polypropylene for biocompatibility and durability. A precision-engineered stainless steel trocar is included to facilitate smooth penetration into the peritoneal cavity, while a scalpel blade provides for the initial incision. To minimize trauma during insertion, the trocar and catheter tip are perfectly matched in design and dimensions. For additional medication delivery, the kit includes a latex flash bulb positioned on the junction unit. Available in both adult and child sizes, this comprehensive kit enables healthcare providers to deliver safe and effective peritoneal dialysis treatments with minimal patient discomfort.",
    features: [
      "Suitable for performing peritoneal dialysis in patients of all age groups",
      "Perforated open-end catheter manufactured from polypropylene",
      "Stainless steel trocar is provided to facilitate smooth penetration",
      "Scalpel blade is provided for the incision",
      "The trocar and the tip of the catheter are perfectly matched to facilitate trauma free insertion",
      "Latex flash bulb is provided on the junction unit for additional medication"
    ],
    specifications: [
      "Sizes : Adult, Child",
      "Sterile /Disposable/ Individually Packed"
    ],
    image: "/assests/medical/central venous/4.jpeg",
    category: "medical"
  },
  {
    id: "med-5",
    title: "PERITONEAL TRANSFUSION DIALYSIS SET",
    description: "Y-shaped transfusion set with smooth kink-resistant tubing and built-in chamber for administering dialysis solution.",
    detailedDescription: "The Peritoneal Transfusion Dialysis Set provides an efficient delivery system for peritoneal dialysis solutions. Featuring super smooth, kink-resistant tubing, this set ensures consistent and uniform flow rates throughout the treatment process. The clear, transparent, and flexible built-in chamber comes equipped with a sharp, easy-piercing spike for secure connection to solution containers. Specially designed in a Y-shape configuration, this transfusion set allows for the efficient administration of dialysis solution with minimal risk of contamination. Two upper control clamps facilitate convenient changing of solution bottles during treatment, while the lower control clamps assist in regulating the input and drainage of solutions for optimal patient comfort and treatment efficacy. This design maximizes treatment efficiency while minimizing the risk of infection and ensuring patient comfort.",
    features: [
      "Super smooth kinl‹ resistance tubing ensures uniform flow rate",
      "Clear Transparent & Flexible built in Chamber with sharp and easy piercing Spike",
      "Special designed for 'Y' shaped transfusion set for administrating dialysis solution",
      "Provided with two upper control clamp to facilitate the attractive change of solution bottles",
      "Top lower control clamps help for easy input and drainage of solutions"
    ],
    specifications: [
      "Sterile /Disposable/ Individually Packed"
    ],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-6",
    title: "A.V. FISTULA NEEDLE",
    description: "Siliconized ultra-thin walled needle with back eye design to minimize interruption of blood flow during dialysis.",
    detailedDescription: "The A.V. Fistula Needle is specifically engineered to connect blood lines to blood vessels when performing dialysis through an internal fistula. A key design feature is the back-eye needle, which significantly minimizes interruption of blood flow during the dialysis procedure. The needle is siliconized and features an ultra-thin wall with a sharp bevel to reduce trauma to the patient during insertion and throughout treatment. For secure positioning and comfort, the needle includes flexible butterfly wings that allow for proper fixation to the skin. Color-coded wings provide immediate size identification according to industry standards, enhancing safety protocols and reducing the risk of errors. Available in convenient twin packs, these needles combine patient comfort with clinical efficiency to optimize the dialysis experience while maintaining the integrity of the fistula access.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate",
      "To connect blood lines of the blood vessels through needles when dialysis is carried out through an internal fistula",
      "Back eye needle to minimize interruption of blood flow",
      "Siliconised ultra thin walled & sharp beveled needle to minimize trauma to the patient",
      "Flexible butterfly wing for proper fixation",
      "Color coded wing for easy identification of sizes as per standard",
      "Also available in Twin pack"
    ],
    specifications: [],
    image: "/assests/medical/central venous/6.jpeg",
    category: "medical"
  },
  {
    id: "med-7",
    title: "INFUSION SET",
    description: "Super smooth kink resistance tubing ensures uniform flow rate with clear, transparent & flexible drip chamber.",
    detailedDescription: "This premium Infusion Set features super smooth kink-resistant tubing that ensures consistent and uniform flow rate for reliable fluid delivery. The clear, transparent and flexible drip chamber with sharp and easy piercing spike allows for visual confirmation of flow and simple insertion. A smooth roller clamp facilitates easy, safe control and precise adjustment of fluid rates, preventing accidental changes in flow. Available in multiple configurations to meet various clinical needs, this sterile and disposable infusion set is individually packed to maintain aseptic conditions during administration of intravenous fluids, medications, and nutritional supplements.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Clear, Transparent & Flexible Drip.",
      "Chamber with sharp and easy piercing Spike.",
      "Smooth Roller Clamp Facilitates easy, safe control and adjustment of fluid rates.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [
      "With or Without Airvent.",
      "With or Without Needle.",
      "With or Without \"Y\" Connection.",
      "With or Without Luer Lock.",
      "With or Without Dial type Flow Regulator.",
      "Latex or Latex Free.",
      "PVC or PVC Free.",
      "Available with 1.2 or 0.2 Micron In-Line Filter.",
      "Available with Needle-Free Connectors.",
      "Available with DEHP Free Material.",
      "Available with Check - Valve.",
      "Tube Length : 150cms, 180cms, 200cms.",
      "Size : Adult, Child."
    ],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-8",
    title: "BLOOD DONOR SETS",
    description: "Super smooth kink resistance tubing with 16G extra sharp needle for smooth and effortless vein puncture.",
    detailedDescription: "The Blood Donor Sets are designed for comfortable and efficient blood collection procedures. Featuring super smooth kink-resistant tubing that ensures uniform flow rate throughout the donation process, these sets minimize the time required for collection while maximizing donor comfort. The smooth roller clamp facilitates easy, safe control and precise adjustment of blood flow rates. Each set includes a G16 extra sharp needle engineered for smooth and effortless vein puncture, reducing discomfort during insertion. The advanced uni-body design and ideal sharpness provide less pain and more comfort for donors. Sterile, disposable, and individually packed to maintain strict hygiene standards for blood collection procedures.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Smooth Roller Clamp Facilitates easy, safe control and adjustment of fluid rates.",
      "Needle size G: 16. extra sharp needle for smooth and effortless vein puncture.",
      "Sterile / Disposable / Individually Packed.",
      "Ideal sharpness for less pain and more comfort",
      "Advanced Uni-Body design."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-9",
    title: "INSULIN SYRINGE",
    description: "Advanced uni-body design with ideal sharpness for less pain and more comfort during insulin administration.",
    detailedDescription: "The Insulin Syringe is specifically designed for the precise administration of insulin with maximum comfort for patients. The advanced uni-body design ensures structural integrity while reducing the risk of component separation. Its low dead space design guarantees dosage accuracy and minimizes wastage of insulin, which is particularly important for this medication. The clear transparent barrel with bold markings facilitates proper drug delivery and dosage visualization. Ultra-thin wall needles permit rapid and efficient delivery of insulin with minimal discomfort. Each syringe is sterile, disposable, and individually packed to maintain aseptic conditions and ensure patient safety during daily insulin administration.",
    features: [
      "Ideal sharpness for less pain and more comfort",
      "Advanced Uni-Body design.",
      "Low dead space design ensures dosage accuracy and minimum wastage of drugs.",
      "Clear transparent barrel and bold marking facilitates proper drug delivery.",
      "Needles have ultra thin wall permitting rapid and efficient delivery. Sterile / Disposable / Individually Packed"
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-10",
    title: "SAFETY IV CANNULA",
    description: "Passive fully automatic protection system with needle sharp tip enclosed in a plastic cage after removal.",
    detailedDescription: "The Safety IV Cannula incorporates advanced safety features to protect healthcare professionals from needlestick injuries while maintaining ease of use. The passive fully automatic protection system automatically encloses the needle sharp tip inside a specially designed plastic cage immediately after withdrawal, effectively preventing accidental needlestick injuries. This innovative safety cage is engineered to permanently secure the sharp tip, making it impossible for the needle to escape once enclosed. Despite these enhanced safety features, the cannula maintains dimensions and insertion technique similar to conventional IV cannulas, requiring no additional training for healthcare professionals. The device combines safety with familiar clinical functionality in a sterile, disposable, and individually packed format.",
    features: [
      "Passive fully automatic protection.",
      "Needle sharp tip is enclosed inside a plastic cage after pulling out.",
      "The plastic cage is designed as such that once needle sharp tip in fully enclosed inside it cant not come out of the cage hence prevent.",
      "Healthcare professionals from the risk of accident due to needle stick injury of injection.",
      "The size of Safety I.V. Cannula is very similar to conventional I.V. Cannula and the technique of cannulation is similar to cannulation technic of conventional I.V. Cannula.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-11",
    title: "SCALP VEIN SET",
    description: "Butterfly set for long term infusion with short beveled siliconized needle for atraumatic cannulation.",
    detailedDescription: "The Scalp Vein Set is designed for reliable, long-term venous access with enhanced patient comfort during extended infusion therapies. The innovative butterfly-shaped wings facilitate easy handling and secure attachment to the skin, while the short beveled siliconized needle ensures atraumatic cannulation with minimal tissue damage. The thin wall needle design provides superior flow rates per gauge by maximizing the available circumference for fluid flow. Color-coded butterflies allow for instant identification of needle size, improving workflow efficiency. The set features a flexible female luer fitting at the proximal end and connects to a soft, non-toxic, medical-grade tube that resists kinking or coiling, ensuring consistent flow rates. Available in DEHP-free material for enhanced biocompatibility, each set is sterile, disposable, and individually packed.",
    features: [
      "Butterfly set for long term infusion.",
      "Scalp vein set is designed to provide rapid venous access with greater patient comfort during infusion.",
      "Short beveled siliconized needle facilitates atraumatic cannulation.",
      "Thin wall needle provides better flow rate per gauge, as in the same cannula more circumference is available for better flow of fluid.",
      "Butterfly shaped wings facilitate easy handling and attachment with the skin.",
      "The proximal end of the set is provided with flexible female luer fitting.",
      "Butterflies are color coded for instant identification of needle size.",
      "Butterfly is connected to soft non toxic, non-irritant, medical grade tube, which does not kink or coil set.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-12",
    title: "EXTENSION TUBE",
    description: "Super smooth kink resistance tubing with male luer lock connector at one end and female luer lock connector at other end.",
    detailedDescription: "The Extension Tube provides a reliable connection between IV catheters and infusion devices while reducing direct manipulation of the primary access site. Made from super smooth kink-resistant tubing, it ensures consistent and uniform flow rates for accurate fluid delivery. The tube features male luer lock connector at one end and female luer lock connector at the other end, ensuring secure connections and preventing accidental disconnection during patient movement. Available in DEHP-free material for enhanced biocompatibility and patient safety, the extension tube can be customized with various options to meet different clinical requirements. Each extension tube is sterile, disposable, and individually packed to maintain aseptic conditions throughout its use in various infusion and monitoring applications.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Male luer lock connector at one end and female luer lock connector at other end.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed"
    ],
    specifications: [
      "With or Without \"Y\" connection.",
      "With or Without Clamp.",
      "Customized Inner & Outer Diameter."
    ],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-13",
    title: "THREE WAY STOPCOCK",
    description: "Fully transparent polycarbonate body for visualization of flow with 6% luer taper as per International Standard.",
    detailedDescription: "The Three Way Stopcock offers versatile fluid path management for simultaneous or alternate infusion of multiple medications or fluids. Constructed with a fully transparent polycarbonate body, it allows clear visualization of fluid flow, helping clinicians monitor infusions and detect air bubbles or blockages. The device features 6% luer taper connections compliant with International Standards, ensuring compatible and leak-free connections with other medical devices. Prominent arrow indication marks clearly show the direction of flow, reducing the risk of administration errors. The rotating dead space is designed for accurate drug administration with minimal waste, while continuous flow channels maintain consistent delivery rates. Hydrostatically pressure-tested up to 60 PSI, the stopcock provides reliable performance even in high-pressure applications, with 360-degree rotation capability for flexible positioning.",
    features: [
      "Fully transparent polycarbonate body for visualization of flow.",
      "6% luer taper as per International Standard.",
      "Arrow indication marks for indicating direction of flow.",
      "Also available with lipid resistant feature.",
      "Rotating dead space for accurate drug administration.",
      "Continuous flow channels.",
      "Tight covers for all ends.",
      "Pressure tested hydrostatically for up to 60 PSI.",
      "Rotation allowed for 360 degree.",
      "Red & blue pegs for arterial and venous line identification, available on request.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-14",
    title: "PRESSURE MONITORING LINE",
    description: "Used for high pressure monitoring and connection between syringe infusion pump and patient.",
    detailedDescription: "The Pressure Monitoring Line is specifically designed for accurate high-pressure monitoring applications and providing secure connections between syringe infusion pumps and patients. This specialized line ensures reliable pressure readings in critical care situations while maintaining medication delivery accuracy. The universal male luer lock and female luer lock at either end guarantee secure fits with all standard equipment, preventing accidental disconnections during patient monitoring. Available in DEHP-free material for enhanced biocompatibility, this pressure monitoring line is essential for applications requiring precise pressure measurements and controlled fluid delivery. Each line is sterile, disposable, and individually packed to maintain aseptic conditions throughout use in intensive care, anesthesia, and other specialized clinical settings where pressure monitoring is critical.",
    features: [
      "Used for high pressure monitoring, and connection between syringe infusion pump and patient.",
      "Provided with universal male luer lock and female luer lock at either end to ensure securely fit all standard equipment.",
      "Available with DEHP Free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-15",
    title: "INJECTION STOPPER",
    description: "Thread stopper with injection site used to stop leakage when connected to infusion devices.",
    detailedDescription: "The Injection Stopper is a specialized thread stopper with an integrated injection site designed to prevent fluid leakage when connected to infusion devices while simultaneously allowing for additional medication administration during ongoing infusions. Its universal 6% taper design, compliant with ISO 594 standards, ensures compatibility with all standard medical devices across healthcare settings. The latex-free plug provides leakage-free fitting, enabling effective flushing of catheters and efficient drawing of blood samples without disconnecting the primary line. Engineered with minimal dead space, the injection stopper reduces drug wastage and ensures accurate delivery of precise medication doses. Each stopper is sterile, disposable, and individually packed to maintain aseptic conditions throughout clinical use.",
    features: [
      "Injection Stopper is the thread stopper with injection site used to stop leakage when connected to infusion devices and also used for extra medication along with infusion at the same time.",
      "Universal 6% Taper as per ISO 594, compatible with any standard product.",
      "Latex Free plug with leakage free fitting for effective flushing of catheter or drawing of blood samples.",
      "Minimal dead space.",
      "Sterile / Disposable / Individually packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-16",
    title: "BLOOD TRANSFUSION SETS",
    description: "For transfusion of blood or blood components with 200 micron blood filter and uniform flow rate tubing.",
    detailedDescription: "The Blood Transfusion Sets are specifically designed for the safe and efficient administration of blood and blood components in clinical settings. They feature super smooth kink-resistant tubing that ensures uniform flow rates, critical for controlled blood administration. The clear, transparent, and flexible drip chamber with a sharp and easy piercing spike allows for visual monitoring of transfusion progress and simple insertion into blood bags. Integrated with a 200-micron blood filter, these sets effectively remove potentially harmful particles, microaggregates, and clots from blood components before they enter the patient's circulation. The smooth roller clamp provides easy, safe control and precise adjustment of transfusion rates, allowing healthcare professionals to administer blood products according to specific clinical protocols. Available in various configurations to meet different clinical requirements.",
    features: [
      "For transfusion of blood or blood components.",
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Clear, Transparent & Flexible Drip Chamber with sharp and easy piercing Spike.",
      "With 200 micron blood filter.",
      "Smooth Roller Clamp Facilitates easy, safe control and adjustment of fluid rates.Sterile / Disposable / Individually Packed."
    ],
    specifications: [
      "Double Chamber or Single Chamber.",
      "With or Without Airvent.",
      "With or Without Needle.",
      "With or Without \"Y\" Connection.",
      "With or Without Luer Lock.",
      "Available with DEHP Free Material.",
      "Tube Length : 150cms, 180cms, 200cms.",
      "Size : Adult, Child."
    ],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-17",
    title: "DISPOSABLE SYRINGE",
    description: "Transparent barrel with precise measurements and TPE gasket for smooth plunger movement.",
    detailedDescription: "The Disposable Syringe offers reliable performance for accurate medication delivery across various clinical applications. The sufficiently transparent barrel allows for easy measurement of contained volume with clear visibility of medication, air bubbles, and dosage marks. Featuring a friction-free design with a Thermoplastic Elastomer (TPE) gasket that ensures smooth movement of the plunger, these syringes provide consistent and controlled drug delivery. Manufactured using high-accuracy molds, they maintain precise dimensional tolerances for reliable performance. The needles, produced using imported cannula with precise tip sharpness, offer good bonding strength with the hub to prevent separation during use. Ultra-thin wall design permits rapid and efficient drug delivery while minimizing patient discomfort. Each syringe is sterile, disposable, and individually packed to maintain aseptic conditions throughout clinical procedures.",
    features: [
      "Sufficiently transparent barrel allows easy measurement of the volume contained in the disposable syringe friction free.",
      "Thermoplastic Elastomer (TPE) is used to manufacture the Gasket for smooth movement of plunger.",
      "In superior quality by high accurate moulds.",
      "Needles are manufactured by using imported Cannula having precise tip sharpness and good bonding strength with the hub.",
      "Needles have ultra thin wall permitting rapid and efficient drug delivery.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-18",
    title: "IV CANNULA",
    description: "Flash back chamber for quick visualization of venous return with specially designed wings for easy gripping.",
    detailedDescription: "The IV Cannula provides reliable and comfortable vascular access for intravenous therapy administration. Its innovative flash back chamber allows for quick visualization of venous return, confirming successful vein entry and reducing the risk of infiltration. The specially designed wings offer easy gripping and safe clamping, facilitating secure placement and fixation to the patient's skin. Protected by a needle cover to prevent accidental damage to the needle and catheter, the device features color-coded body/port caps in accordance with ISO standards for quick size identification. The 6% luer taper, compliant with international standards, ensures compatible connections with infusion sets and other devices. Made with premium Japanese stainless steel (AISI 304) and featuring a triple-point needle design, the IV cannula enables painless insertion while the thin-walled, radio-opaque Teflon catheter offers excellent visibility under imaging and optimal flow rates.",
    features: [
      "The flash back chamber allows quick visualization of venous return.",
      "Wings specially designed for easy gripping and safe clamping.",
      "Needle cover to prevent accidental damage to needle & catheter.",
      "Color coded body/port cap as per ISO Standard.",
      "6% luer taper as per International standard.",
      "Japanese stainless steel (AISI 304) needle with diameter and length adhering to all ISO standards.",
      "Triple point Needle for painless insertion.",
      "Thin walled, Radio-opaque stripped / transparent Teflon catheter, as per USP standard Class VI.",
      "Customized Automated Tipping Technology for lower penetration forces.",
      "Optimum trim distance for pain free penetration. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-19",
    title: "IV CANNULA FIXATOR",
    description: "Breathable and waterproof thin polyurethane film for fixation of IV Cannula and Catheters.",
    detailedDescription: "The IV Cannula Fixator provides secure and comfortable stabilization of intravenous cannulas and catheters to reduce movement-related complications and extend dwell times. Available in two variants - transparent and non-woven - this fixator is constructed from thin polyurethane film that combines breathability and waterproof properties to maintain skin integrity while protecting the insertion site from external contaminants. The innovative design features reinforced notches specifically engineered to reduce mechanical stress from heavy catheters, preventing dislodgement during patient movement. The ultra-thin film construction ensures easy fixation of devices with contoured surfaces, conforming seamlessly to patient anatomy for enhanced comfort and security. Each fixator is sterile, disposable, and individually packed to maintain aseptic conditions during application and throughout the duration of IV therapy.",
    features: [
      "Used for Fixation of I.V Cannula / Catheter.",
      "Made from Thin Polyurethane film and available in two variants -Transparent and Non-woven.",
      "Breathable and water proof, with reinforced notches that reduce mechanical stress from heavy catheters.",
      "Thin film ensures easy fixation of devices with contoured surfaces.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-20",
    title: "MEASURED VOLUME BURETTE SET",
    description: "Flexible, transparent measured volume chamber with auto shut off floating valve to prevent air trapping.",
    detailedDescription: "The Measured Volume Burette Set provides precise control and accurate measurement for critical fluid administration, particularly beneficial for pediatric patients and those requiring exact fluid volumes. Featuring super smooth kink-resistant tubing, the set ensures uniform flow rates for consistent fluid delivery. The flexible, transparent, and soft cylindrical measured volume chamber with sharp and easy piercing spike allows for visual confirmation of fluid volumes and simple insertion into solution containers. The innovative floating auto shut-off valve serves dual purposes - acting as a floating indicator of fluid levels while automatically shutting off the drain path when the chamber empties, effectively preventing air from entering the fluid line and reaching the patient. A separate plug facilitates extra medication administration and continuous changeover without interrupting the primary infusion. Available in various configurations and sizes to accommodate different clinical requirements.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Flexible, Transparent & soft cylindrical measured volume chamber with sharp and easy piercing Spike.",
      "Smooth Roller Clamp Facilitates easy, safe control and adjustment of fluid rates.",
      "Specially designed floating auto shut off valve acts as floating indicator and automatically shut off the drain path when the chamber gets empty to prevent air trapping in the fluid line.",
      "Separate plug for extra medication and continuous change over.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [
      "With or Without Airvent.",
      "With or Without Needle.",
      "With or Without \"Y\" Connection.",
      "With or Without Luer Lock.",
      "Latex or Latex Free.",
      "Available with DEHP Free Material.",
      "Tube Length : 150cms, 180cms, 200cms.",
      "Size : 150ml., 110ml."
    ],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-21",
    title: "IV FLOW REGULATER",
    description: "Regulates IV fluid flow from 5ml/hr - 250ml/hr manually with built-in Y-connector injection site.",
    detailedDescription: "The IV Flow Regulator Extension Set provides precise control over intravenous fluid administration rates, enhancing patient safety during infusion therapies. Specifically designed to regulate the flow of IV fluid from an infusion set into an IV catheter, this device allows healthcare professionals to manually control flow rates from 5ml/hr to 250ml/hr with exceptional accuracy. The super smooth kink-resistant tubing ensures consistent fluid delivery without interruption, while the built-in Y-connector injection site enables additional medication administration without disconnecting the primary line. Featuring a two-hand operation mechanism, the regulator eliminates the risk of accidental tampering that could alter flow rates. The male and female luer lock connectors ensure secure and compatible connections with various infusion devices. Available in DEHP-free material for enhanced biocompatibility, each regulator set is sterile, disposable, and individually packed to maintain aseptic conditions throughout clinical use.",
    features: [
      "I.V. Fluid Flow Regulator Extension Set to regulate the flow of IV fluid from an infusion set into an IV catheter.",
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Designed to control flow rate from 5ml / hr - 250 ml / hr manually.",
      "Built-on \"Y\" Connector Injection site for extra Medication",
      "Two hand operation eliminates the danger of accidental tampering.",
      "Provision of male and female luer lock makes it compatible with other devices.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-22",
    title: "THREE WAY STOPCOCK WITH EXTENSION TUBE",
    description: "Crystal clear transparent channel with arrow indication on handle to indicate direction of flow.",
    detailedDescription: "The Three Way Stopcock with Extension Tube combines the versatility of a three-way stopcock with the convenience of an integrated extension line, reducing the need for multiple connections in IV therapy setups. The super smooth kink-resistant tubing ensures uniform flow rates for consistent medication delivery, while the extension line with three-way stopcock at one end and male luer lock connector at the other end provides flexible positioning options. The crystal clear transparent channel allows for visual confirmation of fluid flow and detection of air bubbles or blockages. Designed with minimal priming volume requirements for accurate drug administration, the device features prominent arrow indications on the handle to clearly indicate the direction of flow, reducing the risk of medication delivery errors. The connections meet 6% taper requirements to ensure leakage-free fitment with other medical devices. Available in DEHP-free material for enhanced biocompatibility.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flow rate.",
      "Extension line with three way stop cock at one end & male luer lock connector at other end.",
      "Crystal clear transparent channel.",
      "Minimum priming volume required for accurate drug administration.",
      "Arrow indication on the handle to indicate the direction of flow.",
      "Connection meets 6% taper requirement to ensure leakage free fitment.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-23",
    title: "LUER LOCK",
    description: "White color thread stopper to stop leakage when connected to infusion devices.",
    detailedDescription: "The Luer Lock is an essential component in intravenous therapy systems, designed specifically to prevent fluid leakage at connection points between infusion devices and administration sets. This white-colored thread stopper provides a secure, leak-proof seal when properly tightened, maintaining the integrity of the fluid pathway during medication administration and infusion therapies. The standardized design ensures compatibility with various infusion devices across healthcare settings, creating reliable connections that resist disconnection during patient movement. Each luer lock is sterile, disposable, and individually packed to maintain aseptic conditions throughout clinical use, preventing contamination of the infusion line and reducing the risk of catheter-related bloodstream infections. This simple yet critical component helps maintain pressure within infusion systems and prevents exposure of healthcare workers to potentially hazardous medications.",
    features: [
      "Luer Lock is the thread stopper used to stop leakage when connected to infusion devices.",
      "White color luer lock.",
      "Sterile / Disposable / Individually packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-24",
    title: "CVP MANOMETER",
    description: "Specially designed to measure and monitor continuous or intermittent central venous pressure with graduated manometer tube.",
    detailedDescription: "The CVP Manometer is a specialized device designed for the accurate measurement and monitoring of central venous pressure in critical care settings. The manometer tube features precise graduations marked from -4 cm to +34 cm and is attached to a three-way stopcock for controlled operation during measurements. A 120 cm long extension tube fitted with female luer lock on one end and male luer lock on the other end ensures secure connection to the central venous catheter while providing flexibility in positioning. For enhanced record-keeping, the device includes a sliding indicator that allows healthcare professionals to mark and record readings for comparison over time. Molded clamps with rubber strings facilitate easy fixation to IV stands, maintaining consistent positioning for accurate measurements. The integrated Y injection site or latex/latex-free rubber flash bulb provides a convenient port for extra medication administration without disturbing the measurement setup.",
    features: [
      "Specially designed to measure and monitor continuous or intermittent, central venous pressure.",
      "Manometer tube with graduations marked from - 4 cm to +34 cm and attached to threeway stopcock.",
      "120 cm long extension tube is fitted with female luer lock on one end and male luer lock on the other end for safe connection to Central Venous Catheter.",
      "Sliding indicator is provided to record reading.",
      "Moulded clamps with rubber strings are provided for fixation to IV stand.",
      "Y Injection site/Latex OR Latex free rubber flash bulb is provided for extra medication.",
      "Sterile / Disposable / Individually packed"
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
{
id: "med-25",
title: "URINE COLLECTION BAG",
description: "Specialized urine drainage system designed for both short and long-term use with smooth kink-resistant tubing, non-return valve, and graduated markings for accurate volume measurement.",
detailedDescription: "The Urine Collection Bag provides reliable drainage for patients requiring urinary catheterization. The system features super smooth kink-resistant tubing with a universal tapered connector for secure attachment to catheters. An efficient non-return valve prevents contamination by stopping backflow, while the clear, transparent construction allows for easy visual monitoring of urine output. The bag includes graduated markings in milliliters for precise measurement of collected urine. Specially designed hooks or hangers enable convenient carrying, handling, and positioning of the bag in an upright position, improving patient mobility and comfort while maintaining proper drainage function.",
features: [
"Urine Drainage system for short as well as long term Use.",
"Super smooth kind resistance tube provided with universal tapered connector.",
"Specialty designed hook or hanger facilities for carrying, handling and holding the tube in upright position.",
"Efficient non return valve prevents the back flow.",
"Drainage Outlet System.",
"Bag graduated in ml to indicate the quantity of urine collected.",
"Transparent sheeting allows visual inspection."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-26",
title: "PAEDIATRIC URINE COLLECTION BAG",
description: "Specifically designed urine collection system for pediatric patients, featuring hygienic adhesive for secure attachment with minimal risk of allergic reactions or injury.",
detailedDescription: "The Paediatric Urine Collection Bag is a specialized medical device created for short-term urine collection in infants and young children. The bag features hypoallergenic adhesive that provides secure fixation while minimizing the risk of skin irritation or allergic reactions. Available in 100ml and 200ml capacities to accommodate varying collection needs, the bag is designed with pediatric anatomy in mind for comfortable wear. The transparent material allows for immediate visual assessment of urine characteristics and volume. Each bag can be supplied either sterile or non-sterile according to clinical requirements.",
features: [
"For short term Urine collection.",
"Use of hygiene adhesive for fixation minimum risk of allergy and injuries.",
"Size: 100 ML, 200 ML.",
"Sterile or Non Sterile"
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-27",
title: "NELATON CATHETER",
description: "Single-use catheter for short-term bladder drainage featuring smooth kink-resistant tubing, atraumatic rounded tip with lateral eyes, and color-coded connectors for size identification.",
detailedDescription: "The Nelaton Catheter is designed for efficient short-term bladder catheterization with patient comfort in mind. It features super smooth kink-resistant tubing that ensures consistent flow rates during drainage procedures. The catheter has an atraumatic, soft rounded closed tip with two lateral eyes positioned for optimal drainage while minimizing tissue trauma. The frozen surface tubing facilitates smooth insertion, while the proximal end is equipped with a universal funnel-shaped connector for easy extension. For quick size identification, each catheter has color-coded connectors according to industry standards. An X-ray opaque line runs the length of the catheter to enable visualization on imaging if needed. Available in both male and female versions, each catheter measures 40cm in length and is supplied sterile and individually packaged for single use.",
features: [
"Nelaton catheters are used for short term bladder catheterization.",
"Super smooth kink resistance tubing ensures uniform flowrate.",
"Atraumatic, soft rounded, closed tip with two lateral eyes for efficient drainage.",
"Frozen surface tubing for super smooth intubation.",
"Proximal end is fitted with universal funnel shaped connector for extension.",
"Color coded connectors for easy identification of size as per standards.",
"X-Ray opaque line provided through out the length of catheter.",
"Available in Male & Female Version.",
"Available with DEHP Free Material.",
"Length: 40cm",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-28",
title: "FOLEY BALLOON CATHETER LATEX",
description: "Indwelling urinary catheter made from natural latex rubber with silicone elastomer coating, featuring high flow rate design and smooth surface for atraumatic catheterization.",
detailedDescription: "The Foley Balloon Catheter Latex is designed for both short and long-term urinary drainage needs. Constructed from natural latex rubber with a silicone elastomer coating, the catheter provides a smooth surface that minimizes trauma during insertion and removal. The innovative three-layer construction includes a high-strength polymer middle layer that ensures a wider inner diameter for superior flow rates while maintaining structural integrity. The catheter features smooth eyes, an ultra-thin highly elastic balloon, and a hard non-return valve for trouble-free inflation and deflation. The coned distal end with burr-free eyes enables atraumatic intubation, while the specialized design minimizes encrustation and subsequent catheter blockage, extending functional life and improving patient comfort during extended use periods.",
features: [
"Used for short/long term urine drainage.",
"Made from natural latex rubber.",
"Silicon elastomer coated smooth surface for atraumatic catheterization.",
"High strength polymer layer in the middle layer of the catheter ensures wider inner diameter and hence high flow rate.",
"Minimizes encrustation and subsequent catheter blockage and failure.",
"Smooth eye, ultra thin highly elastic balloon and hard non-return valve for trouble free inflation and deflation.",
"Coned distal end provided with burr free eyes for atraumatic intubation.",
"Hard valve ensures easy inflation and deflation of balloon.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-29",
title: "MALE EXTERNAL CATHETER",
description: "Non-invasive urine collection device made from pure latex with self-adhesive strip for secure attachment to the penis, designed for day and night use in male patients with urinary incontinence.",
detailedDescription: "The Male External Catheter offers a comfortable solution for urinary incontinence management in male patients. Manufactured from pure latex for exceptional softness and comfort, this catheter is specially designed for continuous use during both day and night. The catheter features a self-adhesive coated strip that ensures proper fixation to the penis without causing skin irritation. Its proximal end is engineered for easy connection to standard urine collection bags, creating a simple and effective system for managing incontinence. The non-invasive design eliminates the risks associated with indwelling catheters while providing reliable containment of urine, helping maintain patient dignity and comfort. Each catheter is supplied sterile and individually packaged for single use.",
features: [
"Manufactured from pure latex for soft and gentle feel.",
"Male catheter is specially designed for urine incontinence for day and night use in male patient.",
"Provided with self adhesive coated strip for proper fixing on to the penis.",
"Proximal end is designed for easy connection to urine bag, making it simple to use.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-30",
title: "RECTAL CATHETER",
description: "Specialized catheter for administering enema solutions and aspirating rectal fluid, featuring smooth kink-resistant tubing with lateral eyes for efficient flow and a universal connector for extensions.",
detailedDescription: "The Rectal Catheter is designed for the precise introduction of enema solutions into the rectum and for the aspiration of rectal fluids when clinically indicated. The catheter features super smooth kink-resistant tubing that ensures consistent and uniform flow rates during procedures. Its atraumatic, soft rounded closed tip includes two strategically placed lateral eyes that enable efficient drainage while minimizing discomfort. The frozen surface of the tubing facilitates smooth insertion, while the proximal end is equipped with a universal funnel-shaped connector that enables easy attachment to extension systems or administration devices. For quick size identification, each catheter has color-coded plain connectors. Measuring 40cm in length, each catheter is supplied sterile and individually packaged for single use.",
features: [
"For introduction of enema solution into rectum to release/aspire rectal fluid.",
"Super smooth kink resistance tubing ensures uniform flowrate.",
"Atraumatic, soft rounded, closed tip with two lateral eyes for efficient drainage.",
"Frozen surface tubing for super smooth intubation.",
"Proximal end is fitted with universal funnel shaped connector for extension.",
"Color coded plain connector for easy identification of size",
"Length: 40cm.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-31",
title: "DOUBLE J STENT",
description: "Temporary internal drainage device made from poly-urethane material that spans from the ureteropelvic junction to the bladder, featuring radio-opaque construction for x-ray visualization.",
detailedDescription: "The Double J Stent is designed for temporary internal drainage from the ureteropelvic junction to the bladder in patients requiring urological intervention. Constructed from superior grade poly-urethane material, the stent offers excellent biocompatibility and durability during the treatment period. A black line along the stent serves as a directional indicator for the coil after guide wire withdrawal, ensuring proper placement. The stent is completely radio-opaque for clear visualization during X-ray imaging procedures, and its material has been implant-tested to demonstrate low encrustation tendency, extending functional life. Available as either a basic ureteral stent with pusher (with or without thread) or as a comprehensive kit that includes a stent, pusher, guidewire, and two clamps (with or without thread), this product provides clinicians with options to meet varied procedural needs.",
features: [
"D. J. Stent used for temporary internal drainage from ureteropelvic junction to the bladder",
"Made of superior grade poly-urethane material.",
"Black line on the stent indicates the direction of coil after withdrawal of guide wire.",
"Complete radio opaque stent for x-ray visualization. Implant tested with an externally low encrustation tendency.",
"Ureteral Stent Consist: Stent, Pusher, with or without Thread.",
"Ureteral Stent Kit Consist: Stent, Pusher, Guidewire, 2 Clamps with or without Thread.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-32",
title: "LEG URINE COLLECTION BAG",
description: "Compact urine collection system that attaches to the patient's leg for enhanced mobility, featuring kink-resistant tubing, non-return valve, and graduated markings for volume monitoring.",
detailedDescription: "The Leg Urine Collection Bag provides patients with freedom of movement while maintaining effective urine collection. Designed to attach securely to the patient's leg, this system features super smooth kink-resistant tubing with a universal tapered connector for reliable attachment to catheters. The efficient non-return valve prevents contamination by stopping backflow, while the bottom outlet drainage system allows for convenient emptying without removing the bag. Clear graduated markings in milliliters on the bag enable accurate monitoring of urine output, and the transparent construction allows for easy visual assessment of urine characteristics. Available with tube lengths of 50cm, 80cm, or 100cm to accommodate different patient needs, this 800ml capacity bag offers a balance between substantial collection volume and discreet wearability.",
features: [
"Super smooth kink resistance tube provided with universal tapered connector.",
"Provides freedom of mobility as the bag is attached to the leg of the patient.",
"Efficient non return valve prevents the back flow.",
"Bottom Outlet Drainage System.",
"Bag graduated in ml to indicate the quantity of urine collected.",
"Transparent sheeting allows visual inspection.",
"Size: 800mI.",
"Tube length: 50cm, 80cm, 100cm. Sterile or Non-Sterile"
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-33",
title: "URINE COLLECTING BAG WITH MEASURED VOLUME CHAMBER",
description: "Advanced urine collection system with integrated measured volume chamber for precise hourly output monitoring, featuring kink-resistant tubing and closed-circuit design to prevent contamination.",
detailedDescription: "The Urine Collecting Bag with Measured Volume Chamber is specifically designed for accurate monitoring of hourly urine output in clinical settings. The system incorporates super smooth kink-resistant tubing with a universal tapered connector for secure attachment to catheters. The innovative design features a measured volume chamber that connects directly to the urine bag, enabling precise measurement of output while ensuring automatic overflow into the main collection bag. The extra-strong sheeting construction provides durability for extended use periods, while specially designed hooks facilitate proper positioning and handling. The completely closed circuit design eliminates contamination risks, maintaining system integrity throughout use. Available with various chamber sizes (250ml, 500ml) and bag sizes (2000ml), the system can be customized with different hanger types, outlet styles, and tube lengths to meet specific clinical requirements.",
features: [
"Super smooth kink resistance tube provided with universal tapered connector.",
"Designed for accurate measurement of hourly urine output during examination of the patient.",
"Urine Bag is manufactured from eXtra strong sheeting to withstand during the long period.",
"Specially designed hook facilities for carrying, handling and holding the tube in upright position.",
"Urine bag attached directly with measured volume meter ensures auto over flow and convenience to empty the measured volume meter in the bag.",
"Completely closed circuit eliminates the risk of contamination.",
"With T Type Bottom Outlet.",
"Bag graduated in ml to indicate the quantity of urine collected.",
"Transparent sheeting allows visual inspection.",
"Available with DEHP Free Material. Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-34",
title: "TUR SET",
description: "Y-shaped irrigation system for endoscopic procedures during transurethral resection of the prostate, featuring kink-resistant tubing with thumb-operated clamps for quick bottle changeover.",
detailedDescription: "The TUR Set is a specialized Y-shaped irrigation system designed for endoscopic procedures during transurethral resection of the prostate gland. The set features super smooth kink-resistant tubing that ensures consistent and uniform flow rates during irrigation procedures. The Y-configuration allows for connection to multiple irrigation solution bottles, while the thumb-operated clamps enable quick and smooth changeover between bottles without interrupting the procedure. The proximal end is fitted with flexible latex tubing for easy connection to the endoscope, providing a secure and reliable irrigation pathway. This sterile, disposable system is individually packaged for immediate use in surgical settings, helping to maintain sterile technique and optimize procedural efficiency during urological interventions.",
features: [
"Super smooth kink resistance tubing ensures uniform flowrate.",
"Y shaped set for endoscopic irrigation during trans uretheral resection of prostate gland.",
"Thumb operated clamps, help quick and smooth changeover of bottles.",
"Proximal end fitted with flexible latex tubing for easy connection to endoscope.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-35",
title: "FOLEY BALLOON CATHETER",
description: "100% medical grade silicone catheter for long-term urinary drainage, featuring transparent construction for visual monitoring, symmetrical balloon design, and x-ray opaque line for placement confirmation.",
detailedDescription: "The Foley Balloon Catheter is constructed from 100% medical grade silicone for superior biocompatibility during extended use periods. Designed specifically for long-term urinary drainage, the catheter's transparent construction allows healthcare providers to easily monitor fluid characteristics and flow. The non-toxic, biocompatible material provides an extra smooth surface that maximizes patient comfort throughout the catheterization period. The catheter features a symmetrical balloon and rounded sealed tip for optimal positioning, while the hard non-return valve ensures reliable balloon inflation and deflation. An x-ray opaque line runs the length of the catheter, allowing for placement confirmation using imaging if needed. The soft, uniformly inflated balloon positions the catheter securely against the bladder wall, while the smooth round shaft minimizes trauma during both insertion and withdrawal procedures.",
features: [
"100% Medical grade silicone for Superior Biocompatibility.",
"Used for long term urine drainage-Transparent medical grade silicone tube allows easy visual inspection and fluid observation.",
"Non-toxic, bio-compatible and extra smooth for maximum patient comfort.",
"Symmetrical balloon, rounded sealed tip and hard non-return.",
"X-ray opaque line allows for confirmation of intubated tube using X-ray.",
"Soft and uniformly inflated balloon mal‹es the tube sit well against the bladder.",
"Smooth round shaft can minimize trauma during insertion and withdrawal.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-36",
title: "FEMALE CATHETER",
description: "Short-length catheter specifically designed for female urethral anatomy, featuring kink-resistant tubing with lateral eyes for efficient drainage and color-coded connectors for size identification.",
detailedDescription: "The Female Catheter is specially designed to accommodate the shorter female urethral anatomy, providing effective short-term bladder catheterization. The catheter features super smooth kink-resistant tubing that ensures consistent flow rates during drainage procedures. Its atraumatic, soft rounded closed tip includes two lateral eyes positioned for optimal drainage while minimizing tissue trauma. The frozen surface tubing facilitates smooth insertion, while the proximal end is equipped with a universal funnel-shaped connector for easy extension. For quick size identification, each catheter has color-coded connectors according to industry standards. An X-ray opaque line runs the length of the catheter to enable visualization on imaging if needed. With a compact 20cm length optimized for female anatomy, each catheter is supplied sterile and individually packaged for single use.",
features: [
"For Short term bladder catheterization through urethra in female.",
"Super smooth kink resistance tubing ensures uniform flowrate.",
"Atraumatic, soft rounded, closed tip with two lateral eyes for efficient drainage.",
"frozen surface tubing for super smooth intubation.",
"Proximal end is fitted with universal funnel shaped connector for extension.",
"Color coded connectors for easy identification of size as per standards.",
"X-Ray opaque line provided through out the length of catheter. Length: 20cm.",
"Sterile / Disposable / Individually Packed."
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
{
id: "med-37",
title: "URETHRAL CATHETER",
description: "General-purpose catheter for short-term bladder drainage via the urethra, featuring kink-resistant tubing with atraumatic tip, lateral eyes, and color-coded connectors for size identification.",
detailedDescription: "The Urethral Catheter is designed for effective short-term bladder drainage through the urethral pathway. The catheter features super smooth kink-resistant tubing that ensures consistent flow rates during drainage procedures. Its atraumatic, soft rounded closed tip includes two lateral eyes positioned for optimal drainage while minimizing tissue trauma. The frozen surface tubing facilitates smooth insertion, while the proximal end is equipped with a universal funnel-shaped connector for easy extension to collection systems. For quick size identification, each catheter has color-coded plain connectors. An X-ray opaque line runs the length of the catheter to enable visualization on imaging if needed. Measuring 40cm in length to accommodate various patient anatomies, each catheter is supplied sterile and individually packaged for single use in clinical settings.",
features: [
"Used for short-term bladder catheterization through urethra.",
"Super smooth kink resistance tubing ensures uniform flowrate.",
"Atraumatic, soft rounded, closed tip with two lateral eyes for efficient drainage.",
"Frozen surface tubing for super smooth intubation.",
"Proximal end is fitted with universal funnel shaped connector for extension. Color coded plain connector for easy identification of size.",
"X-Ray opaque line provided through out the length of catheter.",
"Length: 40cm.",
"Sterile / Disposable / Individually Packed"
],
specifications: [],
image: "/placeholder.svg",
category: "medical"
},
 {
    id: "med-38",
    title: "TWINS BORE NASAL OXYGEN SET",
    description: "Oxygen administration device with super smooth kink-resistant tubing and soft twin prong nasal tips ensuring equal oxygen delivery to both nasal passages.",
    detailedDescription: "The Twins Bore Nasal Oxygen Set features star lumen main tubing to prevent accidental blockage and smoothly finished adjustable nasal tips for maximum patient comfort. It includes a soft funnel-shaped connector for easy connection to oxygen sources and measures 210 cm in length. Available in Adult, Paediatric, and Neonatal sizes with DEHP-free material options.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Designed for easy administration of oxygen and comfort of patient.",
      "Soft twin prong nasal tips to ensure equal, volume of oxygen to both air passages.",
      "Star lumen main tube to avoid accidental blockage.",
      "Smoothly finished and adjustable nasal tips for maximum patient comfort.",
      "Soft funnel shaped connector facilitates easy connection to oxygen source.",
      "Tube Length: 210 cm.",
      "Size: Adult, Paediatric & Neonatal.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-39",
    title: "NASAL OXYGEN CATHETER",
    description: "Direct oxygen administration device via nasopharyngeal route with kink-resistant tubing, atraumatic open distal end and lateral eyes to prevent oxygen burn.",
    detailedDescription: "The Nasal Oxygen Catheter delivers oxygen directly through the nasopharyngeal route with super smooth kink-resistant tubing. Features frozen surface tubing for smooth intubation and an atraumatic rounded open distal end with lateral eyes that disperse oxygen while preventing oxygen burn. Includes color-coded connectors for size identification.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Suitable for direct administration of oxygen via nasopharyngeal route.",
      "Atraumatic, soft rounded. Open Distal end with two lateral eyes for non-traumatic insertion and dispersion of oxygen and prevention of oxygen burn.",
      "Frozen surface tubing for super smooth intubation.",
      "Proximal end is fitted with universal funnel shaped connector for connection to oxygen source.",
      "Color coded plain connector for easy identification of size.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-40",
    title: "OXYGEN MASK",
    description: "Anatomically formed soft mask for oxygen delivery with feathered edges, adjustable elastic strap, and kink-resistant tubing for patient comfort and effective oxygen therapy.",
    detailedDescription: "The Oxygen Mask is crafted from soft clear plastic with anatomically formed contours for comfort. It features smooth feathered edges to reduce irritation, an integrated nose clip, and adjustable elastic strip for proper positioning. Connected to a 210cm star lumen tube with funnel connector for oxygen sources, available in Adult, Paediatric and Neonatal sizes.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Made from a soft dear plastic and are anatomically formed for comfort.",
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "Adjustable elastic strip and integrated nose clip for proper positioning of mask.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult, Paediatric & Neonatal."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-41",
    title: "GUEDEL AIRWAYS",
    description: "Oropharyngeal device for maintaining unobstructed airways during anesthesia or in unconscious patients, featuring bite block, rounded edges and color-coded design.",
    detailedDescription: "Guedel Airways are designed to maintain an unobstructed oropharyngeal airway during general anesthesia and in unconscious patients. The device incorporates a bite block to prevent tongue biting and airway occlusion, with rounded atraumatic edges and a smooth airway path for easy cleaning, using color-coded bite blocks for size identification.",
    features: [
      "Suitable for maintaining an unobstructed oropharyngeal airway during general anaesthesia and in unconscious patients.",
      "Bite block to prevent biting of tongue and airway occlusion.",
      "Rounded atraumatic edges.",
      "Smooth airway path for easy cleaning.",
      "Color coded Bite Blocks for easy identification of sizes.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-42",
    title: "SUCTION CATHETER WITH THUMB CONTROL",
    description: "Secretion removal device with thumb control valve for tracheal and bronchial suctioning, featuring kink-resistant tubing and atraumatic tip with lateral eye.",
    detailedDescription: "The Suction Catheter with Thumb Control allows precise management of suction for removing secretions from trachea and bronchial regions. Features super smooth kink-resistant tubing with frozen surface for smooth intubation and an atraumatic soft rounded open distal end with lateral eye for non-traumatic insertion and effective suctioning.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "For removal of secretion from trachea and bronchial region.",
      "Atraumatic, soft rounded, Open Distal end with one lateral eye for non-traumatic insertion.",
      "Frozen surface tubing for super smooth intubation.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded plain connector for easy identification of size.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-43",
    title: "SUCTION CATHETER WITH FINGERTIP CONTROL",
    description: "Bronchial secretion removal device with fingertip control mechanism, featuring kink-resistant tubing, atraumatic tip with lateral eye, and color-coded connectors.",
    detailedDescription: "The Suction Catheter with Fingertip Control provides precise suction management for removing tracheal and bronchial secretions. Features super smooth kink-resistant tubing with frozen surface for easy intubation and an atraumatic soft rounded open distal end with lateral eye for non-traumatic insertion and effective suctioning.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "For removal of secretion from trachea and bronchial region.",
      "Atraumatic, soft rounded, Open Distal end with one lateral eye for non-traumatic insertion.",
      "Frozen surface tubing for super smooth intubation.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded plain connector for easy identification of size.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-44",
    title: "SUCTION CATHETER PLAIN",
    description: "Basic tracheal and bronchial secretion removal device with kink-resistant tubing, atraumatic open distal end with lateral eye, and universal connector.",
    detailedDescription: "The Plain Suction Catheter provides reliable removal of secretions from trachea and bronchial regions. Features super smooth kink-resistant tubing with frozen surface for smooth intubation and an atraumatic soft rounded open distal end with lateral eye for non-traumatic insertion, including universal funnel connector for standard equipment.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "For removal of secretion from trachea and bronchial region.",
      "Atraumatic, soft rounded, Open Distal end with one lateral eye for non-traumatic insertion.",
      "Frozen surface tubing for super smooth intubation.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded plain connector for easy identification of size.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-45",
    title: "ENDOTRACHEAL TUBE CUFFED & PLAIN",
    description: "Airway management device for mechanical ventilation featuring thermosensitive PVC, X-ray detectability, Murphy eye, and high-volume low-pressure cuff options.",
    detailedDescription: "Endotracheal Tubes are designed to maintain a patent airway for mechanical ventilation. The thermosensitive PVC softens at body temperature to conform to airway anatomy. Features include high-volume low-pressure cuff options, X-ray detective line, Murphy Eye for continued ventilation if tube end is obstructed, and universal 15mm connector.",
    features: [
      "Used to maintain a patent airway and mechanically ventilate patients.",
      "High volume, low pressure cuff, maintains seal throughout ventilator cycle.",
      "X-ray detective line available.",
      "Thermosensitive PVC allows the tube to soften at body temperature to conform to airway anatomy.",
      "Clear PVC tube with visible markings for easy observation.",
      "Murphy Eye smoothly formed to allows ventilation in the event of obstruction of the end of the tube during intubation.",
      "A full range of standard sized to meet most of your requirements.",
      "Universal 15 mm Connector at proximal end.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-46",
    title: "REINFORCED ENDOTRACHEAL TUBE",
    description: "Kink-resistant endotracheal tube with spiral metal reinforcement, radiopaque line, graduation marks, and high-volume low-pressure cuff for mechanical ventilation.",
    detailedDescription: "The Reinforced Endotracheal Tube features uniform spiral metal-reinforced wall to prevent kinking during procedures. X-ray visible reinforcement supports tube position verification, with accurate positioning ensured by graduation marks and tip-to-tip radiopaque line. High-volume low-pressure cuff ensures efficient seal with universal 15mm connector.",
    features: [
      "Used to maintain a patent airway and mechanically ventilate patients.",
      "Uniform spiral metal-reinforced tube wall to prevent the tube from kinking.",
      "Reinforcement supports tube position and verification during X-ray.",
      "Accurate and safe positioning ensured by graduation marks and tip-to-tip radiopaque line.",
      "High volume / low pressure cuff ensures efficient low pressure cuff seal (For cuffed tubes).",
      "Universal 15 mm connecter at proximal end.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-47",
    title: "L.P. SPINAL NEEDLE",
    description: "Specialized needle for spinal anesthesia offering exceptional dura penetration control, high flow rate for fast CSF flashback, and clear polycarbonate hub.",
    detailedDescription: "L.P. Spinal Needle provides exceptional control when penetrating the dura during spinal anesthesia procedures. Designed for aggressive anesthetic distribution upon injection with high flow rate enabling faster cerebrospinal fluid (CSF) flashback. Features clear polycarbonate hub for easy visualization of CSF or blood, with customizable needle length options.",
    features: [
      "Spinal needle provided exceptional control when penetrating the dura.",
      "Suitable for spinal anaesthesia.",
      "Aggressive anesthetic distribution upon injection. High flow rate enables faster cerebra spinal (CSF) flashback.",
      "Clear polycarbonate hub offer easy visualization of CSF or blood.",
      "Available with Customized Needle Length.", 
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-48",
    title: "NEBULIZER MASK",
    description: "Specialized mask compatible with standard nebulizer kits, featuring direct flow design, adjustable positioning, and kink-resistant tubing for efficient medication delivery.",
    detailedDescription: "The Nebulizer Mask is specifically designed to work with any standard nebulizer kit, plugging directly into the mask's standard fitting. Its direct flow design delivers more medication to the patient, with smooth feathered edges for comfort, adjustable elastic strip, and integrated nose clip for optimal positioning.",
    features: [
      "Designed to be used with any standard Nebulizer kit.",
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "Adjustable elastic strip and integrated nose clip for proper positioning of mask.",
      "The Nebulizer Kit just plugs into the standard fitting located at the bottom of the Mask.",
      "Masks are designed to deliver more medication directly to the patient due to the direct flow design.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult, Paediatric & Neonatal."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-49",
    title: "MULTIFLOW VENTURI MASK",
    description: "Oxygen delivery system with six selectable concentration diluters, comfortable face mask design, and kink-resistant tubing for precise oxygen therapy management.",
    detailedDescription: "The Multiflow Venturi Mask delivers controlled oxygen concentrations through six different diluters for precise therapy. Features comfortable design with smooth feathered edges, adjustable elastic strip and integrated nose clip. Connected to oxygen supply via 210cm star lumen tube with funnel connector, available in Adult, Paediatric and Neonatal sizes.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "Adjustable elastic strip and integrated nose clip for proper positioning of mask.",
      "Multiflow Venturi masks are devices that are constructed to supply oxygen or other gases to an individual.",
      "Masks fit snugly over the nose and mouth, and are equipped with 6 different oxygen concentration diluters which allows to select different oxygen concentration accordingly.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult, Paediatric & Neonatal.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-50",
    title: "SINGLE DIAL VENTURI MASK",
    description: "Oxygen delivery system with two selectable diluters allowing 24-50% concentration control via adjustment dial in a comfortable transparent mask design.",
    detailedDescription: "The Single Dial Venturi Mask offers controlled oxygen therapy with two diluters: white (24-30%) and green (35-50%) with adjustable percentage selection. Features transparent plastic construction for patient monitoring, comfortable feathered edges, and adjustable elastic strip with nose clip, connected via 210cm star lumen tube to oxygen source.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.", 
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "Adjustable elastic strip and integrated nose clip for proper positioning of mask.",
      "Single Dial Venturi masks are devices that are constructed to supply oxygen or other gases to an individual.",
      "There are two Oxygen diluters, one(White) for 24%, 26%, 28% and 30%,while the other (Green) is for 35%, 40% or 50%.",
      "Transparent (green or white) plastic masks also leave the face visible, allowing care providers to better ascertain patients' conditions.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult & Paediatric.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-51",
    title: "HIGH CONCENTRATION OXYGEN MASK",
    description: "Oxygen therapy mask with reservoir bag to prevent rebreathing, featuring comfortable design with feathered edges and kink-resistant tubing for optimal oxygen delivery.",
    detailedDescription: "The High Concentration Oxygen Mask provides efficient oxygen therapy with its integrated reservoir bag that prevents rebreathing. The mask features smooth feathered edges for patient comfort and reduced irritation. Connected via 210cm star lumen tubing with universal funnel connector to oxygen source, available in Adult and Paediatric sizes.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "High concentration Oxygen mask with tubing is intended to supply oxygen or other gases to an Individual for oxygen therapy, and the reservoir bag is able to avoid rebreathing.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult & Paediatric.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-52",
    title: "T OXYGENATOR",
    description: "Recovery device for oxygen delivery via ET connection or laryngeal mask, featuring T-piece with suction port, reservoir tube, and oxygen stem with cap.",
    detailedDescription: "The T Oxygenator Kit is designed for recovery situations, delivering oxygen via 15mm ET Connection or Laryngeal mask. Features include a T-piece with 7.6mm non-popping suction port, 22mm-15cm reservoir flex tube, and oxygen stem with cap. Available with optional 2-meter star lumen oxygen tube or Venturi valve configurations.",
    features: [
      "T-Piece Kit Designed for use in recovery for the delivery of Oxygen via the patient 15mm ET Connection or Laryngeal mask.",
      "7.6mm port for suction with non-popping cap.",
      "The kit comprises T-piece with port, 22mm -15 cm reservoir flex tube and Oxygen stem with cap.", 
      "Sterile / Disposable / Individually Packed.",
      "OPTIONS AVAILABLE: With or Without 2mtr. Star lumen Oxygen Tube.",
      "With or Without 40% or 60% Venturi Valve and 2 mtr. Tubing."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-53",
    title: "T-PIECE FOR NEBULIZER",
    description: "Quick-assembly nebulization device with rotatable sections for use with masks, iGel, LMA, and ET tubes in both sitting and supine patient positions.",
    detailedDescription: "The T-Piece for Nebulizer facilitates fast nebulization with rotatable sections enabling use for patients in sitting or supine positions. Compatible with masks, iGel, LMA, and ET tubes, it maintains standard drug dosage and oxygen flow rates. Features comfortable design with smooth edges and 210cm star lumen tubing for oxygen connection.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Smooth and feathered edge of face mask for patient comfort and reducing irritation points.",
      "Quick to assemble - Facilitates fast nebulisation.",
      "Can be used with Mask, iGel, LMA and ET tube.",
      "Rotatable sections - Can be used on patients in sitting or supine position.",
      "Drug dosages and oxygen flow rates remain as per guidelines.",
      "Proximal end of tube is connected with funnel shape connector for easy connection with oxygen source.",
      "Star lumen main tube to avoid accidental blockage.",
      "Tube Length: 210cm.",
      "Size: Adult, Paediatric & Neonatal.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-54",
    title: "CATHETER MOUNT",
    description: "Connector between endotracheal tube and breathing circuit with double swivel design to minimize tracheal trauma and facilitate suctioning without circuit disruption.",
    detailedDescription: "Catheter Mount connects patient endotracheal tube to breathing circuit, minimizing jerking motion and reducing tracheal trauma. Features lightweight design with double 360° swivel on both axes, minimal compliance and low dead space. Compatible with all breathing circuits, it includes an elbow port for easy suctioning without disturbing the circuit.",
    features: [
      "Catheter Mount connects patient ET to breathing circuit. This minimizes the jerk of breathing to ET or TT reducing trauma to trachea.",
      "The double swivel makes no dragging on breathing circuit & ET or TT.",
      "Light weight, Double swivel rotates 360° on both axis, Minimum compliance, Low dead.",
      "Compatible with all types of breathing and ventilator circuits.",
      "Provided with 22 mm standard female connector on both the ends with inner diameter of 15 mm.",
      "Collapsible corrugated tubing being inert to all anesthetic gases and reagents.",
      "An elbow port is provided for easy suctioning without causing disturbance to breathing circuits.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-55",
    title: "BAIN CIRCUITS",
    description: "Co-axial anesthetic circuit system with inner fresh gas tube and outer reservoir, available in adult Mapleson D and pediatric Mapleson F configurations.",
    detailedDescription: "Bain Circuits feature co-axial modification of T-piece systems for scavenging waste anesthetic gases. The fresh gas travels inside the outer reservoir tube to the endotracheal connector. Adult version (Mapleson D) includes 22mm corrugated tube, expiratory valve and 2L antistatic bag; pediatric version (Mapleson F) includes 15/10mm tube with 0.5L bag.",
    features: [
      "Bain Circuit offered comprises co-axial modification of basic T-piece system which has been developed for facilitating scavenging of waste anesthetic gases.",
      "As a tube carrying fresh gas, it travels inside outer reservoir tube to endotracheal tube connector.",
      "The process includes patient inspiring fresh gas from the outer reservoir tube and expiring into reservoir tube.",
      "Adult: It is based on Mapleson D system, provided with 22 mm corrugated tube, expiratory valve and 2 litre antistatic bag.",
      "Pediatric: It is based on Mapleson F system, provided with 15 & 10 mm corrugated tube with a 0.5 ltr antistatic Rebreathing Bag and a bag bleed valve.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-56",
    title: "VENTILATOR CIRCUITS",
    description: "Gas pathway connecting patient to mechanical ventilator with flexible, kink-resistant corrugated tubes and standard connectors compatible with various ventilators and humidifiers.",
    detailedDescription: "Ventilator Circuits provide the essential gas pathway from mechanical ventilator to patient lungs. Featuring corrugated tubes with excellent flexibility and bending resistance to ensure smooth gas flow without meandering or breaking. Using standard ISO connectors compatible with most ventilators and humidifiers, available in Adult, Paediatric and Neonatal sizes.",
    features: [
      "Ventilator Circuit is the gas pathway connecting patients lung to the mechanical ventilator.",
      "The corrugated tubes have a good flexibility and bending resistance, not meander, not broken, that mechanical ventilation in the process smooth gas supply.",
      "Breathing Circuit uses standard connector that is simple convenience in clinic.",
      "Size: Adult, Paediatric & Neonatal.",
      "Sterile / Disposable / Individually Packed.",
      "OPTIONS AVAILABLE: With or Without Port.",
      "With or Without \"Y\" - Piece."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-57",
    title: "BREATHING FILTERS",
    description: "High-efficiency respiratory filters for airway protection between patient and ventilation equipment, using hydrophobic membrane with >99.99% bacterial/viral filtration efficiency.",
    detailedDescription: "Breathing Filters provide critical protection in respiratory support equipment, positioned between patient and breathing apparatus. Utilizing hydrophobic membrane and synthetic media for barrier and electrostatic filtration with >99.99% bacterial and viral removal efficiency while maintaining low airflow resistance. Includes moisture retention and CO2 monitoring capabilities.",
    features: [
      "Breathing Filters are used in respiratory support equipment such as life support and human ventilation machine, fitted in the airway between equipment and patient.",
      "Filters utilize hydrophobic membrane & synthetic media that provide barrier & electrostatic filtration with bacterial & vital removal efficiency higher than 99.99% accomplished with extremely low resistance to airflow.",
      "The HMW Keeps moisture retention and warming of inhaled air, filter design in different sizes with C02 monitoring port.",
      "Products features: Clear housing. Low flow resistance High filtration efficiency. High heat & humidity level, C02 Mentoring level.",
      "Size: Adult, Paediatric.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-58",
    title: "TRACHEOSTOMY TUBE",
    description: "Airway management device for tracheostomy patients featuring kink-resistant, thermo-sensitive tube with lockable obturator, anatomical design, and radiopaque markings.",
    detailedDescription: "The Tracheostomy Tube maintains patent airways through tracheostomy for mechanical ventilation. Features kink-resistant, thin-walled thermosensitive material that softens at body temperature. Includes lockable obturator compatible with Seldinger guidewire technique, anatomically designed with smooth curved ends for atraumatic procedures, and radiopaque markings for position verification.",
    features: [
      "Used to maintain a patent airway through tracheostomy and mechanically ventilate patients.",
      "Kink resistant, thin-walled, thermo-sensitive tube, softens at body temperature.",
      "Lockable obturator with facility to insert guide wires to facilitate intubation using the widely accepted Seldinger guide wire technique.",
      "Anatomically designed tube and obturator with extra smooth and curved distal end for atraumatic intubation and extubating.",
      "Smooth inside/outside surface for ease in intubation, extubating and suctioning.",
      "Kink resistant inflation tube to ensure patient safety during cuff inflation and deflation.",
      "Radio opaque line and markings provided to facilitate identification of tube position.",
      "Universal 15 mm connecter at proximal end.",
      "Available with DEHP free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-59",
    title: "NASOPHARYNGEAL AIRWAYS",
    description: "Emergency airway management device with anatomical design, smooth round edges, thin walls, and kink-resistant material for securing open airways with maximum patient comfort.",
    detailedDescription: "Nasopharyngeal Airways secure and open patient airways in emergency situations. Featuring anatomical design with smooth round edges, thin walls, and kink-resistant construction to maximize patient comfort while maintaining airway patency. Available in DEHP-free material options, supplied sterile and individually packaged for single use.",
    features: [
      "Used to secure and open airways for patients in case of emergencies.",
      "Anatomically designed with smooth round edges, thin wall and kink resistance for maximum patient comfort.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-60",
    title: "PVC LARYNGEAL MASK",
    description: "Supraglottic non-invasive airway management device with anatomically engineered mask, separate inflation line, universal connector, and radiopaque visualization features.",
    detailedDescription: "The PVC Laryngeal Mask provides supraglottic, non-invasive airway management with anatomically engineered mask design and separate inflation line. Features include universal 15mm connector, radiopaque line for X-ray visualization, position markings along length, and pilot balloon for monitoring cuff inflation and deflation status.",
    features: [
      "Supraglottic, non-invasive airway management device.",
      "Anatomically engineered mask provided with separate inflation line.",
      "Provided with universal 15 mm connector.",
      "Radio opaque line for X-ray visualization.",
      "Marking provided along the length to facilitate identification of tube position.",
      "Pilot balloon to check inflation & deflation of cuff.",
      "Available with DEHP free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-61",
    title: "AMBU BAGS",
    description: "Hand-operated self-refilling ventilation device with non-rebreathing valve, pressure limitation feature, oxygen reservoir, and tubing for emergency resuscitation.",
    detailedDescription: "Ambu Bags provide hand-operated ventilation with self-refilling compressible bag design and non-rebreathing patient valve with pressure limitation to prevent over-inflation. Includes oxygen reservoir bag with 2-meter oxygen tubing and intake valve with nipple for connection. Disassembles for cleaning, disinfection, or autoclaving in Adult, Pediatric and Neonatal sizes.",
    features: [
      "Hand operated, compressible self refilling ventilation bag with non-rebreathing patient valve with pressure limitation valve to minimize the risk of over inflating, intake valve with nipple for oxygen tubing.",
      "Supplied with oxygen reservoir bag (suitable capacity) and 2 meter oxygen tubing.",
      "Resuscitator can be disassembled for cleaning, disinfecting or autoclaving process.",
      "Size : Adult, Paediatric & Neonatal.",
      "FEATURES: Durability and light weight.",
      "Easy usage and Semi-transparent.",
      "Good quality and best prices.",
      "Provide effective ventilation.",
      "Pressure limitation valve for patient safety."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-62",
    title: "SUCTION CATHETER CLOSED SYSTEM",
    description: "Ventilation-maintaining suction system for mechanically ventilated patients with replaceable catheters, MDI port for drug delivery, and isolation valve for catheter cleaning.",
    detailedDescription: "The Closed System Suction Catheter maintains ventilation and oxygen therapy while suctioning mechanically ventilated patients. Minimizes ventilator-associated pneumonia risk with three easily replaceable catheters. Features lateral-eyed catheter with depth markings, MDI port for drug delivery, irrigation port with one-way valve, and on/off isolation valve creating enclosed cleaning chamber.",
    features: [
      "Used to mainitain ventilation and oxygen therapy while suctioning in mechanically ventilated patients.",
      "Minimises the risk of Ventillator Associated Pnemonia (VAP).",
      "Kit comes with 3 easily replaceable catheters, minimizing the need to replace entire suction system every 24-72 hrs.",
      "Catheter with lateral eyes, smooth tip and depth markings for maximum patient comfort.",
      "MDI port provides an effective, quick and convenient way of drug delivery.",
      "Irrigation port with one way valve allows lavage and irrigation of the suction catheter.",
      "On/off valve allows suction catheter tip to be isolated and creates an enclosed cleaning chamber.",
      "Transparent connectors and durable sleeve facilitates catheter manipulation and prevents infiltration of blood and sputum.",
      "360° swivel elbow enables rotation for enhanced patient comfort and reduces torque.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-63",
    title: "EPIDURAL NEEDLE",
    description: "Specialized needle for epidural anesthesia featuring 10mm depth markings, fixed wings, clear hub for CSF/blood visualization, and polished inner bevel to prevent catheter shearing.",
    detailedDescription: "The Epidural Needle is designed specifically for epidural anesthesia procedures with Tuohy-type needle tip and fixed wings. Features 10mm interval markings for precise depth control, clear polycarbonate hub for easy cerebrospinal fluid or blood visualization, and polished inner bevel to minimize catheter shearing risk. Standard 80mm length supplied sterile.",
    features: [
      "Highly suitable for Epidural Anaesthesia.",
      "Markings on the needle at every 10 mm distance from tip making it easy to observe and also control the exact depth of insertion. Tuohy type needle tip with fixed wings.",
      "Clear polycarbonate hub enables visualization of Cerebro Spinal Fluid (CSF) or blood easily.",
      "Polished inner bevel minimizes the risk of catheter shearing.",
      "Standard Length: 80mm.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-64",
    title: "EPIDURAL CATHETER",
    description: "Specialized catheter for continuous anesthesia and pain therapy, featuring plasticizer-free polymer construction, atraumatic tip with lateral eyes, and printed depth markings.",
    detailedDescription: "The Epidural Catheter delivers short and long-term continuous anesthesia and pain therapy through uniquely formulated plasticizer-free, latex-free polymer construction with excellent biocompatibility. Features flexible atraumatic soft tip with three lateral eyes, printed depth markings for accurate placement, and crystal clear design with radiopaque line for visibility.",
    features: [
      "Epidural Catheter is specially designed for short term & long term continuous anaesthesia & pain therapy.",
      "Catheter is made from unique plasticizer - free, latex - free formulation of polymer with excellent bio compatibility.",
      "Flexible & atraumatic soft tip with three lateral eyes reduces the risk of complications.",
      "Catheter is printed to determine the depth of insertion & accurate placement of catheter in the Epidural space.",
      "Crystal clear catheter with radio opaque line provides clear visualization of blood / CSF.",
      "Luer lock twist connector is supplied for easy & safe connection.",
      "Tube Length: 80 cms.",
      "Sizes: Passes through G 16,18 needle.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
   {
    id: "med-65",
    title: "CLOSE WOUND SUCTION UNIT",
    description: "Effective device for dosed wound drainage under negative pressure post operatively with single or dual catheter options.",
    detailedDescription: "Suitable to offer surgeons and doctors an effective device for dosed wound drainage under negative pressure post operatively with the option to use one catheter or two catheters simultaneously. Super smooth kink resistance tubing enables uniform flowrate. Radon drains catheters are provided with radio opaque line and satin smooth eyes.",
    features: [
      "Super smooth kink resistance tubing enables uniform flowrate.",
      "Radon drains catheters are provided with radio opaque line and satin smooth eyes.",
      "Connecting tube is kink resistant and is provided with additional strength to withstand the suction.",
      "Easy to use by one person depress the chamber to active the suction of bellow unit.",
      "Available in different sizes with matching size curved needle to meet moderate to heavy drainage needs.",
      "X-ray opaque line provided throughout the length of Tube.",
      "Connecting tube with clamp &\" Y\" connector, curved needle with matching catheter & spare perforated catheter.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-66",
    title: "MINI CLOSE WOUND SUCTION UNIT",
    description: "Specially designed drainage unit for minor surgery and plastic surgery under negative pressure.",
    detailedDescription: "Baby Vac Set has been specially designed for Wound Drainage under negative pressure for minor surgery and plastic surgery. Super smooth kink resistance tubing ensures uniform flowrate. Easy to use Catheter to connect bellow container. Catheters are available in two sizes with matching size curved needle.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Easy to use Catheter to connect bellow container.",
      "Catheters are available in two sizes with matching size curved needle.",
      "Frozen surface Catheter and smooth round eyes facilitate efficient drainage.",
      "X-ray opaque line provided throughout the length of Tube.",
      "Curved Needle with matching catheter Available with DEHP Free Material.",
      "Sterile/ Disposable/ Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-67",
    title: "CHEST DRAINAGE CATHETER",
    description: "Specially designed for rapid non operative pleural and chest drainage with kink resistant tubing.",
    detailedDescription: "Specially designed for rapid non operative pleural and chest drainage. Super smooth kink resistance tubing ensures uniform flowrate. Available as Catheter without Trocar featuring atraumatic, soft rounded open distal end with six lateral eyes, or Catheter With Trocar featuring atraumatic, soft rounded open distal end with two lateral eyes.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Catheter without Trocar: Atraumatic, soft rounded. Open Distal end with six lateral eyes for non-traumatic insertion.",
      "Catheter With Trocar: Atraumatic, soft rounded, Open Distal end with two lateral eyes for non-traumatic insertion.",
      "Cross side eyes to prevent tissue aspiration.",
      "Large smooth drainage eyes for efficient drainage.",
      "Proximal end is fitted with tapered connector for easy connection to drainage bottle.",
      "X-ray opaque line provided throughout the length of catheter."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-68",
    title: "CHEST DRAINAGE BOTTLE",
    description: "Single use disposable unit designed to forward collected drainage into a collection chamber through liquid static suction effects.",
    detailedDescription: "Chest Drainage Bottle is a single use disposable unit which is designed to forward the collected Drainage into a collection chamber by the liquid static suction effects. Super smooth kink resistance tubing ensures uniform flowrate. Makes it easy to observe and measure the collected drainage content during surgery.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Makes it easy to observe and measure the collected drainage content during surgery.",
      "Facilitates safe Retrograde Technique.",
      "Product is suitable for pleural drainage in conjunction with chest drainage catheter in Cardiac and Thoracic procedures.",
      "Easy to read graduation helps to determine the drain volume precisely.",
      "Product Is provided with hanging at a higher position as compares to the common collection chamber allowing the collection of drainage without giving rise to any inconvenience.",
      "Suction port is provided to connect with suction unit.",
      "Easy to read graduation helps to determine the drain volume precisely.",
      "Available with DEHP Free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-69",
    title: "CHEST DRAINAGE KIT",
    description: "Complete kit with essentials for chest drainage and patient mobilization when underwater seals cannot be established.",
    detailedDescription: "Kit Includes all the essentials to perform chest drainage and permit the safe mobilisation of patients when under water seals cannot be established or are not practical. Super smooth kink resistance tubing ensures uniform flowrate. Ambulatory Chest Drainage System with integral tubing.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Ambulatory Chest Drainage System with integral tubing.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-70",
    title: "ABDOMINAL DRAIN KIT",
    description: "Specially designed kit for post operative abdominal drainage with soft catheter and collection bag.",
    detailedDescription: "Specially designed for post operative abdominal drainage. Super smooth kink resistance tubing ensures uniform flowrate. Soft abdominal drainage catheter with collection bag of 2000 ml capacity. Catheter is Atraumatic, soft rounded, Open Distal end with six lateral eyes for non-traumatic insertion.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Soft abdominal drainage catheter with collection bag of 2000 ml. capacity.",
      "Catheter is Atraumatic, soft rounded, Open Distal end with six lateral eyes for non-traumatic insertion.",
      "X-ray opaque line provided throughout the length of catheter.",
      "Specially designed handle holds tube up right and facilitates carrying.",
      "Transparent sheeting allows visual inspection.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-71",
    title: "UNDER WATER SEALED DRAINAGE BAG",
    description: "Drainage system for collection of fluid from thoracic cavity with 1000 ml capacity PVC bag.",
    detailedDescription: "Under water seal drainage system for collection of drainage fluid from thoracic cavity. Super smooth kink resistance tube provided with universal tapered connector. PVC drainage bag with 1000 ml capacity suitable for most thoracic applications. Specially designed moulded handle for easy carrying and hanging of the bag.",
    features: [
      "Super smooth kink resistance tube provided with universal tapered connector.",
      "PVC drainage bag with 1000 ml capacity suitable for most thoracic applications.",
      "Specially designed moulded handle for easy carrying and hanging of the bag.",
      "Clearly marked initial level ensures the under water seal.",
      "Transparent sheeting allows visual inspection.",
      "Available with DEHP Free Material. Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-72",
    title: "REDON DRAIN CATHETER",
    description: "Drainage catheter featuring radio-opaque line, smooth eyes, and kink resistant tubing for efficient fluid drainage.",
    detailedDescription: "Provided with radio-opaque line and smooth eyes. Super smooth kink resistance tubing ensures uniform flowrate. Markings on the tube at 19 cms from the distal tip. Cross perforated length of tube: 14 cm. Available with DEHP Free Material.",
    features: [
      "Provided with radio-opaque line and smooth eyes.",
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Markings on the tube at 19 cms from the distal tip.",
      "Provided with radio-opaque line and smooth eyes.",
      "Cross perforated length of tube: 14 cm.",
      "Available with DEHP Free Material.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-73",
    title: "BIOPSY NEEDLE",
    description: "Safe and painless needle for percutaneous insertion and penetration with reduced tissue shear.",
    detailedDescription: "Safe & painless percutaneous insertion & penetration. Reduce tissue shear. Provides a clear path to work through when performing multiple biopsies in the same area. Echogenic markings on cannula allow for precise ultrasound placement & centimeter depth markings assist in needle placement.",
    features: [
      "Safe & painless percutaneous insertion & penetration.",
      "Reduce tissue shear.",
      "Provides a clear path to work through when performing multiple biopsies in the same area.",
      "Echogenic markings on cannula allow for precise ultrasound placement & centimeter depth markings assist in needle placement.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-74",
    title: "BONE MARROW BIOPSY NEEDLE",
    description: "Ergonomic bone marrow biopsy needle with remover guide and atraumatic extraction cannulas for safe sampling.",
    detailedDescription: "Ergonomic handle. Remover guide provided with indicators to facilitate the sample expulsion and to be able to check the length of the sample during the procedure. The \"MM\" and \"MF\" additional extraction cannulas allow to get the sample in a completely atraumatic and safe way.",
    features: [
      "Ergonomic handle.",
      "Remover guide provided with indicators to facilitate the sample expulsion and to be able to check the length of the sample during the procedure.",
      "The \"MM\" and \"MF\" additional extraction cannulas allow to get the sample in a completely atraumatic and safe way and to hold it without any damage to its surface and inner structure until extraction.",
      "Available in Trocar, Aspiration or Fish Mouth tip. Luer Lock connection for syringe.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-75",
    title: "SKIN STAPLER",
    description: "Specially designed disposable skin stapler for surgical skin suture with quick sewing and good wound matching.",
    detailedDescription: "Our special designed and manufactured disposable skin stapler is the specific instrument for surgical skin suture. Our skin stapler has the advantages of quick speed of sewing up during the operation, very less histological reaction, good wound matching and healing, small surgical scar, and no pain for removing.",
    features: [
      "Simple and Superior design, easy to operate. Staples are made of High Quality 317L Stainless Steel for medical use.",
      "High sewing up and stapling speed help to shorten the time of sewing and avoid the cross infection of many contagious diseases.",
      "Less tissue reaction, much thinner scar after operation, and cure faster.",
      "Painless and convenient when remove staples after the operation incision healed up."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-76",
    title: "STAPLER REMOVER",
    description: "Specially designed remover for skin staples with easy structure and novel appearance for painless removal.",
    detailedDescription: "Our designed Remover for skin stapler is specially used for the removing of skin staples with the feature easy structure and novel appearance. Simple and Superior design, easy and fast removal. Remove both regular and wider size skin staples with no pain.",
    features: [
      "Simple and Superior design, easy and fast remove.",
      "Remove both of our regular and wider size skin stales. Save handle time and remove with no pain.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-77",
    title: "RYLE'S TUBE",
    description: "Nasogastric tube for nutritional purposes or aspiration of intestinal secretion with super smooth kink resistance tubing.",
    detailedDescription: "Designed for efficient nasogastric insertion featuring a soft rounded, closed tip with four lateral eyes. Includes markers at 50, 60 & 70cm for accurate placement and universal funnel connector. Available with DEHP free material, X-Ray opaque line, and universal luer connector in 105cm length.",
    features: [
      "Suitable for nasogastric insertion for nutritional purposes or aspiration of intestinal secretion.",
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Atraumatic, soft rounded, closed tip with four lateral eyes for efficient aspiration & administration.",
      "The tube is marked at 50,60 & 70cm from the tip for accurate placement.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded connectors for easy identification of size as per standards.",
      "X-Ray opaque line provided through out the length of Tube.",
      "Available with DEHP Free Material.",
      "Available with universal luer Connector.",
      "Tube Length : 105cm.",
      "Sterile / Disposable / Individual Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-78",
    title: "STOMACH TUBE",
    description: "Kink resistant stomach tube with atraumatic tip and four lateral eyes for efficient aspiration and administration.",
    detailedDescription: "Medical-grade stomach tube featuring super smooth kink resistance design with markers at 45, 55, 65, and 75cm for precise placement. Includes universal funnel connector, color-coded size indicators, and X-Ray opaque line throughout. Available in 105cm length with DEHP free material option.",
    features: [
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Atraumatic, soft rounded, closed tip with four lateral eyes for efficient aspiration & administration.",
      "Tube is marked at 45, 55, 65 and 75 cm from the tip for accurate placement.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded connectors for easy identification of size as per standards.",
      "X-Ray opaque line provided through out the length of Tube.",
      "Available with DEHP Free Material.",
      "Available with universal luer Connector.",
      "Open Distal end or closed distal end.",
      "Tube Length : 105cm.",
      "Sterile / Disposable / Individual Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-79",
    title: "LEVIN'S TUBE",
    description: "Gastrointestinal feeding and aspiration tube with smooth kink resistance tubing for uniform flow rate.",
    detailedDescription: "Specialized 125cm tube for gastrointestinal feeding and aspiration featuring an atraumatic rounded tip with four lateral eyes. Includes distance markers at 45, 55, 65, and 75cm for precise placement with universal funnel connector and color-coded size identification.",
    features: [
      "Suitable for gastro intestinal feeding & aspiration.",
      "Super smooth kink resistance tubing ensures uniform flow/rate.",
      "Atraumatic, soft rounded, closed tip with four lateral eyes for efficient aspiration & administration.",
      "Tube is marked at 45,55,65 and 75 cm from the tip for accurate placement.",
      "Proximal end is fitted with universal funnel shaped connector for extension.",
      "Color coded connectors for easy identification of size as per standards.",
      "Available with DEHP Free Material.",
      "Available with universal luer Connector.",
      "Tube Length: 125 cm.",
      "Sterile / Disposable / Individual Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-80",
    title: "INFANT FEEDING TUBE",
    description: "Specialized tube for neonatal and pediatric nutritional feeding with smooth kink-resistant design.",
    detailedDescription: "Pediatric feeding tube measuring 52cm with atraumatic soft rounded tip and two lateral eyes. Features female luer mount for connection to feeding funnel or syringe, color-coded connectors, and X-Ray opaque line throughout. Includes 20cm marking and optional graduation marks.",
    features: [
      "For neonatal and paedlatrlc nutritional feeding.",
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Atraumatic, soft rounded, closed tip with two lateral eyes for efficient aspiration & administration.",
      "Proximal end is fitted with female luer mount for easy connection to feeding funnel or syringe.",
      "Color coded connectors for easy identification of size as per standards.",
      "Tube is marked at 20cm away from the distal tip.",
      "X-Ray opaque line provided through out the length of Tube.",
      "Available with graduation mark after every cm.",
      "Available with DEHP Free Material.",
      "Tube Length : 52cm.",
      "Sterile / Disposable / Individual Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-81",
    title: "COLOSTOMY KIT",
    description: "Lightweight, flexible colostomy kit with comfortable belting arrangement for prolonged use.",
    detailedDescription: "Designed for perfect relief and comfort during extended use periods. Features lightweight, flexible construction with secure belting that fits the body well. Includes 15mm IT form padding between sleeve and main body for enhanced comfort. Individually packed for convenience.",
    features: [
      "The colostomy kit gives perfect relief and comfort during prolonged use.",
      "It is light weight, flexible and the belting arrangement fits the body well.",
      "15mm 'IT form padding is provided between the sleeve and main body for better comfort.",
      "Non-Sterile / Individually packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-82",
    title: "YANKAUER SUCTION SET",
    description: "Complete set for convenient removal of secretion, blood and debris during operations.",
    detailedDescription: "Professional suction set featuring Yankauer tip mounted on two-meter long ribbed tube with universal connectors at both ends. The kink-resistant ribbed tube is designed to withstand suction pressure, while soft PVC connectors accommodate various suction apparatus connections.",
    features: [
      "Yankaur Suction Set is suitable for convenient removal of secretion, blood and debris etc per operatively.",
      "Complete set is provided with Yankaur Suction Tip mounted on two meter long ribbed tube provided with Universal connector at both ends.",
      "Universal connectors are moulded from soft PVC, so as to accommodate the Suction tip on one end and all type of connectors of suction apparatus at the other end.",
      "Ribbed tube is kink resistant and has the strength to withstand the suction.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-83",
    title: "UMBILICAL CATHETER",
    description: "Catheter for umbilical artery or vein access in newborn or premature infants with smooth round tip.",
    detailedDescription: "Specialized catheter for continuous or intermittent umbilical access in newborns. Features smooth round tip for easy cannulation, open distal end to prevent clot formation, and clear scale markings every centimeter. Includes X-Ray opaque line and female luer mount for IV equipment connection.",
    features: [
      "Designed for intermittent or continuous access to the umbilical artery or vein of newly born or premature infants.",
      "Super smooth kink resistance tubing ensures uniform flowrate.",
      "Smooth round tip helps easy cannulation and silk finish surface further facilitates the passage of catheter into the vein.",
      "Open distal end without lateral eyes, eliminates the chance of clot formation in the blind spaces.",
      "X-Ray opaque line provided through out the length of Tube.",
      "Clear scale marking at every cm helps to ascertain depth of insertion.",
      "Proximal end is fitted with female luer mount for convenient connection to I.V. therapy equipment.",
      "Sterile / Disposable / Individually packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-84",
    title: "KARMAN CANNULA",
    description: "Specially designed for aseptic medical termination of pregnancy with coned distal end featuring two large lateral eyes to facilitate curette.",
    detailedDescription: "Medical-grade cannula specially designed for safe and effective medical termination of pregnancy. Features a coned distal end with two large lateral eyes for efficient tissue removal. Compatible with both MTP syringes and suction apparatus for versatile clinical use.",
    features: [
      "Specially designed for aseptic medical termination of pregnancy.",
      "Distal end is coned with two large lateral eyes to facilitates the curette.",
      "Suitable for use with MTP syringe or suction apparatus.",
      "With or Without universal adopter for connecting to suction apparatus. Sterile / Disposable / Individual Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-85",
    title: "UMBILICAL CORD CLAMP",
    description: "Device for clamping newborn umbilical cords with double-purpose security lock and finger grip for safe handling even with wet gloves.",
    detailedDescription: "Medical-grade umbilical cord clamp with double-purpose security lock system that indicates correct locking and prevents accidental reopening. Features ergonomic finger grips for secure handling with wet gloves and anti-slip grooves to prevent cord movement after placement.",
    features: [
      "Suitable for clamping the umbilical cord of new born baby immediately after the birth.",
      "Provided with double purpose security lock click to indicate the correct locking and protect against accidental reopening.",
      "Finger grip ensures safe and convenient handling, particularly when gloves are wet.",
      "Provided with grooves all along the length to prevent the sliping of the umbilical cord and to retain it in the same position.",
      "Supplied in Blue and White colors, other colors are available upon demand.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
    id: "med-86",
    title: "CORRUGATED DRAINAGE SHEET",
    description: "Extra soft PVC corrugated sheet with X-ray opaque line and multi-channel system for efficient wound drainage during operations.",
    detailedDescription: "Surgical drainage solution featuring extra-soft super smooth PVC corrugated sheet design for optimal wound drainage. Includes X-ray opaque line throughout for visibility in imaging and multi-channel drainage system for efficient fluid evacuation during surgical procedures.",
    features: [
      "Extra soft super smooth PVC corrugated sheet for wound drainage.",
      "X-ray opaque line provided throughout the length of sheet.",
      "Multi channel drainage system of efficient drainage during operation.",
      "Sterile / Disposable / Individually Packed."
    ],
    specifications: [],
    image: "/placeholder.svg",
    category: "medical"
  },
  {
  id: "med-87",
  title: "DISPOSABLE CAP",
  description: "Soft non-woven disposable cap designed to prevent hair/dandruff contamination. Comfortable and secure fit.",
  detailedDescription: "Manufactured from soft non-woven cloth, this disposable cap is specially designed to prevent patient contamination from hair or dandruff of medical personnel. It features stitched interlocking elastic for a secure grip on the forehead and a comfortable fit. Available in sterile and non-sterile options.",
  features: [
    "Manufactured from soft non-woven cloth.",
    "Specially designed to protect the patient against dropping of hair/dandruff of the doctors and other attending staff.",
    "Provided with stitched Interlocking adaptable elastic for better grip on the forehead and comfortable fitting.",
    "Available in Sterile or Non-Sterile."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-88",
  title: "DISPOSABLE FACE MASK",
  description: "Double-layer soft non-woven face mask with excellent bacterial filtration. Tie-on or ear loop options.",
  detailedDescription: "This face mask is made from soft non-woven cloth and features a double-layer design for superior bacterial filtration. Its ultrasonically welded seams ensure maximum comfort during extended use. Available in tie-on or ear loop styles, and offered in both sterile and non-sterile formats.",
  features: [
    "Manufactured from soft non-woven cloth.",
    "Double layer mask offering excellent bacterial filtration efficiency.",
    "Super smooth soft ultrasonically welded mask is most comfortable during use.",
    "Tie On or Ear loop type.",
    "Available in Sterile or Non-Sterile."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},

  {
  id: "med-89",
  title: "INFANT MUCUS EXTRACTOR",
  description: "Used for aspirating mucus in newborns. Features transparent container, smooth tip, and trauma-free insertion.",
  detailedDescription: "Specially designed to aspirate secretions from the oropharynx of newborns, ensuring clear airways. Includes a transparent container for visual inspection, a closure cap for safe transport, and a low-friction catheter with a smooth tip for trauma-free insertion. Capacity: 20–25ml. Sterile, disposable, and individually packed.",
  features: [
    "Specially designed for aspiration of secretion from Oropharynx in newly born babies to ensure free aspiration.",
    "Clear transparent container permits immediate visual examination of the aspirate.",
    "Also suitable for obtaining mucus specimen for micro biological examination.",
    "Spare closure cap is provided to seal the container for safe transportation of specimen to the laboratory or aseptic disposal of container.",
    "Low friction surface catheter is provided with open end silk smooth round tip for trauma free insertion.",
    "Capacity 20 to 25ml.",
    "Sterile / Disposable / Individually Packed"
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-90",
  title: "SPUTUM CUP",
  description: "Polypropylene cup for sputum or specimen collection. Multipurpose and individually packed.",
  detailedDescription: "Made from medical-grade polypropylene, this sputum cup can also be used for urine, excrement, or specimen collection. It ensures hygiene and durability, manufactured with precision. Each unit is individually packed for safety and convenience.",
  features: [
    "Made from Polypropylene.",
    "These cups can be alternatively used as urine, excrement or other specimen containers.",
    "With good manufacturing techniques.",
    "Individually Packed."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-91",
  title: "BED PAN",
  description: "Durable plastic bed pan with ergonomic design for patient comfort. Easy to clean and reuse.",
  detailedDescription: "The bed pan is crafted from high-grade tough plastic, designed for both children and adults. Its ergonomic, comfortable shape and durable construction make it ideal for repeated use. Disposable options are also available in packs of one, two, or five units.",
  features: [
    "The bedpan series comes in attractive designs made to be more comfortable and practical than traditional ones.",
    "It is made from tough, high grade plastic and is economically designed for utmost human comfort, durable for repeated use, easy to clean and store and suitable for children & adults.",
    "Disposable / Available in packs of One, Two & Five nos."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-92",
  title: "URINE POT",
  description: "Odourless urine pot with easy-carry handle and hygienic cover. Compact and user-friendly.",
  detailedDescription: "This urine pot comes with a hygienic, easy-fit cover and a convenient carrying handle. It can be stored either standing or lying down, offering flexible and compact storage. Each unit is individually packed for sterile use.",
  features: [
    "Easy fit cover for Hygiene and Odourless, Easy carry handle.",
    "Can be stored in standing or lying position.",
    "Individually Packed."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-93",
  title: "URINE CULTURE BOTTLE",
  description: "Leak-proof urine culture bottle made from crystal clear polypropylene. Ideal for laboratory tests.",
  detailedDescription: "This bottle is specifically designed for urine culture tests. Made from medical-grade, crystal-clear polypropylene, it ensures easy visibility and is completely leak-proof. Sterile, disposable, and individually packed for clinical hygiene and accuracy.",
  features: [
    "Specially designed for collection of urine sample for culture test. Made from crystal clear plastic for clear viewing.",
    "Made from Medical grade Polypropylene.",
    "Absolutely Leak proof.",
    "Sterile / Disposable / Individually Packed."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-94",
  title: "HIV PROTECTION KIT",
  description: "Complete protection kit with gown, gloves, mask, goggles, and customizable contents.",
  detailedDescription: "This kit includes essential protective items such as gown, gloves, goggles, cap, shoe covers, and face mask. Designed for infection control and safety. The kit can be customized as per requirement. Sterile, disposable, and individually packed.",
  features: [
    "Proto Gown -1 Pc.",
    "Surgeon's Cap (with Bacterial Filter) -1 Pc.",
    "Shoe Legging (Knee Length) -1 Pair.",
    "Latex Gloves -1 Pair.",
    "Goggles -1 Pc.",
    "Face Mask -1 Pc.",
    "Kit Can be customized upon request.",
    "Sterile / Disposable / Individual."
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},
{
  id: "med-95",
  title: "RESPIRATORY EXERCISER",
  description: "Helps restore lung function post-surgery. Enhances breathing and improves cardiopulmonary health.",
  detailedDescription: "This device helps post-operative patients restore lung function through controlled deep breathing. It visually measures progress and strengthens respiratory muscles. Improves oxygenation, circulation, and overall fitness. Assists pulmonary rehab in COPD patients. Available in single or triple ball types.",
  features: [
    "Restores and maintains lung capacity in post operative patients by slow, synchronized deep breathing.",
    "Allows visual calibration and estimation of the patient’s progress.",
    "Strengthens primary and accessory respiratory muscles and conditions them.",
    "Enhances endurance of both inspiratory and expiratory muscles.",
    "Improves respiratory parameters.",
    "Improves maximal exercise capacity.",
    "Improves cardio-pulmonary status of the patient, enhancing the overall fitness and wellbeing.",
    "Increases circulation of hormones in the blood which increase the blood flow to the heart, brain and lungs.",
    "Improves oxygenation of blood, reduces fat levels by burning calories.",
    "Assists pulmonary rehabilitation in patients with COPD, improves the quality of their life.",
    "Sustained deep breathing has been shown to relieve anxiety and fight stress.",
    "Types Available: Single Ball or Three Balls"
  ],
  specifications: [],
  image: "/placeholder.svg",
  category: "medical"
},

  // Add similar detailed information for other products
  // ...
  
  // Chemical products
  {
    id: "chem-1",
    title: "Industrial Solvent Series",
    description: "High-purity solvents designed for industrial applications requiring reliable performance.",
    detailedDescription: "Our Industrial Solvent Series represents the culmination of decades of chemical engineering excellence, offering unparalleled purity and consistency for the most demanding industrial applications. Each product in this series undergoes a proprietary multi-stage purification process to eliminate contaminants that could interfere with production processes. Available in various grades to match specific industry requirements, these solvents are trusted by leading manufacturers across aerospace, pharmaceutical, and electronics industries.",
    features: [
      "99.9%+ purity across all products in the series",
      "Low water content (<50 ppm) for moisture-sensitive applications",
      "Batch-to-batch consistency with comprehensive CoA documentation",
      "Available in various package sizes from 1L to bulk delivery options",
      "Extended shelf life with proper storage conditions"
    ],
    specifications: [
      "Purity: >99.9% (varies by specific product)",
      "Packaging: Borosilicate glass or high-density polyethylene",
      "Storage recommendations: Cool, dry location away from direct sunlight",
      "Available container sizes: 1L, 4L, 20L, 200L, and bulk",
      "Regulatory compliance: ISO 9001, REACH, RoHS"
    ],
    image: "/placeholder.svg",
    category: "chemical",
  },
  // Add similar detailed information for other products
  // ...
];

// For demo purposes, let's create a function to generate dummy detailed data for products
// In a real application, you would have this data in your database
const getProductDetails = (id: string) => {
  const baseProduct = allProducts.find(p => p.id === id);
  
  // If we have preloaded detailed information
  if (baseProduct && (baseProduct.detailedDescription || baseProduct.features)) {
    return baseProduct;
  }
  
  // Otherwise generate some dummy detailed content
  const foundProduct = [...medicalProducts, ...chemicalProducts].find(p => p.id === id);
  
  if (!foundProduct) return null;
  
  return {
    ...foundProduct,
    detailedDescription: `Detailed information about ${foundProduct.title}. This premium product represents the highest quality standards in the ${foundProduct.category} industry. With years of research and development, we've created a solution that meets the most demanding requirements of professionals in the field.`,
    features: [
      "High-quality materials for durability and reliability",
      "Advanced technology integration for optimal performance",
      "User-friendly design based on professional feedback",
      "Comprehensive quality control testing",
      "Industry-leading warranty and support"
    ],
    specifications: [
      `Material: Premium-grade components`,
      `Certification: ISO 9001:2015, CE Mark`,
      `Warranty: 2-year standard warranty`,
      `Country of Origin: Manufactured in our state-of-the-art facilities`,
      `Support: 24/7 technical assistance available`
    ]
  };
};

// Example product lists (imported from previous files)
import { medicalProducts } from "./MedicalProducts";
import { chemicalProducts } from "./ChemicalProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to get product details
    const fetchProduct = async () => {
      setLoading(true);
      // In a real application, you would fetch from an API
      const productData = getProductDetails(id || "");
      setProduct(productData);
      setLoading(false);
    };
    
    fetchProduct();
  }, [id]);
  
  useEffect(() => {
    if (product) {
      document.title = `${product.title} | AMANAH CHEMPHARM`;
    }
  }, [product]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-20 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-64 h-6 bg-gray-200 rounded mb-4"></div>
            <div className="w-40 h-4 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Return to Homepage</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const isChemical = product.category === "chemical";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link 
              to={isChemical ? "/chemical-products" : "/medical-products"} 
              className={`group flex items-center ${isChemical ? "text-pharma-teal" : "text-pharma-blue"} hover:opacity-80 transition-colors`}
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to {isChemical ? "Chemical" : "Pharmaceutical"} Products
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              {/* Product image - takes up left side on desktop */}
              <div className="md:w-1/2 bg-gray-100">
                <div className="h-full flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="object-contain max-h-[500px] w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
              
              {/* Product details - takes up right side on desktop */}
              <div className="md:w-1/2 p-8">
                <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                  isChemical ? 'bg-pharma-teal text-white' : 'bg-pharma-blue text-white'
                }`}>
                  {isChemical ? 'Chemical' : 'pharmaceutical'}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Details</h2>
                  <p className="text-gray-600">{product.detailedDescription}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.features?.map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h2>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.specifications?.map((spec: string, index: number) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Button 
                    className={isChemical ? 'bg-pharma-teal hover:bg-pharma-teal/80' : 'bg-pharma-blue hover:bg-pharma-blue/80'}
                    onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Information
                  </Button>
                  
                  <Link to="/#contact">
                    <Button 
                      variant="outline" 
                      className={`w-full sm:w-auto ${isChemical ? 'border-pharma-teal text-pharma-teal' : 'border-pharma-blue text-pharma-blue'} hover:bg-gray-50`}
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
