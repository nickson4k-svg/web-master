# AI Art & Photography Prompts — Persona.AI

This document provides ready-to-use, ultra-detailed prompts for generating character portraits, social feed posts, and background assets using **Flux.1 [dev/schnell]**, **Midjourney v6.1**, or **ChatGPT / DALL-E 3**.

---

## Universal Negative Prompt
Use this negative prompt (or `--no` parameter in Midjourney) across all generations:
```text
deformed hands, extra fingers, missing fingers, mutated hands, plastic skin, oversmoothed, waxy skin, airbrushed, cartoon, doll-like, asymmetrical eyes, distorted pupils, text, watermark, logo, banner, blurry, grainy noise, low resolution, bad anatomy
```

---

## 1. Hero Background Asset
- **File location:** `public/hero-bg.webp`
- **Aspect ratio:** 16:9 (`--ar 16:9` in Midjourney)
- **Prompt:**
```text
Cinematic dark abstract studio background, deep obsidian and charcoal tones with delicate volumetric light streaks in cyan #38BDF8 and vibrant coral #FF6B4A, soft ambient bokeh, smooth gradients, ethereal glowing dust motes floating in 3D space, high dynamic range, 8k resolution, minimalist high-tech aesthetic, subtle glass refractions --ar 16:9 --style raw --v 6.1
```

---

## 2. Character 1: Kai Morrow (@kai.moves)
- **Niche:** Sport & Extreme Travel | **Accent:** Coral `#FF6B4A` | **Age:** 28 | **Gender:** Male
- **Appearance:** Athletic build, sun-kissed tanned skin, short dark textured hair with fade, subtle stubble, energetic focused hazel eyes, confident genuine smile.
- **Midjourney Character Consistency:** Use `--cref [URL_OF_PORTRAIT]` with `--cw 85`.

### 2.1 Main Portrait
- **File:** `public/bloggers/kai/portrait.webp` (Aspect 4:5, e.g. 1200×1500)
- **Prompt:**
```text
Medium close-up portrait of a 28-year-old athletic male athlete, Kai Morrow, sun-kissed tanned skin with natural visible skin pores and fine skin texture, short textured dark hair with neat taper fade, subtle well-groomed stubble, intense hazel eyes, friendly confident smile, wearing a technical high-performance coral-orange windbreaker unzipped slightly. Shot on Hasselblad H6D-100c, 85mm f/1.4 lens, shallow depth of field with cinematic blurred mountain horizon during golden sunrise, soft rim light highlighting shoulders, hyper-realistic, authentic commercial photography, no plastic smoothing --ar 4:5 --style raw --v 6.1
```

### 2.2 Feed Posts (6 Posts)
1. **`post-1.webp` (Sunrise Peak):**
   ```text
   Kai Morrow standing triumphantly at the edge of a jagged alpine mountain cliff at dawn, athletic silhouette, holding trail running hydration vest, sunrise golden light spilling over misty peaks, ultra-realistic sports photography, 35mm lens --ar 1:1 --style raw
   ```
2. **`post-2.webp` (Gym Conditioning):**
   ```text
   Kai Morrow in a sleek modern functional fitness gym, chalk on muscular hands, lifting kettlebell, bead of sweat on brow with authentic skin texture, dynamic motion blur on background, dramatic rim lighting --ar 1:1 --style raw
   ```
3. **`post-3.webp` (Iceland Trail):**
   ```text
   Kai Morrow hiking through black volcanic sand in Iceland, steam vents in background, high-tech weather-proof gear with subtle coral accents, windy hair, authentic outdoors documentary style --ar 1:1 --style raw
   ```
4. **`post-4.webp` (Nutrition & Coffee):**
   ```text
   Kai Morrow sitting at an outdoor rustic café after a marathon run, holding an iced matcha and healthy bowl, candid laugh, natural sunlight through leaves, authentic lifestyle portrait --ar 1:1 --style raw
   ```
5. **`post-5.webp` (Marathon Finish):**
   ```text
   Kai Morrow crossing marathon finish line, arms raised in pure joy, race bib pinned on running singlet, crowds blurred in background, high-speed shutter freezing motion --ar 1:1 --style raw
   ```
6. **`post-6.webp` (Night Run):**
   ```text
   Kai Morrow jogging along an illuminated coastal promenade at twilight, reflective running shoes and technical gear catching LED streetlight reflections, cinematic sports editorial --ar 1:1 --style raw
   ```

---

