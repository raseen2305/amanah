import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Extended list of dummy medical products
export const medicalProducts = [
  {
    id: "med-1",
    title: "CENTRAL VENOUS CATHETER KIT",
    description: "Comprehensive medical kit designed for safe, sterile, and effective central venous catheter insertion procedures.",
    image: "/assests/medical/central venous/1.jpeg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Surgical Equipment
  },
   {
    id: "med-2",
    title: "HEMODIALYSIS CATHETER KIT",
    description: "Sterile, dual-lumen catheter kit designed for reliable, long-term vascular access during hemodialysis procedures.",
    image: "/assests/medical/central venous/2.jpeg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Surgical Equipment
  },
  {
    id: "med-3",
    title: "BLOOD TUBING SET",
    description: "Flexible, medical-grade tubing set for safe, efficient blood transfer during hemodialysis treatment sessions.",
    image: "/assests/medical/central venous/3.jpeg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Surgical Equipment
  },
  {
    id: "med-4",
    title: "PERITONEAL TRANSFUSION DIALYSIS KIT",
    description: "Complete sterile kit for safe, effective peritoneal dialysis and transfusion fluid administration procedures.",
    image: "/assests/medical/central venous/4.jpeg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Surgical Equipment
  },
  {
    id: "med-5",
    title: "PERITONEAL TRANSFUSION DIALYSIS SET",
    description: "Sterile, high-quality set designed for efficient peritoneal dialysis and safe transfusion fluid delivery.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Diagnostic Tools
  },
  {
    id: "med-6",
    title: "A.V. FISTULA NEEDLE",
    description: "Precision-engineered needle for repeated vascular access in dialysis via arteriovenous fistula sites.",
    image: "/assests/medical/central venous/6.jpeg",
    category: "medical" as const,
    subcategory: "pharma-cat-1" // Patient Care
  },
   {
    id: "med-7",
    title: "INFUSION SET",
    description: "Super smooth kink-resistant tubing with clear drip chamber, sharp piercing spike, and adjustable roller clamp. Available with multiple options including airvent, needle, and Y-connection.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-8",
    title: "BLOOD DONOR SETS",
    description: "Smooth kink-resistant tubing with G16 extra sharp needle for effortless vein puncture. Features easy-to-use roller clamp for safe control and adjustment of fluid rates.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-9",
    title: "INSULIN SYRINGE",
    description: "Advanced uni-body design with low dead space for dosage accuracy. Features ultra-thin wall needles for rapid delivery and clear barrel with bold markings for precise medication administration.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-10",
    title: "SAFETY IV CANNULA",
    description: "Passive fully automatic protection system with needle tip enclosed in plastic cage after removal to prevent needle stick injuries. Similar in size and technique to conventional IV cannulas.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-11",
    title: "SCALP VEIN SET",
    description: "Butterfly set for long-term infusion with short beveled siliconized needle for atraumatic cannulation. Features thin wall needle for better flow rate and color-coded wings for easy gauge identification.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-12",
    title: "EXTENSION TUBE",
    description: "Kink-resistant tubing with male and female luer lock connectors. Available with various options including Y-connection, clamp, and customizable inner and outer diameters.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-13",
    title: "THREE WAY STOPCOCK",
    description: "Transparent polycarbonate body with 6% luer taper and directional arrow indicators. Features rotating dead space for accurate drug administration and pressure tested up to 60 PSI.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-14",
    title: "PRESSURE MONITORING LINE",
    description: "High-pressure monitoring line for connection between syringe infusion pump and patient. Features universal male and female luer locks to ensure secure fit with standard equipment.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-15",
    title: "INJECTION STOPPER",
    description: "Thread stopper with injection site to prevent leakage when connected to infusion devices. Features latex-free plug with leakage-free fitting for effective flushing of catheter or blood sampling.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-16",
    title: "BLOOD TRANSFUSION SETS",
    description: "Specialized set for transfusion of blood or blood components. Features 200 micron blood filter, clear drip chamber, and smooth roller clamp. Available in various configurations including double chamber options.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-17",
    title: "DISPOSABLE SYRINGE",
    description: "Transparent barrel for easy measurement with friction-free TPE gasket for smooth plunger movement. Features ultra-thin wall needles for efficient drug delivery with precise tip sharpness.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-18",
    title: "IV CANNULA",
    description: "Features flash back chamber for quick visualization of venous return with specially designed wings for easy gripping. Includes triple-point needle for painless insertion and radio-opaque Teflon catheter.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-19",
    title: "IV CANNULA FIXATOR",
    description: "Thin polyurethane film fixator available in transparent and non-woven variants. Breathable and waterproof with reinforced notches to reduce mechanical stress from heavy catheters.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-20",
    title: "MEASURED VOLUME BURETTE SET",
    description: "Transparent cylindrical measured volume chamber with auto shut-off valve that prevents air trapping. Features separate plug for extra medication and continuous changeover in 110ml and 150ml sizes.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-21",
    title: "IV FLOW REGULATER",
    description: "Extension set designed to regulate IV fluid flow from 5ml/hr to 250ml/hr manually. Features built-in Y-connector injection site for extra medication and two-hand operation to prevent accidental tampering.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-22",
    title: "THREE WAY STOPCOCK WITH EXTENSION TUBE",
    description: "Kink-resistant extension tube with three-way stopcock and directional arrow indicators. Features crystal clear transparent channel with minimum priming volume for accurate drug administration.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-23",
    title: "LUER LOCK",
    description: "Thread stopper used to prevent leakage when connected to infusion devices. White color design with sterile, disposable packaging for single use applications.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  {
    id: "med-24",
    title: "CVP MANOMETER",
    description: "Specially designed to measure and monitor central venous pressure with graduations from -4cm to +34cm. Features sliding indicator to record readings and moulded clamps for fixation to IV stand.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-2" // Patient Care
  },
  { 
  id: "med-25", 
  title: "URINE COLLECTION BAG", 
  description: "Drainage system with smooth kink-resistant tube, non-return valve, and graduated measurements for accurate volume monitoring.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-26", 
  title: "PAEDIATRIC URINE COLLECTION BAG", 
  description: "Hypoallergenic adhesive pediatric collection system with minimal allergy risk in 100ML and 200ML capacities.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-27", 
  title: "NELATON CATHETER", 
  description: "Short-term bladder catheter with smooth tubing, atraumatic tip and lateral eyes for efficient drainage.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-28", 
  title: "FOLEY BALLOON CATHETER LATEX", 
  description: "Silicone-coated latex catheter with high-strength polymer layer delivering superior flow rates and minimal encrustation.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-29", 
  title: "MALE EXTERNAL CATHETER", 
  description: "Pure latex external device with self-adhesive strip for secure fixation during day and night use.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-30", 
  title: "RECTAL CATHETER", 
  description: "Atraumatic device for enema administration with smooth tubing and lateral eyes for efficient fluid management.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-31", 
  title: "DOUBLE J STENT", 
  description: "Radio-opaque polyurethane stent for temporary internal drainage from ureteropelvic junction to bladder with low encrustation.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-32", 
  title: "LEG URINE COLLECTION BAG", 
  description: "Leg-attached mobility-friendly drainage system with non-return valve and clear graduation for volume monitoring.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-33", 
  title: "URINE COLLECTION BAG WITH MEASURED VOLUME CHAMBER", 
  description: "Hourly output measurement system with auto-overflow function and closed circuit design preventing contamination risk.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-34", 
  title: "TUR SET", 
  description: "Y-shaped endoscopic irrigation system with thumb-operated clamps for smooth changeover during transurethral resection procedures.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-35", 
  title: "FOLEY BALLOON CATHETER SILICONE", 
  description: "100% medical-grade silicone catheter with symmetrical balloon and X-ray opaque line for position confirmation.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-36", 
  title: "FEMALE CATHETER", 
  description: "Short-term urethral catheter with atraumatic tip and color-coded connectors for size identification in female patients.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-37", 
  title: "URETHRAL CATHETER", 
  description: "Short-term bladder device with smooth surface, efficient drainage eyes and X-ray opaque line for visualization.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-3" // Patient Care 
},
{ 
  id: "med-38", 
  title: "TWINS BORE NASAL OXYGEN SET", 
  description: "Kink-resistant tubing with star lumen design, soft twin prong nasal tips, and adjustable comfort features for efficient oxygen administration.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" 
},
{ 
  id: "med-39", 
  title: "NASAL OXYGEN CATHETER", 
  description: "Smooth kink-resistant tubing with atraumatic rounded tip, lateral eyes for oxygen dispersion, and universal funnel connector.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-40", 
  title: "OXYGEN MASK", 
  description: "Anatomically formed soft mask with feathered edges, adjustable elastic strip, and star lumen tube preventing blockage.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-41", 
  title: "GUEDEL AIRWAYS", 
  description: "Oropharyngeal airway device with bite block, rounded edges, and color-coded design for maintaining unobstructed airflow.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-42", 
  title: "SUCTION CATHETER WITH THUMB CONTROL", 
  description: "Smooth kink-resistant catheter with atraumatic tip, lateral eyes, and thumb control valve for controlled secretion removal.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-43", 
  title: "SUCTION CATHETER WITH FINGERTIP CONTROL", 
  description: "Kink-resistant catheter with atraumatic tip and fingertip control valve for precise secretion removal from trachea and bronchial region.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-44", 
  title: "SUCTION CATHETER PLAIN", 
  description: "Kink-resistant catheter with atraumatic tip, lateral eyes, and universal funnel connector for standard suction equipment.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-45", 
  title: "ENDORTRACHEAL TUBE CUFFED & PLAIN", 
  description: "Thermosensitive PVC tube with high-volume low-pressure cuff, X-ray detective line, Murphy eye, and universal connector.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-46", 
  title: "REINFORCED CUFFED & PLAIN", 
  description: "Metal-reinforced tube with kink prevention, radiopaque line, high volume/low pressure cuff, and universal connector.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-47", 
  title: "L.P.SPINAL NEEDLE", 
  description: "Spinal needle with exceptional dura control, high flow rate for faster CSF flashback, and clear polycarbonate hub.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-48", 
  title: "NEBULIZER MASK", 
  description: "Mask with feathered edges, adjustable elastic strip, standard nebulizer fitting, and star lumen tube for direct medication delivery.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-49", 
  title: "MULTIFLOW VENTURI MASK", 
  description: "Oxygen mask with 6 concentration diluters, feathered edges, adjustable elastic strip, and star lumen tube for controlled oxygen therapy.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-50", 
  title: "SINGLE DIAL VENTURI MASK", 
  description: "Oxygen therapy mask with two selective oxygen diluters, transparent design, and star lumen tube for precise oxygen concentration control.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-51", 
  title: "HIGH CONCENTRATION OXYGEN MASK", 
  description: "Oxygen mask with reservoir bag to avoid rebreathing, feathered edges for comfort, and star lumen tube for high-concentration therapy.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-52", 
  title: "T OXYGENATOR", 
  description: "T-Piece recovery kit with 7.6mm suction port, 22mm reservoir tube and oxygen stem for delivery via ET connection or laryngeal mask.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-53", 
  title: "T-PC. FOR NEBULIZER", 
  description: "Quick-assembly nebulizer with rotatable sections for patient positioning flexibility, compatible with masks, iGel, LMA and ET tubes.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-54", 
  title: "CATHETER MOUNT", 
  description: "Lightweight double-swivel connector with 360° rotation, minimal compliance, and elbow port for easy suctioning without breathing circuit disruption.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-55", 
  title: "BAIN CIRCUITS", 
  description: "Co-axial modification system for scavenging waste anesthetic gases with fresh gas delivery through inner tube and expiration into reservoir tube.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-56", 
  title: "VENTILATOR CIRCUITS", 
  description: "High-quality flexible corrugated tubes with excellent bending resistance and standard connectors for efficient and safe mechanical ventilation.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-57", 
  title: "BREATHING FILTERS", 
  description: "Hydrophobic membrane filters with >99.99% bacterial removal efficiency, low airflow resistance, and options for CO2 monitoring.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-58", 
  title: "TRACHEOSTOMY TUBE", 
  description: "Thermo-sensitive kink-resistant tube with lockable obturator, radio-opaque line, and universal connector for mechanical ventilation.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-59", 
  title: "NASOPHARYNGEAL AIRWAYS", 
  description: "Anatomically designed emergency airways with smooth round edges, thin wall and kink resistance for patient comfort.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-60", 
  title: "PVC LARYNGEAL MASK", 
  description: "Supraglottic non-invasive airway device with anatomical mask, radio-opaque line, and pilot balloon for cuff management.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-61", 
  title: "AMBU BAGS", 
  description: "Self-refilling ventilation bags with non-rebreathing valve, pressure limitation valve, oxygen reservoir, and disassembly capability for cleaning.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-62", 
  title: "SUCTION CATHETER CLOSED SYSTEM", 
  description: "Ventilation-maintaining system with replaceable catheters, MDI port for drug delivery, and irrigation port to minimize VAP risk.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-63", 
  title: "EPIDURAL NEEDLE", 
  description: "Tuohy-type needle with 10mm depth markings, fixed wings, and polished inner bevel to minimize catheter shearing risk.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{ 
  id: "med-64", 
  title: "EPIDURAL CATHETER", 
  description: "Plasticizer-free, latex-free polymer catheter with soft tip, lateral eyes, depth markings, and radio-opaque line for clear visualization.", 
  image: "/placeholder.svg", 
  category: "medical" as const, 
  subcategory: "pharma-cat-4" // Patient Care 
},
{
  id: "med-65",
  title: "CLOSE WOUND SUCTION UNIT",
  description: "Effective device for dosed wound drainage under negative pressure with option to use one or two catheters simultaneously.",
  image: "/placeholder.svg",
  category: "medical"  as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-66",
  title: "MINI CLOSE WOUND SUCTION UNIT",
  description: "Specially designed wound drainage system under negative pressure for minor surgery and plastic surgery.",
  image: "/placeholder.svg",
  category: "medical"  as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-67",
  title: "CHEST DRAINAGE CATHETER",
  description: "Specially designed for rapid non-operative pleural and chest drainage with super smooth kink resistance tubing.",
  image: "/placeholder.svg",
  category: "medical"  as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-68",
  title: "CHEST DRAINAGE BOTTLE",
  description: "Single use disposable unit designed to forward collected drainage into collection chamber by liquid static suction effects.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-69",
  title: "CHEST DRAINAGE KIT",
  description: "Kit includes all essentials to perform chest drainage and permit safe mobilisation of patients when underwater seals aren't practical.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-70",
  title: "ABDOMINAL DRAIN KIT",
  description: "Specially designed for post operative abdominal drainage with soft catheter and 2000ml collection bag.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-71",
  title: "UNDER WATER SEALED DRAINAGE BAG",
  description: "Under water seal drainage system for collection of drainage fluid from thoracic cavity with 1000ml capacity.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-72",
  title: "REDON DRAIN CATHETER",
  description: "Drainage catheter with radio-opaque line, smooth eyes, and markings at 19cms from distal tip.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-73",
  title: "BIOPSY NEEDLE",
  description: "Safe and painless percutaneous insertion and penetration with reduced tissue shear for precise biopsies.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-74",
  title: "BONE MARROW BIOPSY NEEDLE",
  description: "Ergonomic handle with remover guide featuring indicators to facilitate sample expulsion and length checking during procedure.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-75",
  title: "SKIN STAPLER",
  description: "Disposable instrument for surgical skin suture with quick operation speed and minimal tissue reaction.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-76",
  title: "STAPLER REMOVER",
  description: "Specially designed for removing skin staples with easy structure and novel appearance for painless staple removal.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-65",
  title: "CLOSE WOUND SUCTION UNIT",
  description: "Effective device for dosed wound drainage under negative pressure with option to use one or two catheters simultaneously.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-66",
  title: "MINI CLOSE WOUND SUCTION UNIT",
  description: "Specially designed wound drainage system under negative pressure for minor surgery and plastic surgery.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-67",
  title: "CHEST DRAINAGE CATHETER",
  description: "Specially designed for rapid non-operative pleural and chest drainage with super smooth kink resistance tubing.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-68",
  title: "CHEST DRAINAGE BOTTLE",
  description: "Single use disposable unit designed to forward collected drainage into collection chamber by liquid static suction effects.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-69",
  title: "CHEST DRAINAGE KIT",
  description: "Kit includes all essentials to perform chest drainage and permit safe mobilisation of patients when underwater seals aren't practical.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-70",
  title: "ABDOMINAL DRAIN KIT",
  description: "Specially designed for post operative abdominal drainage with soft catheter and 2000ml collection bag.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-71",
  title: "UNDER WATER SEALED DRAINAGE BAG",
  description: "Under water seal drainage system for collection of drainage fluid from thoracic cavity with 1000ml capacity.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-72",
  title: "REDON DRAIN CATHETER",
  description: "Drainage catheter with radio-opaque line, smooth eyes, and markings at 19cms from distal tip.",
  detailedDescription: "Specialized drainage catheter featuring super smooth kink-resistant tubing for consistent flow rate. Includes cross-perforated length of 14cm, visible markings at 19cm from distal tip, and radio-opaque line throughout for visualization. Available in DEHP-free material.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-73",
  title: "BIOPSY NEEDLE",
  description: "Safe and painless percutaneous insertion and penetration with reduced tissue shear for precise biopsies.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-74",
  title: "BONE MARROW BIOPSY NEEDLE",
  description: "Ergonomic handle with remover guide featuring indicators to facilitate sample expulsion and length checking during procedure.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-75",
  title: "SKIN STAPLER",
  description: "Disposable instrument for surgical skin suture with quick operation speed and minimal tissue reaction.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
{
  id: "med-76",
  title: "STAPLER REMOVER",
  description: "Specially designed for removing skin staples with easy structure and novel appearance for painless staple removal.",
  image: "/placeholder.svg",
  category: "medical" as const,
  subcategory: "pharma-cat-5"
},
 {
    id: "med-77",
    title: "RYLE'S TUBE",
    description: "Nasogastric tube for nutritional purposes or aspiration of intestinal secretion with super smooth kink resistance tubing.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-78",
    title: "STOMACH TUBE",
    description: "Kink resistant stomach tube with atraumatic tip and four lateral eyes for efficient aspiration and administration.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-79",
    title: "LEVIN'S TUBE",
    description: "Gastrointestinal feeding and aspiration tube with smooth kink resistance tubing for uniform flow rate.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-80",
    title: "INFANT FEEDING TUBE",
    description: "Specialized tube for neonatal and pediatric nutritional feeding with smooth kink-resistant design and lateral eyes.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-81",
    title: "COLOSTOMY KIT",
    description: "Lightweight, flexible colostomy kit with comfortable belting arrangement and IT form padding for prolonged use.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-82",
    title: "YANKAUER SUCTION SET",
    description: "Complete set for convenient removal of secretion, blood and debris with kink-resistant ribbed tube and universal connectors.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
  {
    id: "med-83",
    title: "UMBILICAL CATHETER",
    description: "Catheter for umbilical artery or vein access in newborns with smooth round tip and clear scale markings.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-6"
  },
    {
    id: "med-84",
    title: "KARMAN CANNULA",
    description: "Specially designed for aseptic medical termination of pregnancy with coned distal end and two large lateral eyes.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-85",
    title: "UMBILICAL CORD CLAMP",
    description: "Cord clamp for newborns with double purpose security lock and finger grip for safe handling even with wet gloves.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-86",
    title: "CORRUGATED DRAINAGE SHEET",
    description: "Extra soft PVC corrugated sheet for wound drainage with X-ray opaque line and multi-channel drainage system.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-87",
    title: "DISPOSABLE CAP",
    description: "Soft non-woven cloth cap designed to protect patients from hair/dandruff with stitched interlocking elastic for comfort.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-88",
    title: "DISPOSABLE FACE MASK",
    description: "Double-layer non-woven mask with excellent bacterial filtration and ultrasonically welded construction for comfort.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-89",
    title: "INFANT MUCUS EXTRACTOR",
    description: "Device for aspirating secretions from newborn oropharynx with transparent container for visual examination of aspirate.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-90",
    title: "SPUTUM CUP",
    description: "Polypropylene cups for sputum collection that can also be used for urine, excrement or other specimen containers.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-91",
    title: "BED PAN",
    description: "Comfortable and practical bedpan made from tough, high-grade plastic designed for repeated use and easy cleaning.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-92",
    title: "URINE POT",
    description: "Convenient urine collection container with easy-fit cover for hygiene and odor control with carry handle.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-93",
    title: "URINE CULTURE BOTTLE",
    description: "Crystal clear plastic bottle for urine sample collection made from medical-grade polypropylene with leak-proof design.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-94",
    title: "HIV PROTECTION KIT",
    description: "Complete protection kit including proto gown, cap, shoe leggings, gloves, goggles and face mask for healthcare safety.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },
  {
    id: "med-95",
    title: "RESPIRATORY EXERCISER",
    description: "Device to restore lung capacity in post-operative patients through synchronized deep breathing with visual calibration.",
    image: "/placeholder.svg",
    category: "medical" as const,
    subcategory: "pharma-cat-7"
  },

  // Add more products as needed
];

// Map of category IDs to their names
const categoryNames = {
  "pharma-cat-1": "Central Venous Access & Dialysis",
  "pharma-cat-2": "Infusion & Transfusion",
  "pharma-cat-3": "Urology",
  "pharma-cat-4": "Anesthesia",
  "pharma-cat-5": "Surgery",
  "pharma-cat-6": "Gastroentrology",
  "pharma-cat-7": "Miscelleneous",
};

const MedicalProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  // Title based on category
  const pageTitle = categoryFilter ? `${categoryNames[categoryFilter] || "Pharmaceutical Products"}` : "All Pharmaceutical Products";
  
  const filteredProducts = medicalProducts.filter(product => {
    // Filter by search term
    const matchesSearch = 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category if specified
    const matchesCategory = categoryFilter ? product.subcategory === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to={categoryFilter ? "/pharma-cat" : "/"} className="group flex items-center text-pharma-blue hover:text-pharma-teal transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {categoryFilter ? "Back to Categories" : "Back to Home"}
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pharma-blue mb-4">{pageTitle}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {categoryFilter 
                ? `Browse our selection of high-quality ${categoryNames[categoryFilter] || "pharmaceutical"} products.`
                : "Explore our complete range of high-quality pharmaceutical products designed for healthcare professionals."}
            </p>
            
            <div className="mt-6 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pharma-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching your search.</p>
              {categoryFilter && (
                <Button 
                  variant="outline" 
                  className="mt-4 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white"
                  onClick={() => window.location.href = "/medical-products"}
                >
                  View All Products
                </Button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MedicalProducts;