## 3. Character 2: Adrian Voss (@adrian.tech)
- **Niche:** AI & Future Tech | **Accent:** Ice Blue `#38BDF8` | **Age:** 34 | **Gender:** Male
- **Appearance:** Intellectual, sharp groomed dark beard, smart tailored minimalist clothing, dark tortoiseshell glasses or wireframes, piercing calm grey-blue eyes.

### 3.1 Main Portrait
- **File:** `public/bloggers/adrian/portrait.webp` (Aspect 4:5)
- **Prompt:**
```text
Studio portrait of a 34-year-old tech founder and AI architect Adrian Voss, neat sculpted dark beard, styled dark brown hair, sharp intelligent blue-grey eyes looking directly at camera with mild sarcastic confidence, wearing a black merino wool turtleneck under a tailored charcoal unstructured blazer. Shot on Sony A1, 90mm f/2.8 macro prime lens, crisp natural micro-skin details, pores and subtle laugh lines, dramatic dual lighting with subtle cool ice-blue #38BDF8 edge light and soft key light, blurred modern architectural glass office background with blurred city bokeh --ar 4:5 --style raw --v 6.1
```

### 3.2 Feed Posts (6 Posts)
1. **`post-1.webp` (Keynote Presentation):**
   ```text
   Adrian Voss speaking on a dimly lit futuristic tech conference stage, holding modern presentation remote, giant holographic screen behind with AI architecture diagram, dramatic stage spotlighting --ar 1:1 --style raw
   ```
2. **`post-2.webp` (Clean Desk Setup):**
   ```text
   Minimalist Scandinavian workstation with ultra-wide curved OLED monitor displaying Python AI code, mechanical keyboard, espresso cup, Adrian's hands typing with natural watch and cuff details --ar 1:1 --style raw
   ```
3. **`post-3.webp` (Robotics Lab):**
   ```text
   Adrian Voss examining an advanced bionic robotic hand in a clean research and development laboratory, glass walls with circuit schematics, soft diffused cool lighting --ar 1:1 --style raw
   ```
4. **`post-4.webp` (Airport Transit):**
   ```text
   Adrian Voss waiting at airport lounge with Rimowa suitcase, holding coffee, looking thoughtfully out at tarmac at twilight, reflective glass, documentary editorial photography --ar 1:1 --style raw
   ```
5. **`post-5.webp` (Podcast Studio):**
   ```text
   Adrian Voss in a soundproof studio with professional Shure SM7B microphone and headphones, mid-conversation gesture, warm amber acoustic paneling background, authentic podcast still --ar 1:1 --style raw
   ```
6. **`post-6.webp` (Rooftop Evening):**
   ```text
   Adrian Voss standing on a Tokyo skyscraper rooftop at blue hour, city neon lights below, wind in coat, thoughtful calm expression, cinematic Blade Runner subtle aesthetic --ar 1:1 --style raw
   ```

---

## 4. Character 3: Mira Solen (@mira.solen)
- **Niche:** High Fashion & Lifestyle | **Accent:** Amber Gold `#F59E0B` | **Age:** 26 | **Gender:** Female
- **Appearance:** High-fashion editorial beauty, defined cheekbones, honey-amber eyes, sleek chestnut or caramel hair, refined natural makeup.

### 4.1 Main Portrait
- **File:** `public/bloggers/mira/portrait.webp` (Aspect 4:5)
- **Prompt:**
```text
High fashion beauty portrait of a 26-year-old editorial fashion model Mira Solen, striking defined bone structure, warm honey-amber eyes, glossy natural lips, sleek caramel-brown hair swept back elegantly, wearing a minimalist silk champagne blazer with sculpted shoulders and fine gold architectural jewelry. Shot on Leica SL2 with 75mm Noctilux lens at f/1.2, golden hour studio lighting, authentic skin texture with individual pores and natural freckles, warm amber #F59E0B soft gradient glow in backdrop, ultra-detailed Vogue editorial cover quality --ar 4:5 --style raw --v 6.1
```

### 4.2 Feed Posts (6 Posts)
1. **`post-1.webp` (Paris Fashion Week):**
   ```text
   Mira Solen walking across cobblestone bridge in Paris near Pont Alexandre III during twilight, wearing avant-garde sculptural trench coat, paparazzi flash effect, high-motion editorial fashion shot --ar 1:1 --style raw
   ```
2. **`post-2.webp` (Backstage Mirror):**
   ```text
   Mira Solen looking in ornate vanity mirror backstage at runway show, makeup brushes, soft incandescent bulbs reflected in glass, candid elegant gaze --ar 1:1 --style raw
   ```
3. **`post-3.webp` (Mediterranean Villa):**
   ```text
   Mira Solen in a linen ivory dress reclining on sunlounger overlooking Amalfi coast cliff, vintage sunglasses, glass of sparkling water with lemon, warm summer glow --ar 1:1 --style raw
   ```
4. **`post-4.webp` (Minimalist Art Gallery):**
   ```text
   Mira Solen standing before a massive textured abstract canvas in a brutalist modern art gallery, dramatic architectural shadows, monochrome outfit with amber scarf --ar 1:1 --style raw
   ```
5. **`post-5.webp` (Jewelry Detail):**
   ```text
   Macro close-up of Mira Solen's hands and collarbone wearing sculptural solid gold rings and statement ear cuff, soft focus skin texture, luxury campaign aesthetic --ar 1:1 --style raw
   ```
6. **`post-6.webp` (Cocktail Lounge):**
   ```text
   Mira Solen at intimate velvet bar booth, crystal glass of negroni, warm candle flicker lighting, laughing softly with friend just out of frame, cinematic 35mm film grain --ar 1:1 --style raw
   ```

---

## 5. Character 4: Lena Hart (@lena.hart)
- **Niche:** Wellness & Creativity | **Accent:** Lime Green `#84CC16` | **Age:** 29 | **Gender:** Female
- **Appearance:** Natural radiant warmth, soft wavy honey-blonde hair, soft green-hazel eyes, light freckles over nose, relaxed mindful aura.

### 5.1 Main Portrait
- **File:** `public/bloggers/lena/portrait.webp` (Aspect 4:5)
- **Prompt:**
```text
Candid natural portrait of a 29-year-old wellness author and ceramic artist Lena Hart, luminous dewy skin with authentic fine freckles across nose and cheeks, soft wavy honey-blonde hair falling naturally around shoulders, gentle emerald-hazel eyes, sincere calm warm smile, wearing an oatmeal-colored organic chunky knit sweater. Shot on Canon EOS R5 with 85mm f/1.4 lens, diffused morning light from an expansive artist loft window, lush monstera and olive plants softly out of focus in background with ceramic clay vases, subtle lime-green botanical freshness, true-to-life hyper-realism without AI waxiness --ar 4:5 --style raw --v 6.1
```

### 5.2 Feed Posts (6 Posts)
1. **`post-1.webp` (Pottery Wheel):**
   ```text
   Lena Hart shaping a wet ceramic bowl on a wooden potter's wheel in her sunlit studio, hands coated in natural clay, linen apron, focused serene expression, documentary craft photo --ar 1:1 --style raw
   ```
2. **`post-2.webp` (Morning Meditation):**
   ```text
   Lena Hart sitting cross-legged in meditation on linen floor cushion, soft morning fog through pine trees outside glass sliding door, cup of herbal tea steaming nearby --ar 1:1 --style raw
   ```
3. **`post-3.webp` (Botanical Greenhouse):**
   ```text
   Lena Hart walking through Victorian glass greenhouse filled with exotic ferns and fiddle leaf figs, holding gardening shears, warm dappled sunlight filtering through glass roof --ar 1:1 --style raw
   ```
4. **`post-4.webp` (Organic Cooking):**
   ```text
   Overhead lifestyle photo of rustic kitchen table: handmade sourdough bread, fresh figs, rosemary, and ceramic bowls, Lena slicing bread with relaxed hands --ar 1:1 --style raw
   ```
5. **`post-5.webp` (Watercolor Sketching):**
   ```text
   Lena Hart sketching wild botanicals in a moleskine journal outdoors in wildflower meadow, watercolor palette open on wooden board, peaceful nature atmosphere --ar 1:1 --style raw
   ```
6. **`post-6.webp` (Cozy Reading Nook):**
   ```text
   Lena Hart curled up in oversized reading armchair with woolen blanket and hardcover poetry book, rain streaming down windowpane, warm candle glow, feeling of calm --ar 1:1 --style raw
   ```

---

## 6. How to Replace Placeholder Images

1. Generate images according to the prompts above.
2. Convert and resize to `.webp` format at appropriate sizes (e.g. 480w, 800w, 1200w).
3. Place files in `public/bloggers/{kai|adrian|mira|lena}/`:
   - `portrait.webp`
   - `post-1.webp` through `post-6.webp`
   - `story-1.webp` through `story-3.webp`
4. The application will automatically display them without any code modifications.
