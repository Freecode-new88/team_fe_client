const fs = require('fs');
const game_list = [
    {
        "path": "mahjong_ways",
        "name": "Mahjong Ways",
        "img": "/media/imgs/mahjong_ways.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Mahjong Ways</h2>
    <p>
      Mahjong หรือ ไพ่นกกระจอก เป็นเกมคาสิโนที่มีชื่อเสียงและได้รับความนิยมอย่างมากทั่วโลก 
      และค่าย <b b class="text-cyan-600 hover:underline" target="_blank">Pocket Games Soft (PG Soft)</b> 
      ได้นำแรงบันดาลใจจากเกมนี้มาสร้างเป็นสล็อตสุดฮิตในชื่อ 
      <strong>Mahjong Ways</strong> ที่มาพร้อมระบบตัวคูณและฟีเจอร์ฟรีสปินสุดมันส์!  
      ตัวเกมออกแบบให้เล่นง่ายแต่ยังคงความตื่นเต้น พร้อมเสียงประกอบแบบจีนที่เข้ากับธีมอย่างลงตัว
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/203034/dffb8d576a.jpeg" alt="Mahjong Ways Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.92%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง (Medium)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿4,500,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Mahjong Ways</h2>
    <p>
      เกมสล็อต Mahjong Ways ได้แรงบันดาลใจจากเกมไพ่นกกระจอกของจีนโดยตรง 
      ใช้สัญลักษณ์ที่มีรูปลักษณ์เหมือนไพ่นกกระจอกจริง และมีดีไซน์ที่เรียบง่ายหรูหราในสไตล์จีนคลาสสิก
    </p>
    <p>
      ตัวเกมเป็นสล็อตขนาด <strong>5 รีล 4 แถว</strong> และไม่มีเพย์ไลน์แบบตายตัว 
      แต่ใช้ระบบ <strong>1,024 วิธีในการชนะ (Ways to Win)</strong> 
      เพียงแค่หมุนให้ได้สัญลักษณ์เหมือนกัน 3 ตัวขึ้นไปในรีลที่ต่อเนื่องกันก็ถือว่าชนะได้ทันที
    </p>
    <p>
      เกมยังมีระบบ <strong>Cascade</strong> ที่จะลบสัญลักษณ์ที่ชนะออกและให้สัญลักษณ์ใหม่ตกลงมาแทน 
      เพื่อเพิ่มโอกาสชนะต่อเนื่องแบบรัว ๆ โดยไม่ต้องกดหมุนซ้ำ
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 4</div>
      <div><strong>วันที่เปิดตัว:</strong> 04/12/2023</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
      <div><strong>รูปแบบการชนะ:</strong> 1024 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและฟรีสปิน</h2>
    <p>
      Mahjong Ways มีฟีเจอร์เด่นหลายอย่างที่ช่วยให้ผู้เล่นสนุกและลุ้นรับรางวัลใหญ่ได้ง่ายขึ้น:
    </p>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>สัญลักษณ์ทอง (Golden Symbols):</strong> ปรากฏบนรีลกลาง และเมื่อชนะ สัญลักษณ์ทองจะเปลี่ยนเป็น Wild เพิ่มโอกาสชนะมากขึ้น</li>
      <li><strong>ตัวคูณรางวัล (Multiplier Trail):</strong> ทุกครั้งที่ชนะในรอบเดียวกัน ตัวคูณจะเพิ่มจาก x1 → x2 → x3 → x5 และรีเซ็ตเมื่อรอบนั้นจบลง</li>
      <li><strong>ฟีเจอร์ฟรีสปิน (Free Spins):</strong> เมื่อได้ Scatter 3 ตัวขึ้นไป จะได้รับฟรีสปิน 12 ครั้ง 
      และระหว่างฟรีสปิน ตัวคูณจะเพิ่มเป็น x2, x4, x6 และสูงสุดถึง x10!</li>
    </ul>
    <p>
      *ไม่มีระบบซื้อฟรีสปิน (Bonus Buy) ในเกมนี้ ผู้เล่นต้องลุ้นให้ Scatter ปรากฏขึ้นเองเท่านั้น*
    </p>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปและเกมแนะนำ</h2>
    <p>
      โดยรวมแล้ว <strong>Mahjong Ways</strong> เป็นเกมสล็อตที่เล่นง่าย กราฟิกสวย และมีระบบคูณรางวัลที่น่าสนใจมาก 
      RTP สูงและความผันผวนระดับกลางทำให้เหมาะกับผู้เล่นทุกระดับ 
      ไม่ว่าจะเป็นมือใหม่หรือเซียนสล็อตก็เล่นได้เพลินแน่นอน
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.92%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿4,500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "04/12/2023",
            "reels": "5",
            "rows": "4",
            "minBet": "฿0.60",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "treasures_of_aztec",
        "name": "Treasures of Aztec",
        "img": "/media/imgs/treasures_of_aztec.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Treasures of Aztec</h2>
    <p>
      <strong>Treasures of Aztec</strong> เป็นเกมสล็อตแนวอารยธรรมโบราณของชาวแอซเท็กจากค่าย 
      <b  class="text-cyan-600 hover:underline" target="_blank">Pragmatic Play</b>  
      ที่พาคุณเข้าสู่ดินแดนลึกลับกลางป่าลึกที่เต็มไปด้วยสมบัติและสิ่งศักดิ์สิทธิ์  
      ตัวเกมมาพร้อมกราฟิกสุดอลังการและระบบการเล่นที่เข้าใจง่าย เหมาะสำหรับทั้งมือใหม่และผู้เล่นที่ต้องการเกมจ่ายบ่อย  
    </p>
    <p>
      จุดเด่นของเกมนี้คือระบบ <strong>Collect Mechanic</strong> ที่ Wild ทำหน้าที่เป็นตัวเก็บรางวัลจากสัญลักษณ์เงิน (Money Symbols) 
      ซึ่งช่วยให้ผู้เล่นสามารถสะสมรางวัลใหญ่ได้เรื่อย ๆ แม้เกมจะไม่มีฟีเจอร์ซับซ้อนมากนัก  
      แต่ก็ยังมอบประสบการณ์การเล่นที่สนุกและให้ผลตอบแทนคุ้มค่า  
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/215656/82c62b1532.jpeg" alt="Aztec Treasure Hunt Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.03%</p>
        <p><strong>ความผันผวน:</strong> สูง (High)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿1,200,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> Pragmatic Play</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Treasures of Aztec</h2>
    <p>
      เกมนี้มาในรูปแบบสล็อต <strong>5 รีล 3 แถว</strong> และมีทั้งหมด <strong>20 เพย์ไลน์</strong>  
      ผู้เล่นสามารถเลือกเดิมพันได้ตั้งแต่ <strong>฿0.20 ถึง ฿240.00</strong> ต่อรอบการหมุน  
      เพียงแค่หมุนให้ได้สัญลักษณ์ตรงกัน 3 ตัวขึ้นไปในไลน์ที่กำหนดก็จะได้รับรางวัลทันที  
    </p>
    <p>
      สัญลักษณ์ Wild เป็นหัวใจหลักของเกมนี้ เพราะนอกจากจะใช้แทนสัญลักษณ์อื่นได้แล้ว  
      ยังทำหน้าที่เป็นตัวเก็บ (Collector) เพื่อสะสมค่าของสัญลักษณ์เงิน (Money Symbols) ที่ปรากฏบนหน้าจอในรอบนั้น  
      โดย Wild จะมาพร้อมตัวคูณแบบสุ่มตั้งแต่ x2 ถึง x50 ซึ่งสามารถเพิ่มมูลค่ารางวัลได้อย่างมหาศาล!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>วันที่เปิดตัว:</strong> 22/08/2024</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.20</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿240.00</div>
      <div><strong>รูปแบบการชนะ:</strong> 20 เพย์ไลน์</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและฟรีสปิน</h2>
    <p>
      <strong>Treasures of Aztec</strong> มีฟีเจอร์โบนัสที่เน้นการสะสมรางวัลจากสัญลักษณ์เงิน (Money Symbol)  
      และการเก็บรางวัลในรอบฟรีสปิน โดยรายละเอียดมีดังนี้:
    </p>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>ฟีเจอร์เก็บรางวัล (Collect Feature):</strong> Wild จะเก็บค่าของสัญลักษณ์เงินที่ปรากฏในรอบเดียวกัน พร้อมตัวคูณแบบสุ่ม x2 – x50</li>
      <li><strong>ฟีเจอร์ฟรีสปิน (Free Spins):</strong> เมื่อสัญลักษณ์เงินปรากฏ 5 ตัวขึ้นไป จะปลดล็อกฟรีสปิน 9 ครั้ง  
        กล่องสมบัติทางด้านขวาจะเก็บค่าของสัญลักษณ์ทั้งหมดในรอบนั้นไว้เป็น “โบนัสพอต”  
        หาก Wild ปรากฏระหว่างฟรีสปิน จะเก็บค่าพอตเพิ่มอีก และหากสัญลักษณ์เงินออกอีก 5 ตัว จะได้ฟรีสปินเพิ่มอีก 3 ครั้ง</li>
      <li><strong>ซื้อฟรีสปิน (Bonus Buy):</strong> ผู้เล่นสามารถซื้อเข้าฟีเจอร์ฟรีสปินได้ในราคา 100x ของยอดเดิมพัน</li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปและเกมแนะนำ</h2>
    <p>
      โดยรวมแล้ว <strong>Treasures of Aztec</strong> เป็นเกมสล็อตที่เล่นง่าย กราฟิกสวย และระบบการเก็บรางวัลทำให้ลุ้นสนุก  
      ถึงแม้จะไม่มีฟีเจอร์ใหม่โดดเด่น แต่ตัวคูณจาก Wild และโบนัสพอตสามารถสร้างกำไรได้ดีมาก  
      เหมาะกับผู้เล่นที่ชอบเกมแนวสะสมรางวัล (Collect Mechanic) และความเสี่ยงสูง
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.03%",
            "volatility": "สูง",
            "maximum_Win": "฿1,200,000.00",
            "provider": "Pragmatic Play",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/89026/5917cabdb1.png",
            "release_Date": "22/08/2024",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.20",
            "maxBet": "฿240.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "mahjong_ways_2",
        "name": "Mahjong Ways 2",
        "img": "/media/imgs/mahjong_ways_2.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Mahjong Ways 2</h2>
    <p>
      <strong>Mahjong Ways 2</strong> คือภาคต่อจากเกมสุดฮิต Mahjong Ways ที่พัฒนาโดยค่าย  
      <b class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      โดยเกมภาคนี้ได้เพิ่มลูกเล่นใหม่ ๆ และระบบตัวคูณที่ให้ผลตอบแทนมากขึ้น  
      พร้อมภาพกราฟิกที่คมชัด สวยงามในสไตล์จีนดั้งเดิม และเสียงดนตรีที่ให้ความรู้สึกสงบแต่ทรงพลัง  
    </p>
    <p>
      Mahjong Ways 2 ยังคงรูปแบบเกมสล็อตแนวหมุนวงล้อผสมกับกลไก Tumble ที่ทำให้สัญลักษณ์ร่วงลงมาแทนที่  
      สามารถชนะได้หลายครั้งในหนึ่งรอบการหมุนเดียว เหมาะกับผู้เล่นที่ต้องการทั้งความเพลิดเพลินและรางวัลใหญ่  
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/211743/52df4cc013.jpeg" alt="Mahjong Ways 2 Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.95%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง (Medium)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿18,000,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Mahjong Ways 2</h2>
    <p>
      Mahjong Ways 2 มาในรูปแบบสล็อต <strong>5 รีล</strong> ที่มีโครงสร้างแถวแบบ <strong>4-5-5-5-4</strong>  
      ซึ่งให้วิธีชนะมากถึง <strong>2,000 วิธี</strong> ต่อการหมุนหนึ่งครั้ง  
      ผู้เล่นสามารถเลือกเดิมพันได้ตั้งแต่ <strong>฿0.60 ถึง ฿180.00</strong> ต่อรอบ  
    </p>
    <p>
      สัญลักษณ์ที่ชนะจะถูกลบออก และสัญลักษณ์ใหม่จะร่วงลงมาแทน ทำให้มีโอกาสชนะต่อเนื่องได้หลายครั้งในหนึ่งรอบ  
      พร้อมกับตัวคูณ (Multiplier) ที่เพิ่มขึ้นเรื่อย ๆ จาก x1 → x2 → x3 → x5 เมื่อมีการชนะต่อเนื่อง  
    </p>
    <p>
      เพียงกดปุ่มหมุน (Spin) เพื่อเริ่มเกม หากสัญลักษณ์เรียงตรงตามเงื่อนไขการชนะ  
      ระบบจะจ่ายรางวัลทันที และในบางรอบอาจมีสัญลักษณ์พิเศษช่วยให้เข้าสู่รอบโบนัสหรือฟรีสปินได้  
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 5 (แบบ 4-5-5-5-4)</div>
      <div><strong>วันที่เปิดตัว:</strong> 01/07/2020</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
      <div><strong>รูปแบบการชนะ:</strong> 2,000 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษและโบนัสใน Mahjong Ways 2</h2>
    <p>
      Mahjong Ways 2 ยังคงฟีเจอร์สุดโดดเด่นจากภาคแรกไว้ครบ พร้อมเพิ่มระบบตัวคูณและสัญลักษณ์ทองให้สนุกยิ่งขึ้น:
    </p>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>สัญลักษณ์ทอง (Gold Symbols):</strong> ปรากฏเฉพาะบนรีลที่ 2, 3 และ 4  
      หากเป็นส่วนหนึ่งของการชนะ สัญลักษณ์เหล่านี้จะเปลี่ยนเป็น Wild ช่วยเพิ่มโอกาสชนะต่อเนื่อง</li>
      <li><strong>ตัวคูณรางวัล (Multiplier Feature):</strong> เมื่อชนะติดต่อกัน ตัวคูณจะเพิ่มขึ้นอัตโนมัติจาก x1 ไปจนถึง x5  
      ในรอบฟรีสปิน ตัวคูณสูงสุดจะเพิ่มขึ้นอีกเป็น x10!</li>
      <li><strong>ฟีเจอร์ฟรีสปิน (Free Spins):</strong> เมื่อได้สัญลักษณ์ Scatter 3 ตัวขึ้นไป จะปลดล็อกฟรีสปิน 10 ครั้ง  
      และสามารถรับเพิ่มได้อีก 2 ครั้งต่อ Scatter ที่ออกเพิ่ม ระหว่างฟรีสปินรีลที่ 3 จะกลายเป็นสัญลักษณ์ทองทั้งหมด  
      และตัวคูณจะเพิ่มเป็น 2x, 4x, 6x, 10x</li>
    </ul>
    <p>
      *ไม่มีระบบซื้อฟรีสปิน (Bonus Buy) ในเกมนี้ ต้องลุ้นด้วยการหมุนเองเท่านั้น!*
    </p>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปและเกมที่แนะนำ</h2>
    <p>
      <strong>Mahjong Ways 2</strong> ถือเป็นภาคต่อที่ยอดเยี่ยมของเกมต้นฉบับ  
      ด้วยระบบตัวคูณที่มากขึ้น ภาพกราฟิกที่งดงาม และโอกาสในการทำกำไรที่สูงกว่า  
      เหมาะกับผู้เล่นที่ชอบเกมแนวต่อเนื่อง (Cascade) และลุ้นรางวัลใหญ่จากตัวคูณหลายระดับ  
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.95%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿18,000,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "01/07/2020",
            "reels": "5",
            "rows": "5 (4-5-5-5-4)",
            "minBet": "฿0.60",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    }
    ,
    {
        "path": "wild-bounty-showdown",
        "name": "Wild Bounty Showdown",
        "img": "/media/imgs/wild_bounty_showdown.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Wild Bounty Showdown</h2>
    <p>
      <strong>Wild Bounty Showdown</strong> เกมสล็อตแนวคาวบอยตะวันตกจากค่าย 
      <b class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      ที่จะพาผู้เล่นไปยังเมืองคริสตัลทาวน์ (Crystal Town) เมืองที่เต็มไปด้วยการไล่ล่า  
      การปล้นธนาคาร และการดวลปืนสุดระทึก! คุณจะได้รับบทเป็น Cass  
      มือปืนหญิงที่ต้องจัดการกับแก๊งค์โจรเพื่อคว้าทองคำและรางวัลใหญ่กลับมา!
    </p>
    <p>
      เกมนี้มาพร้อมกับระบบรีลแบบไม่เหมือนใคร 3-4-5-5-4-3 และมีวิธีชนะมากถึง 3,000 วิธี  
      พร้อมระบบคูณรางวัล (Multiplier) ที่เพิ่มขึ้นทุกครั้งที่ชนะต่อเนื่อง  
      และฟีเจอร์สัญลักษณ์ทองที่สามารถกลายเป็น Wild เพื่อเพิ่มโอกาสการชนะรางวัลใหญ่
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/211735/41925e8bec.jpeg" alt="Wild Bounty Showdown Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.75%</p>
        <p><strong>ความผันผวน:</strong> สูง (High)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿900,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Wild Bounty Showdown</h2>
    <p>
      เกมสล็อตนี้ใช้ระบบรีล 6 ช่องในรูปแบบ 3-4-5-5-4-3  
      มอบวิธีชนะทั้งหมดกว่า 3,000 วิธี และมาพร้อมอัตราเดิมพันตั้งแต่  
      <strong>฿0.60 ถึง ฿180.00</strong> ต่อรอบ เหมาะสำหรับทั้งผู้เล่นใหม่และมือโปร  
    </p>
    <p>
      ในเกมจะมีสัญลักษณ์แบบต่าง ๆ เช่น หมวกคาวบอย ปืนเหล้า และแท่งทองคำ  
      ซึ่งสัญลักษณ์แท่งทอง (Scatter) ใช้เปิดฟีเจอร์ฟรีสปิน  
      ส่วนตรานายอำเภอ (Wild) จะช่วยแทนที่สัญลักษณ์อื่นเพื่อเพิ่มโอกาสชนะ
    </p>
    <p>
      ทุกครั้งที่ชนะ สัญลักษณ์ที่เกี่ยวข้องจะหายไป และสัญลักษณ์ใหม่จะตกลงมาแทน  
      ทำให้สามารถชนะต่อเนื่องได้หลายครั้งในรอบเดียว  
      และคูณรางวัลจะเพิ่มขึ้นเรื่อย ๆ สูงสุดถึง <strong>x1,024</strong> เท่า!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 6</div>
      <div><strong>จำนวนแถว:</strong> 5 (รูปแบบ 3-4-5-5-4-3)</div>
      <div><strong>วันที่เปิดตัว:</strong> 30/08/2022</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
      <div><strong>รูปแบบการชนะ:</strong> 3,000 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Wild Bounty Showdown</h2>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>ฟีเจอร์สัญลักษณ์ทอง (Golden Frame):</strong> สัญลักษณ์บางตัวบนรีล 3 และ 4 จะมีกรอบทอง  
      หากชนะในรอบนั้น สัญลักษณ์ดังกล่าวจะกลายเป็น Wild ในการหมุนครั้งต่อไป</li>
      <li><strong>ฟีเจอร์คูณรางวัล (Multiplier):</strong> ทุกการชนะต่อเนื่องจะเพิ่มคูณรางวัลขึ้นเรื่อย ๆ  
      สูงสุดได้ถึง x1,024 เท่า!</li>
      <li><strong>ฟีเจอร์ฟรีสปิน (Free Spins):</strong> เมื่อได้รับ Scatter 3 ตัวขึ้นไป จะเข้าสู่รอบฟรีสปิน 10 ครั้ง  
      โดยเริ่มต้นด้วยคูณรางวัลที่ x8 และยังสามารถซื้อฟีเจอร์นี้ได้ทันทีในราคา 75x ของเดิมพัน</li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Wild Bounty Showdown</h2>
    <p>
      <strong>Wild Bounty Showdown</strong> เป็นเกมสล็อตแนวคาวบอยที่ผสมผสานฟีเจอร์ Cascading  
      และตัวคูณรางวัลได้อย่างลงตัว เล่นง่ายแต่มีศักยภาพในการจ่ายรางวัลสูงมาก  
      ด้วย RTP ที่ค่อนข้างดีและกราฟิกระดับพรีเมียมจาก PG Soft  
      ใครที่ชอบบรรยากาศตะวันตกพร้อมความมันส์และเสียงปืนสุดเร้าใจ  
      เกมนี้ถือว่า “ห้ามพลาด!”
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.75%",
            "volatility": "สูง",
            "maximum_Win": "฿900,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "30/08/2022",
            "reels": "6",
            "rows": "5 (3-4-5-5-4-3)",
            "minBet": "฿0.60",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "lucky-neko",
        "name": "Lucky Neko",
        "img": "/media/imgs/lucky_neko.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Lucky Neko</h2>
    <p>
      <strong>Lucky Neko</strong> หรือ “แมวนำโชค” คือเกมสล็อตแนวเอเชียจากค่าย 
      <b class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      ที่นำแรงบันดาลใจมาจาก “มาเนกิเนโกะ” (Maneki Neko) หรือแมวกวักญี่ปุ่น  
      ซึ่งเป็นสัญลักษณ์แห่งความโชคดีและความมั่งคั่ง  
      เกมนี้มอบประสบการณ์ที่สดใสและเต็มไปด้วยพลังแห่งโชคลาภ  
      พร้อมฟีเจอร์หลากหลายที่ออกแบบมาเพื่อเพิ่มโอกาสในการชนะรางวัลใหญ่!
    </p>
    <p>
      Lucky Neko เป็นเกมที่มีกราฟิกสวยงามและซาวด์ประกอบแบบญี่ปุ่น  
      โดยคุณสามารถเล่นได้ทั้งบนมือถือและคอมพิวเตอร์  
      รองรับการเล่นฟรีและโหมดเงินจริงในคาสิโนออนไลน์หลายแห่ง
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/211739/e902eba16d.jpeg" alt="Lucky Neko Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.73%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง (Medium)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿994,860.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Lucky Neko</h2>
    <p>
      Lucky Neko เป็นเกมสล็อตธีมเอเชียที่มาพร้อมรีล 6 แถว 5 คอลัมน์  
      พร้อมรีลพิเศษแนวนอนด้านบนของคอลัมน์กลาง 4 ช่อง  
      ให้ผู้เล่นได้มากถึง <strong>32,400 วิธีในการชนะ</strong> ต่อการหมุนหนึ่งครั้ง  
      โดยเกมมีความผันผวนระดับปานกลางและค่า RTP อยู่ที่ 96.73%
    </p>
    <p>
      ผู้เล่นสามารถเลือกเดิมพันได้ตั้งแต่ <strong>฿0.60 ถึง ฿180.00</strong> ต่อรอบ  
      เมื่อกำหนดเงินเดิมพันแล้ว เพียงกดปุ่มสปินเพื่อเริ่มเกม  
      หรือใช้โหมด “เล่นอัตโนมัติ” เพื่อให้เกมหมุนต่อเนื่องเองได้
    </p>
    <p>
      การชนะจะเกิดขึ้นเมื่อได้สัญลักษณ์ตรงกัน 3 ตัวขึ้นไปจากซ้ายไปขวา  
      หลังจากชนะ สัญลักษณ์ที่ชนะจะหายไปและมีสัญลักษณ์ใหม่ตกลงมาแทน  
      ทำให้สามารถชนะต่อเนื่องได้หลายครั้งจากการหมุนเพียงครั้งเดียว
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 6</div>
      <div><strong>จำนวนแถว:</strong> 6</div>
      <div><strong>วันที่เปิดตัว:</strong> 02/02/2021</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
      <div><strong>จำนวนวิธีชนะ:</strong> 32,400 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Lucky Neko</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>ฟีเจอร์ Wilds-on-the-Way:</strong>  
        สัญลักษณ์พื้นฐานบางตัวอาจปรากฏในขนาดใหญ่พร้อมกรอบเงิน  
        หากเป็นส่วนหนึ่งของการชนะ จะเปลี่ยนเป็นกรอบทอง  
        และหากชนะอีกครั้ง สัญลักษณ์นั้นจะกลายเป็น <strong>Wild</strong> เพื่อช่วยให้ชนะง่ายขึ้น
      </li>
      <li>
        <strong>ฟีเจอร์ตัวคูณแมว (Cat Multiplier):</strong>  
        เมื่อสัญลักษณ์แมวปรากฏ ตัวคูณรางวัลจะเพิ่มขึ้น x2 ต่อหนึ่งตัว  
        ทำให้รางวัลสามารถทวีคูณได้อย่างรวดเร็ว!
      </li>
      <li>
        <strong>ฟีเจอร์ฟรีสปิน (Free Spins):</strong>  
        เมื่อได้รับ Scatter 4 ตัว จะเข้าสู่รอบฟรีสปิน 10 ครั้ง  
        โดยทุก Scatter เพิ่มอีก 2 ฟรีสปิน และเริ่มต้นด้วยตัวคูณรางวัล x2  
        เพื่อเพิ่มโอกาสคว้าโบนัสใหญ่
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Lucky Neko</h2>
    <p>
      <strong>Lucky Neko</strong> เป็นเกมสล็อตที่มีเอกลักษณ์เฉพาะตัว  
      ด้วยฟีเจอร์ตัวคูณแมวและระบบรีลพิเศษที่เพิ่มจำนวนวิธีชนะได้มหาศาล  
      เกมนี้เหมาะสำหรับผู้เล่นที่ชอบความสมดุลระหว่างความเสี่ยงและผลตอบแทน  
      พร้อมกราฟิกและเสียงที่มอบบรรยากาศแห่งความโชคดีในทุกการหมุน!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.73%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿994,860.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "02/02/2021",
            "reels": "6",
            "rows": "6",
            "minBet": "฿0.60",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "wild-bandito",
        "name": "Wild Bandito",
        "img": "/media/imgs/wild_bandito.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Wild Bandito</h2>
    <p>
      <strong>Wild Bandito</strong> คือเกมสล็อตแนวเม็กซิกันสุดมันส์จากค่าย 
      <b class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      ที่พาผู้เล่นไปสนุกกับบรรยากาศเทศกาลแห่งเสียงดนตรีและความรื่นเริง  
      ในธีม “วันแห่งความตาย” (Day of the Dead) ที่เต็มไปด้วยสีสันและเสียงกีตาร์สุดเร้าใจ  
      จุดเด่นของเกมนี้คือระบบเสียงและเอฟเฟกต์ที่ยอดเยี่ยมจนรู้สึกเหมือนอยู่กลางงานปาร์ตี้จริง ๆ!
    </p>
    <p>
      เกมนี้มีค่า RTP อยู่ที่ 96.73% พร้อมความผันผวนระดับปานกลาง  
      และรางวัลสูงสุดมากถึง <strong>฿4,500,000.00</strong> ต่อรอบหมุน  
      ด้วยระบบรีล 5x4 และวิธีชนะมากถึง 1,024 วิธี  
      ถือเป็นหนึ่งในเกมสล็อตที่มีความสมดุลทั้งความสนุกและโอกาสทำกำไรสูงมากจาก PG Soft
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/227356/7596ca6054.jpeg" alt="Wild Bandito Game Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.73%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง (Medium)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿4,500,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Wild Bandito</h2>
    <p>
      เกมนี้มีรูปแบบรีล 5 ช่อง 4 แถว พร้อมวิธีชนะทั้งหมด <strong>1,024 วิธี</strong>  
      ผู้เล่นสามารถเริ่มเดิมพันได้ตั้งแต่ <strong>฿0.20</strong> จนถึงสูงสุด <strong>฿180.00</strong> ต่อการหมุน  
      เพียงกำหนดเงินเดิมพันและกดปุ่มสปินเพื่อเริ่มเล่นได้ทันที
    </p>
    <p>
      เมื่อได้สัญลักษณ์เหมือนกัน 3 ตัวขึ้นไปจากซ้ายไปขวา  
      จะถือว่าชนะรางวัลและเปิดใช้งานฟีเจอร์ “Tumble”  
      โดยสัญลักษณ์ที่ชนะจะหายไปและสัญลักษณ์ใหม่จะตกลงมาแทน  
      เพิ่มโอกาสให้ชนะต่อเนื่องหลายครั้งในรอบเดียว!
    </p>
    <p>
      เกมนี้มาพร้อมระบบตัวคูณรางวัล (Multiplier) ด้านบนรีล  
      ที่จะเพิ่มขึ้นทุกครั้งที่มีการชนะต่อเนื่อง และสามารถคูณได้สูงสุดถึง <strong>x25,000</strong> เท่า!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 4</div>
      <div><strong>วันที่เปิดตัว:</strong> 25/06/2021</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.20</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
      <div><strong>จำนวนวิธีชนะ:</strong> 1,024 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Wild Bandito</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>ฟีเจอร์กรอบทอง (Gold Frame Symbols):</strong>  
        สัญลักษณ์บางตัวในรีลที่ 2–4 จะมีกรอบทอง  
        หากสัญลักษณ์เหล่านี้เป็นส่วนหนึ่งของการชนะ  
        จะเปลี่ยนเป็น <strong>Wild</strong> ทันทีในรอบถัดไป!
      </li>
      <li>
        <strong>ฟีเจอร์ตัวคูณรางวัล (Multiplier Feature):</strong>  
        ทุกครั้งที่เกิดการชนะและสัญลักษณ์ตกลงมา (Tumble)  
        ตัวคูณรางวัลจะเพิ่มขึ้นเรื่อย ๆ สูงสุดถึง <strong>x8</strong>  
        ทำให้รางวัลทวีคูณอย่างรวดเร็ว
      </li>
      <li>
        <strong>ฟีเจอร์ฟรีสปิน (Free Spins Bonus):</strong>  
        เมื่อได้รับ Scatter 3 ตัวขึ้นไป จะได้รับฟรีสปิน 12 ครั้ง  
        และหาก Scatter ปรากฏระหว่างรอบฟรีสปิน จะเพิ่มอีก 2 ครั้งต่อหนึ่งตัว  
        เพิ่มโอกาสชนะรางวัลใหญ่ในทุกการหมุนฟรี!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Wild Bandito</h2>
    <p>
      <strong>Wild Bandito</strong> เป็นเกมสล็อตที่มีธีมเม็กซิกันสุดสนุก  
      พร้อมฟีเจอร์ Tumble และตัวคูณรางวัลที่เพิ่มขึ้นเรื่อย ๆ  
      เกมนี้เหมาะกับผู้เล่นที่ต้องการความตื่นเต้น  
      และโอกาสรับรางวัลใหญ่ในทุกการหมุน  
      ด้วยกราฟิกสดใส ดนตรีเร้าใจ และโบนัสที่ระเบิดความมันส์ได้ทุกวินาที!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.73%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿4,500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "25/06/2021",
            "reels": "5",
            "rows": "4",
            "minBet": "฿0.20",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "fortune-rabbit",
        "name": "Fortune Rabbit",
        "img": "/media/imgs/fortune_rabbit.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Fortune Rabbit</h2>
    <p>
      <strong>Fortune Rabbit</strong> จากค่าย 
      <a  class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      เป็นอีกหนึ่งเกมในซีรีส์ “Fortune” ที่โด่งดังของค่ายนี้  
      ต่อจาก Fortune Gods, Fortune Mouse, Fortune Tiger และ Fortune Ox  
      โดยเกมนี้มาพร้อมธีมกระต่ายนำโชคสุดน่ารัก ที่มอบโชคลาภและรางวัลใหญ่ให้ผู้เล่นในทุกการหมุน!
    </p>
    <p>
      เกมนี้มีค่า RTP อยู่ที่ 96.75% ความผันผวนระดับปานกลาง  
      และรางวัลสูงสุดถึง <strong>฿450,000.00</strong>  
      แม้จะดูเรียบง่าย แต่มีฟีเจอร์ “Fortune Spins” ที่สามารถสุ่มเปิดโอกาสชนะรางวัลพิเศษได้ทุกเมื่อ!
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/211747/5598c9abf0.jpeg" alt="Fortune Rabbit Game Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.75%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง (Medium)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿450,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fortune Rabbit</h2>
    <p>
      <strong>Fortune Rabbit</strong> เป็นเกมสล็อตขนาดเล็ก 3 รีล  
      โดยรีลที่ 1 และ 3 มี 3 แถว ส่วนรีลกลางมี 4 แถว  
      รวมทั้งหมด 10 เพย์ไลน์ พร้อมดีไซน์ที่สวยงามและเหมาะกับการเล่นบนมือถือ
    </p>
    <p>
      ผู้เล่นสามารถเริ่มเดิมพันได้ตั้งแต่ <strong>฿0.30</strong> ไปจนถึงสูงสุด <strong>฿90.00</strong> ต่อรอบ  
      เกมมีระบบ Auto Spin ให้เลือกหมุนอัตโนมัติได้ตามต้องการ  
      และสามารถปรับระดับการเดิมพันผ่านค่า Bet Size และ Bet Level ได้อย่างอิสระ
    </p>
    <p>
      สัญลักษณ์จ่ายรางวัลสูงสุดคือ “กระต่ายทองคำ (Wild)”  
      รองลงมาคือ ถ้วยทอง ถุงเหรียญ ซองอั่งเปา ประทัด และแครอท  
      โดยเกมนี้มอบโอกาสชนะสูงสุดถึง <strong>x5,000</strong> เท่าของเงินเดิมพัน!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 3</div>
      <div><strong>จำนวนแถว:</strong> 4</div>
      <div><strong>วันที่เปิดตัว:</strong> 11/01/2023</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.30</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿90.00</div>
      <div><strong>จำนวนเพย์ไลน์:</strong> 10</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Fortune Rabbit</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Prize Symbol Feature:</strong>  
        หากสัญลักษณ์รางวัล (Prize Symbols) ปรากฏบนรีลตั้งแต่ 5 ตัวขึ้นไป  
        จะได้รับรางวัลรวมจากค่าทั้งหมด ซึ่งมีมูลค่าตั้งแต่ <strong>0.5x – 500x</strong> ของเงินเดิมพัน!
      </li>
      <li>
        <strong>Fortune Rabbit Feature:</strong>  
        ฟีเจอร์พิเศษที่สามารถสุ่มเกิดขึ้นได้ทุกการหมุน  
        เมื่อเปิดใช้งานจะได้รับ 8 “Fortune Spins” ซึ่งในรอบนี้จะมีเฉพาะสัญลักษณ์รางวัลเท่านั้น  
        ทำให้มีโอกาสคว้ารางวัลใหญ่ได้มากยิ่งขึ้น!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Fortune Rabbit</h2>
    <p>
      <strong>Fortune Rabbit</strong> เป็นเกมสล็อตขนาดเล็กที่เน้นความเรียบง่าย  
      เล่นสบาย ไม่ซับซ้อน เหมาะกับผู้เล่นทุกระดับ  
      แม้ฟีเจอร์จะไม่เยอะ แต่ก็มีรางวัลพิเศษที่น่าลุ้นจากฟีเจอร์ “Fortune Rabbit”  
      พร้อมงานภาพและเสียงที่น่ารักตามสไตล์ซีรีส์ Fortune ของ PG Soft
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.75%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿450,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "11/01/2023",
            "reels": "3",
            "rows": "4",
            "minBet": "฿0.30",
            "maxBet": "฿90.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "caishen-smash",
        "name": "Caishen Smash",
        "img": "/media/imgs/caishen_wins.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกม Caishen Smash</h2>
    <p>
      <strong>Caishen Smash</strong> เป็นเกมจากค่าย <b  class="text-cyan-600 hover:underline" target="_blank">Octoplay</b>  
      ที่ได้รับแรงบันดาลใจจากเทพเจ้าไฉ่ซิงเอี๊ย เทพแห่งความมั่งคั่งตามความเชื่อของจีน  
      เกมนี้อยู่ในซีรีส์ “Smash” ของ Octoplay ที่รวมตำนานและเทพเจ้าจีนมาสร้างเป็นเกมในรูปแบบ Instant Game  
      ซึ่งต่างจากสล็อตทั่วไปเพราะไม่มีรีลหมุน แต่เน้นการสุ่มรางวัลเงินสดและตัวคูณแทน!
    </p>
    <p>
      ด้วยค่า RTP สูงถึง <strong>97.80%</strong> และความผันผวนต่ำ  
      <strong>Caishen Smash</strong> เหมาะกับผู้เล่นที่ต้องการเกมที่เล่นง่าย ผ่อนคลาย  
      และมีโอกาสชนะรางวัลเล็ก ๆ อย่างต่อเนื่องโดยไม่ต้องใช้กลยุทธ์ซับซ้อน
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/223556/524e7d6bf0.jpeg" alt="Caishen Smash Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 97.80%</p>
        <p><strong>ความผันผวน:</strong> ต่ำ (Low)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿500,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> Octoplay</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Caishen Smash</h2>
    <p>
      <strong>Caishen Smash</strong> เป็นเกมแนว Instant Game ที่ไม่มีวงล้อแบบสล็อตทั่วไป  
      โดยจุดเด่นคือเทพเจ้าไฉ่ซิงเอี๊ยจะเปิดม้วนคัมภีร์แห่งโชคลาภเพื่อสุ่มรางวัลให้ผู้เล่นในแต่ละรอบ  
      เมื่อม้วนคัมภีร์เปิดออก เงินรางวัลและตัวคูณจะปรากฏรอบตัวเทพเจ้า  
      และบางครั้งอาจกระทบ “ระฆังทอง” หรือ “พัดโชค” เพื่อมอบโบนัสพิเศษ
    </p>
    <p>
      ผู้เล่นสามารถวางเดิมพันได้ตั้งแต่ <strong>฿0.10</strong> ถึงสูงสุด <strong>฿1,000.00</strong> ต่อรอบ  
      เพียงกดปุ่ม “เล่น” เพื่อเริ่มเกม เทพเจ้าไฉ่ซิงเอี๊ยจะสุ่มเปิดคัมภีร์  
      ถ้าเปิดเต็ม จะปล่อยเหรียญนำโชคที่มีมูลค่า <strong>x0.10 – x20</strong> ของเงินเดิมพัน  
      หรือปรากฏเป็นตัวคูณ (Multiplier) แบบสุ่ม
    </p>
    <p>
      เมื่อสัญลักษณ์รางวัลโดน “ระฆังทอง” ผู้เล่นจะได้รับตัวคูณพิเศษแบบสุ่ม  
      ตั้งแต่ <strong>x2, x3, x5 ไปจนถึง x20</strong> ซึ่งจะนำไปคูณกับเงินรางวัลทันที!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>ประเภทเกม:</strong> Instant Win</div>
      <div><strong>วันที่เปิดตัว:</strong> 12/12/2023</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.10</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿1,000.00</div>
      <div><strong>อัตโนมัติ:</strong> รองรับ (Auto Play)</div>
      <div><strong>ความผันผวน:</strong> ต่ำ</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Caishen Smash</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Lucky Wishes:</strong>  
        เมื่อม้วนคัมภีร์เปิดเต็ม เหรียญนำโชคจะสุ่มกระจายรางวัลเงินสดระหว่าง <strong>x0.10 – x20</strong>  
        และบางครั้งอาจเป็นรางวัลตัวคูณแทนมูลค่าเงินโดยตรง
      </li>
      <li>
        <strong>Gong Multiplier:</strong>  
        หากเหรียญรางวัลตกโดน “ระฆังทอง” จะปลดล็อกตัวคูณแบบสุ่ม  
        ได้แก่ <strong>x2, x3, x5 หรือ x20</strong> เพื่อเพิ่มรางวัลในรอบนั้นทันที!
      </li>
      <li>
        <strong>Fan Smash Feature:</strong>  
        เมื่อเหรียญนำโชคตกใส่ “พัดนำโชค” ด้านบน จะได้รับฟรีสปินพิเศษ 5 ครั้ง  
        ซึ่งทุกการหมุนจะได้รับการชนระฆังทองแน่นอนในแต่ละรอบ
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Caishen Smash</h2>
    <p>
      <strong>Caishen Smash</strong> เป็นเกมที่เล่นง่าย เหมาะสำหรับผู้เล่นที่ต้องการความเพลิดเพลิน  
      โดยไม่ต้องใช้ทักษะหรือเทคนิคซับซ้อน เกมมีกราฟิกสวยงาม เพลงประกอบสไตล์จีนที่ผ่อนคลาย  
      และมอบรางวัลเล็ก ๆ อย่างต่อเนื่อง เหมาะกับคนที่ต้องการความสบายและโชคลาภไปพร้อมกัน!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "97.80%",
            "volatility": "ต่ำ",
            "maximum_Win": "฿500,000.00",
            "provider": "Octoplay",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/223189/0382634a0e.png",
            "release_Date": "12/12/2023",
            "minBet": "฿0.10",
            "maxBet": "฿1,000.00",
            "reels": "-",
            "rows": "-",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "fireworks-megaways",
        "name": "Fireworks Megaways",
        "img": "/media/imgs/wild_fireworks.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Fireworks Megaways</h2>
    <p>
      <strong>Fireworks Megaways</strong> จากค่าย 
      <b  class="text-cyan-600 hover:underline" target="_blank">Big Time Gaming</b>  
      เป็นเกมสล็อตธีมดอกไม้ไฟที่เต็มไปด้วยพลังการระเบิดและสีสันสุดอลังการ  
      มาพร้อมกลไก <strong>Megaways 117,649 วิธีชนะ</strong> และค่า RTP สูงถึง 96.44%  
      การันตีความสนุกและโอกาสลุ้นรางวัลมหาศาล!
    </p>
    <p>
      เกมนี้ใช้โครงสร้าง 6 รีล 7 แถว พร้อมระบบ Cascading Reels แบบต่อเนื่อง 
      เมื่อชนะ สัญลักษณ์ที่จ่ายรางวัลจะหายไปและมีสัญลักษณ์ใหม่ตกลงมาแทน  
      ทำให้มีโอกาสชนะซ้ำในรอบเดียวกันได้หลายครั้ง!
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/205552/53220b65b5.jpeg" alt="Fireworks Megaways Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.44%</p>
        <p><strong>ความผันผวน:</strong> สูง (High)</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿902,010.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> Big Time Gaming</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fireworks Megaways</h2>
    <p>
      เริ่มต้นด้วยการตั้งค่าเงินเดิมพัน ตั้งแต่ <strong>฿0.20</strong> ถึง <strong>฿6.00</strong> ต่อการหมุน 
      จากนั้นกดปุ่ม <strong>Spin</strong> เพื่อจุดดอกไม้ไฟบนหน้าจอ และลุ้นรางวัลจาก 117,649 วิธีชนะ!  
    </p>
    <p>
      เกมนี้มี <strong>Extra Reel</strong> ด้านบนเพิ่มสัญลักษณ์พิเศษให้รางวัลต่อเนื่อง 
      สัญลักษณ์จรวดสีต่าง ๆ จะมีเอฟเฟกต์แตกต่างกัน เช่น เปลี่ยนสัญลักษณ์เป็น Wild หรือ คูณรางวัล
    </p>
    <ul class="list-disc list-inside space-y-1">
      <li>จรวดม่วง – เปลี่ยนสัญลักษณ์ด้านบนทั้งหมดเป็น Wild</li>
      <li>จรวดแดง – เพิ่ม Wild สุ่ม 4 ตัวบนรีล</li>
      <li>จรวดฟ้า – เพิ่มตัวคูณ สูงสุด x26</li>
      <li>จรวดเขียว – แปลงเป็น Wild โดยตรง</li>
    </ul>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 6</div>
      <div><strong>จำนวนแถว:</strong> 7</div>
      <div><strong>วันที่เปิดตัว:</strong> 27/03/2024</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.20</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿6.00</div>
      <div><strong>เพย์ไลน์:</strong> 117,649 วิธี</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Fireworks Megaways</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Reactions (Cascades):</strong>  
        เมื่อชนะ สัญลักษณ์จะระเบิดและสัญลักษณ์ใหม่ตกลงมาแทน 
        เปิดโอกาสให้ชนะรางวัลต่อเนื่องได้ในรอบเดียว!
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้ Scatter กล่องดอกไม้ไฟ 2 อันขึ้นไปจะได้ 12 ฟรีสปิน 
        เพิ่ม +4 สปินต่อ Scatter ที่เกิน จากนั้นทุกการชนะแถมตัวคูณเพิ่ม +1
      </li>
      <li>
        <strong>Bonus Buy:</strong>  
        ซื้อเข้าโหมด Free Spins ได้ในราคา 100 เท่าของเงินเดิมพัน  
        หรือแลกรางวัล 100x ที่ชนะในเกมหลักเป็น ฟรีสปิน ได้เช่นกัน!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Fireworks Megaways</h2>
    <p>
      <strong>Fireworks Megaways</strong> คือตัวอย่างของเกมสล็อต Megaways คุณภาพสูงจาก Big Time Gaming  
      ที่ผสมผสานเอฟเฟกต์ระเบิดสุดตระการตากับระบบคูณรางวัลมหาศาล  
      เหมาะสำหรับผู้เล่นที่ชอบเกมความเสี่ยงสูง แต่ตอบแทนคุ้มค่า 
      และต้องการความตื่นเต้นทุกการหมุน!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.44%",
            "volatility": "สูง",
            "maximum_Win": "฿902,010.00",
            "provider": "Big Time Gaming",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/89011/53908aa405.png",
            "release_Date": "27/03/2024",
            "reels": "6",
            "rows": "7",
            "minBet": "฿0.20",
            "maxBet": "฿6.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "fortune-dragon",
        "name": "Fortune Dragon",
        "img": "/media/imgs/fortune_dragon.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Fortune Dragon</h2>
    <p>
      <strong>Fortune Dragon</strong> หรือชื่อดั้งเดิมว่า <strong>Fortune Coin</strong> 
      จากค่าย <b class="text-cyan-600 hover:underline" target="_blank">IGT</b>  
      เป็นเกมสล็อตแนวจีนโบราณที่เต็มไปด้วยสัญลักษณ์แห่งความมั่งคั่งและโชคลาภ  
      ไม่ว่าจะเป็นเหรียญทอง, มังกร, โคมไฟจีน และสีทองแดงแดงทั่วทั้งเกม  
      มาพร้อมโอกาสชนะมากถึง <strong>243 วิธี</strong> และค่า RTP 96.20%  
      ถือเป็นเกมที่เล่นง่ายแต่ให้ผลตอบแทนที่น่าพอใจ
    </p>
    <p>
      ด้วยโครงสร้างแบบ <strong>5 รีล 3 แถว</strong> 
      เกมนี้ผสมผสานความคลาสสิกของสล็อตสไตล์เอเชียกับระบบโบนัส 4 ระดับ  
      ที่สามารถมอบเงินรางวัลสูงสุดถึง <strong>฿25,000,000</strong> ได้ในพริบตา!
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/130858/1d583d920b.jpeg" alt="Fortune Coin Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.20%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿25,000,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> IGT</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fortune Dragon</h2>
    <p>
      เกมนี้ใช้รูปแบบรีล <strong>5x3</strong> พร้อมสัญลักษณ์แนวจีนที่สวยงาม  
      เช่น มังกรทอง เหรียญนำโชค และสิงโตฟู ผู้เล่นสามารถปรับเงินเดิมพันได้ตั้งแต่  
      <strong>฿0.60</strong> ถึง <strong>฿600.00</strong> ต่อการหมุนหนึ่งครั้ง  
      เพียงตั้งค่าที่เหมาะสมแล้วกดปุ่ม <strong>Spin</strong> เพื่อเริ่มลุ้นโชค!
    </p>
    <p>
      สัญลักษณ์ที่ซ้อนกัน (Stacked Symbols) จะสุ่มเปลี่ยนเป็นสัญลักษณ์ใดก็ได้  
      (ยกเว้น Bonus) และหากเกิดเต็มแถวพร้อมกัน จะทำให้มีโอกาสได้รางวัลใหญ่ขึ้นหลายเท่า
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>เพย์ไลน์:</strong> 243 วิธี</div>
      <div><strong>วันที่เปิดตัว:</strong> 23/01/2020</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿600.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษและโบนัสใน Fortune Dragon</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Fortune Coin Feature:</strong>  
        เมื่อเหรียญทองปรากฏบนรีล จะเปิดฟีเจอร์สุ่มรางวัล เช่น ฟรีสปิน, เงินสดทันที  
        หรือแม้แต่แจ็กพอต 1 ใน 4 ระดับ
      </li>
      <li>
        <strong>Free Spins:</strong>  
        - 3 Scatter มังกร = 10 ฟรีสปิน + รางวัล x2<br>
        - 4 Scatter = 15 ฟรีสปิน + รางวัล x10<br>
        - 5 Scatter = 20 ฟรีสปิน + รางวัล x50  
        ฟีเจอร์นี้สามารถเปิดซ้ำได้ในระหว่างเล่น
      </li>
      <li>
        <strong>Jackpot Bonus:</strong>  
        เมื่อเหรียญแจ็กพอตตกบนรีล ผู้เล่นสามารถลุ้นรางวัลใหญ่ได้จาก 4 ระดับ  
        และหากโชคดีเจอเหรียญ <strong>Award All</strong> — จะรับทั้ง 4 แจ็กพอตพร้อมกันทันที!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Fortune Dragon</h2>
    <p>
      <strong>Fortune Dragon</strong> จาก IGT 
      เป็นเกมสล็อตแนวจีนที่มาพร้อมกับดีไซน์คลาสสิกและรางวัลใหญ่  
      เหมาะสำหรับทั้งผู้เล่นมือใหม่และมืออาชีพ  
      ด้วยระบบโบนัสหลากหลาย ฟรีสปินบ่อย และโอกาสลุ้นแจ็กพอตมหาศาล  
      จึงเป็นหนึ่งในเกมสล็อตที่คุ้มค่าแก่การหมุนที่สุดในหมวดเอเชียธีม
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.20%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿25,000,000.00",
            "provider": "IGT",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/34096/77ba062165.png",
            "release_Date": "23/01/2020",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.60",
            "maxBet": "฿600.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "queen-of-bounty",
        "name": "Queen of Bounty",
        "img": "/media/imgs/queen_of_bounty.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Queen of Bounty</h2>
    <p>
      <strong>Queen of Bounty</strong> จากค่าย 
      <b class="text-cyan-600 hover:underline" target="_blank">PG Soft</b>  
      เป็นเกมสล็อตวิดีโอขนาด <strong>5 รีล 3 แถว</strong>  
      ที่มาพร้อมฟีเจอร์ “Cascading Reels” และตัวคูณรางวัลเพิ่มขึ้นเรื่อย ๆ  
      สูงสุดถึง <strong>x5</strong> ในเกมหลัก และ <strong>x15</strong> ในรอบฟรีสปิน!
    </p>
    <p>
      เกมนี้ถูกออกแบบมาสำหรับผู้เล่นมือถือโดยเฉพาะ  
      สามารถเล่นในแนวตั้งได้ลื่นไหล หรือเล่นเต็มจอบนคอมพิวเตอร์ก็สวยงามไม่แพ้กัน  
      ภาพกราฟิกแบบโจรสลัดหญิงสุดเท่ พร้อมดนตรีทะเลเร้าใจ 
      ทำให้เกมนี้เป็นอีกหนึ่งผลงานยอดนิยมของ PG Soft
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/228398/d992350624.jpeg" alt="Queen of Bounty Logo" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.15%</p>
        <p><strong>ความผันผวน:</strong> ปานกลาง</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿5,400,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Queen of Bounty</h2>
    <p>
      ตัวเกมเล่นง่ายมาก แม้ผู้เล่นมือใหม่ก็สามารถเข้าใจได้ทันที  
      ปรับเงินเดิมพันได้ตั้งแต่ <strong>฿0.60</strong> จนถึง <strong>฿180.00</strong> ต่อรอบหมุน  
      กดปุ่ม <strong>Spin</strong> เพื่อเริ่มลุ้นรางวัล หรือเปิดโหมด <strong>Auto Spin</strong>  
      เพื่อหมุนต่อเนื่องได้สูงสุดถึง 1,000 รอบ
    </p>
    <p>
      ระหว่างที่คุณชนะในแต่ละรอบ สัญลักษณ์ที่ชนะจะระเบิดหายไป  
      และสัญลักษณ์ใหม่จะตกลงมาแทน พร้อมตัวคูณรางวัลที่เพิ่มขึ้นตามลำดับ  
      ทำให้มีโอกาสชนะรางวัลซ้ำได้หลายครั้งในรอบเดียว!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>เพย์ไลน์:</strong> 20</div>
      <div><strong>วันที่เปิดตัว:</strong> 02/08/2019</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿0.60</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿180.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Queen of Bounty</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>ตัวคูณรางวัล (Multiplier):</strong>  
        ทุกครั้งที่ชนะต่อเนื่อง ตัวคูณจะเพิ่มขึ้นจาก x1 → x2 → x3 → x5  
        ในรอบฟรีสปินจะเพิ่มขึ้นเป็น x3 → x6 → x9 → x15
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้ Scatter 3 ตัวขึ้นไปจะเปิดรอบฟรีสปิน 10 ครั้ง  
        และทุก Scatter เพิ่มอีกจะได้ +5 ฟรีสปิน  
        ภายในโหมดนี้จะมีตัวคูณที่สูงกว่าปกติ ทำให้รางวัลพุ่งสูงถึง 30,000x!
      </li>
      <li>
        <strong>Cascading Reels:</strong>  
        เมื่อชนะ สัญลักษณ์จะระเบิดและสัญลักษณ์ใหม่ตกลงมา  
        เพิ่มโอกาสชนะรางวัลต่อเนื่องในรอบเดียว
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Queen of Bounty</h2>
    <p>
      <strong>Queen of Bounty</strong> เป็นเกมสล็อตโจรสลัดหญิงที่เล่นง่าย  
      แต่เต็มไปด้วยความสนุกและรางวัลที่คุ้มค่า  
      ระบบ Cascading และตัวคูณแบบต่อเนื่องทำให้ทุกการชนะดูน่าตื่นเต้น  
      เหมาะกับทั้งผู้เล่นทั่วไปและสายหมุนมืออาชีพที่ชอบเกมสไตล์ PG Soft
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.15%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿5,400,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "02/08/2019",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.60",
            "maxBet": "฿180.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "speed-winner",
        "name": "Speed Winner",
        "img": "/media/imgs/speed_winner.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Speed Winner</h2>
    <p>
      <strong>Speed Winner</strong> จากค่าย  
      <b class="text-cyan-600 hover:underline">PG Soft</b>  
      คือเกมสล็อตวิดีโอธีม “แข่งรถความเร็วสูง” ที่ได้รับแรงบันดาลใจจากพลังและความตื่นเต้นบนสนามแข่ง  
      ด้วยค่า RTP สูงถึง <strong>96.72%</strong> และระบบรีลแบบ “Cascading” ที่มีตัวคูณเพิ่มขึ้นเรื่อย ๆ  
      สูงสุดถึง <strong>x10</strong> ในเกมหลัก และ <strong>x50</strong> ในโหมดฟรีสปิน!
    </p>
    <p>
      เกมนี้เปิดตัวในปี 2022 และได้รับความนิยมอย่างรวดเร็วในหมู่ผู้เล่นไทย  
      ด้วยภาพกราฟิกระดับ 3D, เสียงเอฟเฟกต์เครื่องยนต์สมจริง และการออกแบบแนวตั้งที่เหมาะกับมือถือ  
      ทำให้คุณรู้สึกเหมือนอยู่ในสนามแข่งจริง ๆ ทุกครั้งที่หมุนวงล้อ
    </p>
    <div class="grid md:grid-cols-3 gap-6 items-center border-8 border-cyan-400 rounded-2xl p-6 bg-white">
      <img src="https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/214599/8b27e2d98b.jpeg" alt="Speed Winner Game" class="rounded-lg shadow-md mx-auto" />
      <div class="md:col-span-2 space-y-2">
        <p><strong>ค่า RTP:</strong> 96.72%</p>
        <p><strong>ความผันผวน:</strong> ปานกลางถึงสูง</p>
        <p><strong>รางวัลสูงสุด:</strong> ฿17,500,000.00</p>
        <p><strong>ผู้พัฒนาเกม:</strong> PG Soft</p>
      </div>
    </div>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Speed Winner</h2>
    <p>
      <strong>Speed Winner</strong> เป็นเกมสล็อต 6 รีล 5 แถว (พร้อมรีลพิเศษด้านบน)  
      ที่ใช้ระบบ “Cascading Symbols” — เมื่อชนะ สัญลักษณ์ที่ได้รางวัลจะหายไป  
      และสัญลักษณ์ใหม่ตกลงมาแทน ทำให้สามารถชนะซ้ำได้ต่อเนื่องในรอบเดียว
    </p>
    <p>
      ผู้เล่นสามารถเริ่มเดิมพันได้ตั้งแต่ <strong>฿1.00</strong> ถึง <strong>฿4,000.00</strong>  
      ต่อรอบหมุน และสามารถเปิดโหมด <strong>Turbo Spin</strong> หรือ <strong>Auto Spin</strong>  
      เพื่อเร่งความเร็วการเล่นได้ทันที เหมาะสำหรับผู้เล่นที่ชอบเกมไว ได้ลุ้นเร็ว!
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 6</div>
      <div><strong>จำนวนแถว:</strong> 5</div>
      <div><strong>เพย์ไลน์:</strong> 32,400 วิธี</div>
      <div><strong>วันที่เปิดตัว:</strong> 01/07/2022</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿1.00</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿4,000.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Speed Winner</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Multiplier Feature:</strong>  
        ทุกครั้งที่ชนะ ตัวคูณจะเพิ่มขึ้นเรื่อย ๆ จาก x1, x2, x3… สูงสุดถึง x10  
        และในโหมดฟรีสปิน ตัวคูณจะสะสมได้ถึง x50!
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้ Scatter 4 ตัวขึ้นไปจะได้รับ 8 ฟรีสปิน  
        ในรอบนี้ ตัวคูณที่สะสมจากทุกการชนะจะไม่รีเซ็ตจนจบรอบ  
        ทำให้มีโอกาสได้รางวัลก้อนใหญ่!
      </li>
      <li>
        <strong>Wild Car Symbol:</strong>  
        รถแข่งสีทองคือ Wild ที่สามารถแทนสัญลักษณ์ใดก็ได้  
        เพื่อเพิ่มโอกาสการชนะและปลดล็อกคอมโบต่อเนื่อง
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Speed Winner</h2>
    <p>
      <strong>Speed Winner</strong> คือเกมที่เหมาะสำหรับผู้เล่นที่ชอบความเร็ว  
      และความเร้าใจในทุกการหมุน ด้วยตัวคูณที่เพิ่มขึ้นต่อเนื่อง  
      เอฟเฟกต์เสียงเครื่องยนต์ดุดัน และโอกาสชนะสูงสุดกว่า <strong>฿17,500,000</strong>  
      ทำให้เกมนี้กลายเป็นหนึ่งในสล็อตยอดนิยมจาก PG Soft ที่คุณไม่ควรพลาด!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.72%",
            "volatility": "ปานกลางถึงสูง",
            "maximum_Win": "฿17,500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "01/07/2022",
            "reels": "6",
            "rows": "5",
            "minBet": "฿1.00",
            "maxBet": "฿4,000.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "fortune-mouse",
        "name": "Fortune Mouse",
        "img": "/media/imgs/fortune_mouse.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Fortune Mouse</h2>
    <p>
      เกมสล็อต <strong>Fortune Mouse</strong> จากค่าย  
      <b class="text-cyan-600 hover:underline">PG Soft</b>  
      เป็นหนึ่งในซีรีส์แห่งโชคลาภยอดนิยมที่ต่อยอดจาก Fortune Ox, Fortune Tiger, Fortune Dragon และ Fortune Rabbit  
      คราวนี้มาในธีมหนูน้อยนำโชค ผู้ถือสัญลักษณ์แห่งความมั่งคั่งและความสำเร็จตามความเชื่อของจีน  
      เกมนี้มอบโอกาสรับรางวัลสูงสุดถึง <strong>฿45,000.00</strong> ด้วยค่า RTP <strong>96.96%</strong> และความผันผวนระดับปานกลาง
    </p>
    <p>
      Fortune Mouse ใช้รูปแบบสล็อตคลาสสิก 3 รีล 3 แถว พร้อมเพย์ไลน์เพียง 5 แบบ  
      ซึ่งเหมาะสำหรับผู้เล่นที่ชอบเกมเรียบง่าย หมุนไว และเห็นผลลัพธ์ทันทีในทุกการสปิน
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fortune Mouse</h2>
    <p>
      กติกาการเล่นเข้าใจง่ายมาก — เพียงเลือกจำนวนเดิมพันของคุณ  
      โดยใช้ปุ่ม <strong>+</strong> หรือ <strong>-</strong> ด้านข้างปุ่มหมุน จากนั้นกด <strong>สปิน</strong> เพื่อเริ่มเกม  
      การชนะจะเกิดขึ้นเมื่อคุณได้สัญลักษณ์เดียวกัน 3 ตัวในหนึ่งเพย์ไลน์จากทั้งหมด 5 เส้นทาง
    </p>
    <p>
      สัญลักษณ์ที่ให้รางวัลสูงสุดคือ <strong>Wild หนูทองคำ</strong> ซึ่งสามารถแทนสัญลักษณ์อื่นได้ทั้งหมด  
      และยังเป็นกุญแจสำคัญในการเรียกใช้ฟีเจอร์พิเศษ Fortune Mouse Feature
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 3</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>เพย์ไลน์:</strong> 5</div>
      <div><strong>วันที่เปิดตัว:</strong> 20/01/2020</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿5.50</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿1,650.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Fortune Mouse</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Fortune Mouse Feature:</strong>  
        ฟีเจอร์นี้จะสุ่มเปิดใช้งานในระหว่างการหมุน เมื่อมีสัญลักษณ์ Wild เต็มทั้งรีลตรงกลาง (รีลที่ 2)  
        วงล้อที่ 1 และ 3 จะหมุนซ้ำไปเรื่อย ๆ จนกว่าจะเกิดการชนะ และการชนะครั้งนี้มักมีอัตราจ่ายสูงสุดในเกม
      </li>
      <li>
        <strong>ไม่มีฟีเจอร์ฟรีสปิน:</strong>  
        Fortune Mouse ไม่มีโหมดหมุนฟรีหรือ Bonus Buy เน้นเกมไวและการจ่ายทันที
      </li>
      <li>
        <strong>Autoplay Mode:</strong>  
        เปิดให้ตั้งจำนวนการหมุนอัตโนมัติได้ เหมาะสำหรับผู้ที่ต้องการเล่นต่อเนื่องโดยไม่ต้องกดเองทุกครั้ง
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Fortune Mouse</h2>
    <p>
      <strong>Fortune Mouse</strong> เป็นเกมสล็อตที่เรียบง่ายแต่น่ารัก เหมาะกับผู้เล่นสายมินิมอล  
      ที่ชื่นชอบความคลาสสิกและธีมเอเชียแบบดั้งเดิม  
      ถึงแม้จะไม่มีโบนัสหมุนฟรี แต่ฟีเจอร์ Wild รีสปินช่วยเพิ่มความตื่นเต้นและลุ้นรางวัลใหญ่ได้ตลอดเวลา
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.96%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿45,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "20/01/2020",
            "reels": "3",
            "rows": "3",
            "minBet": "฿0.50",
            "maxBet": "฿1,650.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    }
    ,
    {
        "path": "captains-bounty",
        "name": "Captain’s Bounty",
        "img": "/media/imgs/captain's_bounty.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Captain’s Bounty</h2>
    <p>
      <strong>Captain’s Bounty</strong> จากค่าย  
      <b class="text-cyan-600 hover:underline">PG Soft</b>  
      เป็นเกมสล็อตวิดีโอขนาด <strong>5 รีล 3 แถว</strong>  
      ที่มาพร้อมระบบ “Cascading Reels” และตัวคูณรางวัลเพิ่มขึ้นทุกครั้งที่ชนะ  
      สูงสุดถึง <strong>x5</strong> ในเกมหลัก และ <strong>x15</strong> ในรอบฟรีสปิน!
    </p>
    <p>
      เกมนี้ออกแบบมาเพื่อผู้เล่นมือถือโดยเฉพาะในโหมดแนวตั้ง  
      แต่ก็สามารถเล่นได้สวยงามบนหน้าจอทุกขนาด ทั้งแท็บเล็ตและเดสก์ท็อป  
      พร้อมกราฟิกโจรสลัดทะเลสุดอลังการ เสียงเอฟเฟกต์จากกัปตันและนกแก้ว  
      สร้างความตื่นเต้นทุกครั้งที่คุณชนะรางวัล!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Captain’s Bounty</h2>
    <p>
      เกมนี้เล่นง่ายเหมาะกับทุกระดับประสบการณ์ ผู้เล่นสามารถตั้งค่าเดิมพันได้ตั้งแต่  
      <strong>฿22.00</strong> ถึง <strong>฿6,600.00</strong> ต่อรอบหมุน  
      ใช้ปุ่ม <strong>+</strong> และ <strong>-</strong> เพื่อปรับจำนวนเงิน  
      และสามารถเปิดโหมด <strong>Turbo Spin</strong> หรือ <strong>Auto Spin</strong>  
      สำหรับการหมุนต่อเนื่องได้สูงสุด 1,000 ครั้ง
    </p>
    <p>
      เมื่อมีการชนะในแต่ละรอบ สัญลักษณ์ที่ชนะจะระเบิดหายไป  
      และสัญลักษณ์ใหม่จะตกลงมาแทน ทำให้สามารถชนะต่อเนื่องได้หลายครั้งในรอบเดียว  
      โดยทุกครั้งที่ชนะ ตัวคูณจะเพิ่มขึ้นเรื่อย ๆ จนถึง x5 ในเกมหลัก
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>เพย์ไลน์:</strong> 20</div>
      <div><strong>วันที่เปิดตัว:</strong> 02/08/2019</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿22.00</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿6,600.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Captain’s Bounty</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Multiplier Feature:</strong>  
        ทุกการชนะในเกมหลักจะเพิ่มตัวคูณจาก x1 → x2 → x3 → x5  
        และในรอบฟรีสปิน ตัวคูณจะเพิ่มขึ้นถึง x15!
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้ Scatter 3 ตัวจะเปิดรอบฟรีสปิน 10 ครั้ง  
        และ Scatter เพิ่มทุกตัวจะได้ +5 ฟรีสปิน  
        ในโหมดนี้ ตัวคูณรางวัลจะทบกันแบบต่อเนื่องจนถึงรอบสุดท้าย
      </li>
      <li>
        <strong>ไม่มี Bonus Buy:</strong>  
        เกมนี้ไม่มีระบบซื้อโบนัส ต้องเล่นให้ถึง Scatter ด้วยตัวเองเท่านั้น!
      </li>
      <li>
        <strong>Wild Symbol:</strong>  
        กล่องสมบัติ (Treasure Chest) เป็นสัญลักษณ์ Wild  
        ปรากฏเฉพาะรีล 2, 3 และ 4 ช่วยแทนสัญลักษณ์อื่นเพื่อเพิ่มโอกาสชนะ
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Captain’s Bounty</h2>
    <p>
      <strong>Captain’s Bounty</strong> ถือเป็นหนึ่งในเกมโจรสลัดที่ดีที่สุดของ PG Soft  
      ด้วยระบบ Cascading Reels และตัวคูณรางวัลที่เพิ่มขึ้นเรื่อย ๆ  
      ทำให้ทุกการหมุนเต็มไปด้วยความลุ้นและโอกาสรับรางวัลใหญ่  
      แม้ไม่มี Bonus Buy แต่เกมนี้ก็ให้ความสนุกครบทุกมิติทั้งภาพ เสียง และการเล่น
    </p>
    <p>
      เหมาะอย่างยิ่งสำหรับผู้เล่นที่ชื่นชอบเกมสไตล์โจรสลัด  
      ที่ทั้งเล่นง่ายและให้ผลตอบแทนสูงถึง <strong>30,000x ของเงินเดิมพัน!</strong>
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.15%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿5,400,000.00",
            "provider": "PG Soft",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "02/08/2019",
            "reels": "5",
            "rows": "3",
            "minBet": "฿22.00",
            "maxBet": "฿6,600.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "legend-of-perseus",
        "name": "Legend of Perseus",
        "img": "/media/imgs/legend_of_perseus.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Legend of Perseus</h2>
    <p>
      <strong>Legend of Perseus</strong> จากค่าย  
      <b href="/games-global" class="text-cyan-600 hover:underline" target="_blank">Games Global</b>  
      และทีมพัฒนา <strong>SpinPlay Games</strong>  
      เป็นเกมสล็อตธีมเทพเจ้ากรีกที่ผสานตำนานของเพอร์ซิอุส ลูกของซุส  
      ผู้กล้าที่ต่อสู้กับเมดูซาในเรื่องราวอันยิ่งใหญ่ของตำนานกรีกโบราณ  
      มาพร้อมค่า RTP <strong>96.48%</strong> และความผันผวนระดับสูง  
      ให้รางวัลสูงสุดถึง <strong>฿250,000.00</strong>!
    </p>
    <p>
      เกมนี้โดดเด่นด้วยภาพกราฟิกระดับพรีเมียม เสียงประกอบสุดอลังการ  
      และเอฟเฟกต์การต่อสู้ที่ชวนให้รู้สึกเหมือนอยู่ในสงครามแห่งเทพเจ้า  
      ผู้เล่นจะได้พบกับตัวละครหลักอย่างเพอร์ซิอุส อธีนา และเมดูซา  
      ที่จะมอบพลังพิเศษและรางวัลมากมายระหว่างเล่น
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Legend of Perseus</h2>
    <p>
      ตัวเกมมีขนาด <strong>5 รีล 3 แถว</strong> พร้อม <strong>20 เพย์ไลน์</strong>  
      การเล่นเริ่มต้นง่าย ๆ ด้วยการตั้งค่าเดิมพันที่คุณต้องการ  
      โดยเดิมพันขั้นต่ำอยู่ที่ <strong>฿8.00</strong> และสูงสุดที่ <strong>฿2,000.00</strong>
    </p>
    <p>
      เมื่อกดปุ่ม <strong>สปิน</strong> วงล้อจะหมุน และคุณจะชนะได้เมื่อมีสัญลักษณ์เดียวกัน  
      3 ตัวขึ้นไปเรียงจากซ้ายไปขวาบนเพย์ไลน์ที่กำหนดไว้  
      สัญลักษณ์สำคัญในเกม ได้แก่ เพกาซัส ดาบกับโล่ หมวกเกราะ รองเท้าเทพ  
      และสัญลักษณ์พิเศษอย่าง <strong>Wild</strong> กับ <strong>Bonus</strong>
    </p>
    <div class="grid sm:grid-cols-3 gap-4 border-8 border-yellow-300 rounded-2xl p-4 bg-white">
      <div><strong>จำนวนรีล:</strong> 5</div>
      <div><strong>จำนวนแถว:</strong> 3</div>
      <div><strong>เพย์ไลน์:</strong> 20</div>
      <div><strong>วันที่เปิดตัว:</strong> 13/11/2024</div>
      <div><strong>เดิมพันขั้นต่ำ:</strong> ฿8.00</div>
      <div><strong>เดิมพันสูงสุด:</strong> ฿2,000.00</div>
    </div>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Legend of Perseus</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Amazing Legends Feature:</strong>  
        เปิดใช้งานเมื่อสัญลักษณ์ Bonus ปรากฏบนรีล  
        ผู้เล่นจะได้รับ 3 รีสปินเริ่มต้น โดยสัญลักษณ์โบนัสทั้งหมดจะถูกล็อกไว้  
        และอาจปรากฏสัญลักษณ์รางวัล (เหรียญทอง),  
        <strong>Amazing Boost</strong> (นกฮูกขาว),  
        หรือ <strong>Collect-All</strong> (เมดูซา)  
        ซึ่งจะรีเซ็ตจำนวนรีสปินทุกครั้งที่ตกลงมาใหม่
      </li>
      <li>
        <strong>Athena Bonus:</strong>  
        สัญลักษณ์ Athena จะล็อกค่า Amazing Boost ทั้งหมด  
        และเพิ่มมูลค่าของแต่ละตัวเมื่อปรากฏบนวงล้อ
      </li>
      <li>
        <strong>Perseus Bonus:</strong>  
        ฟีเจอร์เพอร์ซิอุสจะเพิ่มตัวคูณในแต่ละช่องของรีล  
        ค่าตัวคูณทั้งหมดจะถูกนำมาคูณรวมกับเงินรางวัลสุดท้าย
      </li>
      <li>
        <strong>Medusa Bonus:</strong>  
        หากเปิดด้วยสัญลักษณ์เมดูซา จะสามารถเก็บมูลค่ารางวัลทั้งหมดบนรีล  
        เป็นโบนัสพิเศษเพิ่มเติมทันที
      </li>
      <li>
        <strong>Jackpots:</strong>  
        Mega = 5,000x เดิมพัน, Major = 100x, Minor = 20x, Mini = 10x
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Legend of Perseus</h2>
    <p>
      <strong>Legend of Perseus</strong> เป็นเกมสล็อตแนวตำนานกรีกที่มอบความตื่นเต้นและความท้าทาย  
      เหมาะสำหรับผู้เล่นที่ชอบเกมที่มีความเสี่ยงสูงและลุ้นรางวัลก้อนใหญ่  
      ด้วยฟีเจอร์โบนัสหลากหลายและกราฟิกระดับเทพ  
      เกมนี้จึงกลายเป็นหนึ่งในผลงานเด่นของซีรีส์ Amazing Legends ที่ไม่ควรพลาด!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.48%",
            "volatility": "สูง",
            "maximum_Win": "฿250,000.00",
            "provider": "Games Global",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/150866/d4bfb1a23f.png",
            "release_Date": "13/11/2024",
            "reels": "5",
            "rows": "3",
            "minBet": "฿1.00",
            "maxBet": "฿2,000.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "NMi", "website": "https://nmi.nl/", "logo": "https://objects.kaxmedia.com/auto/o/160739/3d12920f9d.png" }
            ]
        }
    },
    {
        "path": "zombie-outbreak",
        "name": "Zombie Outbreak",
        "img": "/media/imgs/zombie_outbreak.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Zombie Outbreak</h2>
    <p>
      นักวิทยาศาสตร์สติเฟื่องที่มีบุคลิกคล้าย <strong>Dr. Jekyll</strong>  
      ได้ทดลองสร้างเซรั่มลึกลับขึ้นมาในห้องแล็บมืดมนที่เต็มไปด้วยเสียงเดือดของสารเคมี  
      ผลการทดลองกลับกลายเป็นหายนะ เมื่อเขาฉีดยาซอมบี้เข้าร่างตัวเอง  
      และกลายเป็นสัญลักษณ์ <strong>Wild ขยายตัว</strong> ที่มาพร้อมตัวคูณสุ่ม 3 ค่าในแต่ละรอบ!
    </p>
    <p>
      ผู้ช่วยสาวของเขาผู้กล้าหาญถือปืนคู่ใจออกต่อสู้  
      พร้อมเพิ่มตัวคูณจาก Wild ไปยังตัวคูณรวมของเกม  
      ฟีเจอร์นี้จะเกิดซ้ำในทุกการชนะแบบ “Cascade” และในรอบโบนัส  
      ตัวคูณรวมจะไม่รีเซ็ตเลยแม้แต่ครั้งเดียว!  
      มอบโอกาสชนะสูงสุดถึง <strong>5,000x</strong> ของเงินเดิมพันคุณ  
      เกมนี้จะพาคุณเข้าสู่โลกของซอมบี้สุดมันจากค่าย <strong>PG Soft</strong>
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Zombie Outbreak</h2>
    <p>
      เกมนี้มีโครงสร้างรีลแบบ <strong>4-5-4-5-4</strong> รวมทั้งหมด <strong>1,600 วิธีชนะ</strong>  
      คุณจะชนะเมื่อได้สัญลักษณ์เหมือนกัน 3 ตัวขึ้นไปบนรีลที่ติดกันจากซ้ายไปขวา  
      สัญลักษณ์ที่ชนะในแต่ละรีลจะถูกคูณเข้าด้วยกัน และนำไปคูณกับมูลค่าในตารางจ่ายรางวัล
    </p>
    <p>
      ผู้เล่นสามารถวางเดิมพันได้ตั้งแต่ <strong>฿8.00</strong> ถึง <strong>฿4,000.00</strong> ต่อการหมุน  
      รองรับผู้เล่นทุกระดับ ไม่ว่าจะเป็นสายทดลองหรือสายล่ารางวัลใหญ่  
      เกมนี้ใช้ระบบ <strong>Collapsing Reels</strong>  
      ซึ่งสัญลักษณ์ที่ชนะจะหายไปและสัญลักษณ์ใหม่ตกลงมาแทน  
      ทำให้สามารถชนะต่อเนื่องได้ในรอบเดียว!
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Zombie Outbreak</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Collapsing Reels:</strong>  
        เมื่อชนะ สัญลักษณ์จะระเบิดหายไปและสัญลักษณ์ใหม่ตกลงมา  
        ทำให้เกิดชัยชนะต่อเนื่องได้หลายครั้งในรอบเดียว
      </li>
      <li>
        <strong>Expanding Multiplier Wilds:</strong>  
        นักวิทยาศาสตร์ชายจะปรากฏบนรีล 2 และ 4  
        พร้อมขยายครอบคลุมทั้งรีลและมาพร้อมตัวคูณแบบสุ่ม เช่น x2, x3, x5, x10, สูงสุดถึง x25!  
        แต่ละครั้งที่ผู้ช่วยหญิงยิงปืน ตัวคูณจะถูกเพิ่มเข้าไปในตัวคูณรวมของเกม
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้สัญลักษณ์ Scatter (เครื่องหมายอันตราย) 3 ตัวขึ้นไปเพื่อเปิดรอบฟรีสปิน 15 ครั้ง  
        โดย Scatter เพิ่มแต่ละตัวจะเพิ่ม +2 ฟรีสปิน  
        จุดเด่นคือ “ตัวคูณรวมจาก Wild จะไม่รีเซ็ต” ตลอดรอบโบนัส!
      </li>
      <li>
        <strong>Bonus Buy (เฉพาะบางประเทศ):</strong>  
        ผู้เล่นสามารถซื้อฟีเจอร์โบนัสได้ในราคา 75x ของเงินเดิมพัน
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Zombie Outbreak</h2>
    <p>
      <strong>Zombie Outbreak</strong> เป็นหนึ่งในเกมแนวสยองขวัญที่ออกแบบได้สมจริงและตื่นเต้นที่สุดของ  
      <strong>PG Soft</strong> ด้วยฟีเจอร์ Wild ที่ขยายและตัวคูณสะสมไม่รู้จบ  
      ผสมผสานกับภาพกราฟิกสุดหลอนและเสียงประกอบสุดระทึก  
      ทำให้ทุกการหมุนเต็มไปด้วยความลุ้นระทึกและโอกาสรับรางวัลสูงถึง <strong>5,000x</strong>
    </p>
    <p>
      ถ้าคุณคือแฟนเกมแนวซอมบี้หรือชอบความตื่นเต้นในแบบ “เอาชีวิตรอด”  
      เกมนี้คือหนึ่งในสล็อตที่คุณไม่ควรพลาดอย่างยิ่ง!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.76%",
            "volatility": "สูง",
            "maximum_Win": "฿500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/187536/ade42f46b8.png",
            "release_Date": "2024",
            "reels": "5 (รูปแบบ 4-5-4-5-4)",
            "rows": "ผสมผสาน (4-5-4-5-4)",
            "minBet": "฿8.00",
            "maxBet": "฿4,000.00",
            "licensing": [
                { "name": "UKGC", "website": "https://www.gamblingcommission.gov.uk/", "logo": "https://www.newbettingoffers.co.uk/assets/uploads/UKGC-logo-v2.PNG" },
                { "name": "MGA", "website": "https://www.mga.org.mt/", "logo": "https://www.mga.org.mt/app/uploads/mga.png" },
                { "name": "Gibraltar Gaming", "website": "https://www.gibraltar.gov.gi/", "logo": "https://www.gibraltar.gov.gi/assets/img/logo-white.png" }
            ]
        }
    }
    ,
    {
        "path": "asgardian-rising",
        "name": "Asgardian Rising",
        "img": "/media/imgs/asgardian_rising.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Asgardian Rising</h2>
    <p>
      <strong>Asgardian Rising</strong> จากค่าย <strong>PG Soft</strong>  
      จะพาคุณเดินทางสู่โลกแห่งตำนานนอร์สอันศักดิ์สิทธิ์ในนครแอสการ์ด  
      ดินแดนของเทพเจ้าผู้ยิ่งใหญ่ เกมนี้มาพร้อมภาพกราฟิกสวยงาม  
      เอฟเฟกต์สุดอลังการ และเสียงเพลงแนวออร์เคสตร้าที่ชวนฮึกเหิม  
      ให้บรรยากาศเหมือนอยู่ท่ามกลางสงครามแห่งเทพเจ้า!
    </p>
    <p>
      เกมนี้ถือเป็นหนึ่งในสล็อตแนวไวค์กิ้งที่ออกแบบมาอย่างลงตัวที่สุดของ PG Soft  
      ด้วยรูปแบบรีลแปลกใหม่ <strong>5-6-6-6-6-5</strong> และวิธีชนะมากถึง  
      <strong>32,400 วิธี</strong> ทำให้ทุกการหมุนเต็มไปด้วยความตื่นเต้น  
      และโอกาสรับรางวัลใหญ่สูงสุดถึง <strong>฿2,500,000.00</strong>
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Asgardian Rising</h2>
    <p>
      เกมนี้มีโครงสร้างรีลแบบ <strong>5-6-6-6-6-5</strong> พร้อม <strong>32,400 เพย์ไลน์</strong>  
      โดยผู้เล่นต้องได้สัญลักษณ์ที่เหมือนกันอย่างน้อย 3 ตัวขึ้นไป  
      บนรีลที่อยู่ติดกันจากซ้ายไปขวาเพื่อชนะรางวัล
    </p>
    <p>
      สามารถวางเดิมพันได้ตั้งแต่ <strong>฿8.00</strong> ถึง <strong>฿4,000.00</strong> ต่อการหมุน  
      เหมาะสำหรับทั้งผู้เล่นมือใหม่และมืออาชีพที่ต้องการลุ้นโบนัสขนาดใหญ่  
      เกมนี้ยังรองรับโหมดมือถือเต็มรูปแบบ เหมาะกับการเล่นทุกที่ทุกเวลา
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษในเกม Asgardian Rising</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Cascading Wins:</strong>  
        เมื่อชนะ สัญลักษณ์ที่ชนะจะถูกลบออก และสัญลักษณ์ใหม่จะตกลงมาแทน  
        หากสัญลักษณ์ที่มีกรอบเงินถูกลบออก มันจะกลายเป็นกรอบทองในรอบต่อไป  
        และหากกรอบทองถูกลบออก มันจะเปลี่ยนเป็น <strong>Wild</strong>  
        ฟีเจอร์นี้เรียกว่า <strong>Wilds On The Way</strong>
      </li>
      <li>
        <strong>Reel Multipliers:</strong>  
        ใต้รีล 2, 3, 4 และ 5 จะมีตัวคูณเริ่มต้นที่ x1  
        ทุกครั้งที่รีลนั้นมีสัญลักษณ์ชนะ ตัวคูณจะเพิ่มขึ้น +1  
        และเมื่อรวมกันจะกลายเป็นตัวคูณรวมสำหรับรางวัลในรอบนั้น
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ <strong>Scatter 4 ตัว</strong> ขึ้นไป จะเข้าสู่รอบฟรีสปิน  
        เริ่มต้นที่ 12 รอบ และ Scatter เพิ่มทุกตัวจะให้ +2 ฟรีสปินเพิ่มเติม  
        ในรอบโบนัส ตัวคูณรีลทั้งหมดจะเริ่มต้นที่ x2  
        และเพิ่มขึ้น +2 ทุกครั้งที่ชนะ
      </li>
      <li>
        <strong>Bonus Buy (เฉพาะบางประเทศ):</strong>  
        สามารถซื้อฟีเจอร์โบนัสได้ในราคา 75x ของเงินเดิมพัน
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Asgardian Rising</h2>
    <p>
      <strong>Asgardian Rising</strong> เป็นเกมสล็อตธีมเทพเจ้าไวค์กิ้งสุดอลัง  
      ที่มาพร้อมระบบตัวคูณแบบรีลแยกและฟีเจอร์ Cascading Wins ที่น่าตื่นเต้น  
      ช่วยให้ผู้เล่นมีโอกาสชนะต่อเนื่องในทุกการหมุน  
      และในรอบฟรีสปิน ตัวคูณจะทวีค่าขึ้นเรื่อย ๆ อย่างไร้ขีดจำกัด!
    </p>
    <p>
      ด้วยค่า RTP สูงถึง <strong>96.76%</strong>  
      และรางวัลสูงสุดถึง <strong>25,000x</strong> ของเงินเดิมพัน  
      เกมนี้คือหนึ่งในผลงานยอดเยี่ยมของ PG Soft ที่คุณไม่ควรพลาด  
      หากคุณชอบเกมแนวตำนานนอร์สที่ทั้งสวยงามและจ่ายหนัก!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.76%",
            "volatility": "สูง",
            "maximum_Win": "฿2,500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "2024",
            "reels": "5-6-6-6-6-5",
            "rows": "แบบผสมผสาน",
            "minBet": "฿8.00",
            "maxBet": "฿4,000.00",
            "licensing": [
                { "name": "UKGC", "website": "https://www.gamblingcommission.gov.uk/", "logo": "https://casinobeats.com/wp-content/uploads/2025/01/UK-Gambling-Commission.jpg" },
                { "name": "MGA", "website": "https://www.mga.org.mt/", "logo": "https://www.mga.org.mt/app/uploads/mga.png" },
                { "name": "Gibraltar Gaming", "website": "https://www.gibraltar.gov.gi/", "logo": "https://www.gibraltar.gov.gi/assets/img/logo.jpg" }
            ]
        }
    }
    ,
    {
        "path": "pinata-wins",
        "name": "Pinata Explosivo",
        "img": "/media/imgs/pinata_wins.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Pinata Explosivo</h2>
    <p>
      เตรียมตัวเข้าสู่ปาร์ตี้เม็กซิกันสุดมันในเกม <strong>Pinata Explosivo</strong>  
      จากค่าย <strong>Games Global</strong> พัฒนาโดย <strong>Snowborn Games</strong>  
      ที่มาพร้อมสีสันสดใส ดนตรีสไตล์มาเรียชิ และเหล่าปินยาต้า (Piñata)  
      ที่พร้อมระเบิดความสนุกและรางวัลใหญ่ให้คุณทุกครั้งที่หมุน!
    </p>
    <p>
      เกมนี้มีความผันผวนระดับกลาง (Medium Volatility)  
      พร้อมฟีเจอร์พิเศษจากปินยาต้าสามแบบ และแจ็กพอตคงที่ 4 ระดับ  
      ที่สามารถมอบรางวัลได้สูงสุดถึง <strong>฿8,640,000.00</strong>  
      เรียกได้ว่าเป็นงานปาร์ตี้แห่งโชคจริง ๆ!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Pinata Explosivo</h2>
    <p>
      เกมนี้มาในรูปแบบรีลมาตรฐาน <strong>5x3</strong>  
      และมีเพย์ไลน์ทั้งหมด <strong>20 วิธีชนะ</strong>  
      ผู้เล่นสามารถปรับเดิมพันได้ตั้งแต่ <strong>฿8.00</strong> ถึง <strong>฿1,600.00</strong> ต่อการหมุน  
      เพียงกดปุ่มหมุน (Spin) เพื่อเริ่มความสนุก
    </p>
    <p>
      การชนะเกิดขึ้นเมื่อได้สัญลักษณ์เหมือนกันอย่างน้อย 3 ตัวขึ้นไปบนเพย์ไลน์  
      สัญลักษณ์ Wild สามารถแทนสัญลักษณ์อื่นได้ (ยกเว้น Bonus)  
      เพื่อเพิ่มโอกาสชนะในแต่ละรอบ
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษใน Pinata Explosivo</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Bonus Fiesta:</strong>  
        เมื่อได้สัญลักษณ์ <strong>Dynamite</strong> 1 ตัวขึ้นไป  
        จะเรียกฟีเจอร์ปาร์ตี้โบนัสที่มีปินยาต้า 3 แบบให้สุ่มรางวัล:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><strong>Cash Flip:</strong> พลิกเหรียญเพื่อเพิ่มมูลค่าได้สูงสุดถึง 300x</li>
          <li><strong>Instant Collect:</strong> เก็บเหรียญรางวัลทั้งหมดบนหน้าจอทันที</li>
          <li><strong>Cash Multiplier:</strong> คูณรางวัลแบบสุ่มด้วย x2, x3 หรือ x5</li>
        </ul>
      </li>
      <li>
        <strong>Hold &amp; Win:</strong>  
        ฟีเจอร์โบนัสที่เริ่มต้นด้วย 3 รีสปิน  
        ทุกเหรียญที่ตกลงมาจะรีเซ็ตจำนวนรีสปินกลับเป็น 3 และเก็บสะสมมูลค่ารางวัลเรื่อย ๆ
      </li>
      <li>
        <strong>Fixed Jackpots:</strong>  
        ภายในรอบโบนัสสามารถรับหนึ่งใน 4 แจ็กพอตคงที่  
        ซึ่งมีรางวัลตั้งแต่ Mini จนถึง Mega!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปเกมสล็อต Pinata Explosivo</h2>
    <p>
      <strong>Pinata Explosivo</strong>  
      เป็นเกมสล็อตธีมเทศกาลเม็กซิกันที่เต็มไปด้วยพลังและสีสัน  
      มาพร้อมระบบโบนัสแปลกใหม่และฟีเจอร์ปินยาต้าสุดสนุก  
      เหมาะสำหรับผู้เล่นที่ชอบความสดใสและความตื่นเต้นในทุกการหมุน
    </p>
    <p>
      ด้วยค่า RTP ที่ <strong>96.05%</strong> และรางวัลสูงสุดถึง <strong>6,000x</strong>  
      เกมนี้ถือเป็นอีกหนึ่งสล็อตคุณภาพจาก <strong>Games Global</strong>  
      ที่ให้ทั้งความสนุกและโอกาสทำกำไรไปพร้อมกัน!
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.05%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿8,640,000.00",
            "provider": "Games Global (โดย Snowborn Games)",
            "provider_img": "https://www.gamesglobal.com/images/4.0/logo/main-logo.png",
            "release_Date": "18/03/2025",
            "reels": "5",
            "rows": "3",
            "minBet": "฿8.00",
            "maxBet": "฿1,600.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto,w=64,h=64/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto,w=64,h=64/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto,w=64,h=64/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    }
    ,
    {
        "path": "the-great-icescape",
        "name": "The Great Icescape",
        "img": "/media/imgs/the_great_icescape.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต The Great Icescape</h2>
    <p>
      ออกผจญภัยไปในขั้วโลกใต้กับเจ้าลูกเพนกวินสุดน่ารัก  
      ในเกมสล็อต <strong>The Great Icescape</strong> จากค่าย <strong>PG Soft</strong>  
      ที่จะพาคุณไปตะลุยน้ำแข็งบนวงล้อ 5x5 พร้อมวิธีชนะได้สูงสุดถึง 3,125 วิธี!
    </p>
    <p>
      เป้าหมายคือการทลายน้ำแข็งที่ขวางวงล้อ เพื่อขยายกระดาน  
      และเข้าสู่รอบโบนัสรีสปินที่มาพร้อมตัวคูณ (Multiplier) และ “ชีวิตพิเศษ”  
      ที่ช่วยให้คุณชนะต่อเนื่องได้เรื่อย ๆ!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีเล่น The Great Icescape</h2>
    <p>
      เริ่มต้นเกมด้วยรูปแบบ 1-3-5-3-1 รวมทั้งหมด 45 วิธีชนะ  
      เมื่อคุณชนะ สัญลักษณ์ที่เกี่ยวข้องจะทำลายน้ำแข็ง  
      และขยายวงล้อเพื่อปลดล็อกเส้นทางใหม่ ๆ เพิ่มโอกาสในการชนะมากขึ้น
    </p>
    <p>
      หากคุณสามารถทลายน้ำแข็งได้ครบ 12 ช่อง  
      จะเข้าสู่โหมด <strong>Respin Bonus</strong> โดยอัตโนมัติ  
      ซึ่งจะเล่นบนกระดานขนาด 5x5 เต็มรูปแบบ
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Win Respins & Grid Expansion:</strong>  
        ทุกการชนะจะทำลายน้ำแข็งตามจำนวนสัญลักษณ์ที่ชนะ  
        และเปิดช่องใหม่บนกระดานเพื่อเพิ่มวิธีชนะ
      </li>
      <li>
        <strong>Respin Bonus:</strong>  
        เมื่อทลายน้ำแข็งครบ 12 ช่อง  
        คุณจะได้เริ่มรอบรีสปินพร้อมตัวคูณเริ่มต้น x2 และ “ชีวิตพิเศษ” 1 ชีวิต  
        สัญลักษณ์ที่ชนะจะถูกเก็บในมิเตอร์พิเศษ:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>มิเตอร์สีน้ำเงิน: เพิ่มตัวคูณ +1</li>
          <li>มิเตอร์สีม่วง: เพิ่มชีวิตพิเศษ +1</li>
        </ul>
        รอบโบนัสจะดำเนินต่อไปจนกว่าชีวิตพิเศษจะหมดและไม่มีการชนะใหม่เกิดขึ้น
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว The Great Icescape</h2>
    <p>
      <strong>The Great Icescape</strong>  
      เป็นเกมสล็อตธีมเพนกวินน้ำแข็งที่ทั้งน่ารักและท้าทาย  
      เหมาะสำหรับผู้เล่นที่ชอบเกมแนว “ชนะต่อเนื่อง” และสะสมตัวคูณ  
      ด้วยค่า RTP ที่ <strong>96.33%</strong> และรางวัลสูงสุดถึง <strong>7,963x</strong>  
      เกมนี้ถือเป็นหนึ่งในผลงานเด่นของ <strong>PG Soft</strong>  
      ที่มอบความสนุกพร้อมโอกาสทำกำไรได้จริง
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.33%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿7,963x ของเงินเดิมพัน",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "05/11/2019",
            "reels": "5",
            "rows": "5",
            "minBet": "฿1.00",
            "maxBet": "฿2,000.00",
            "licensing": [
                { "name": "UKGC", "website": "https://www.gamblingcommission.gov.uk/", "logo": "https://www.newbettingoffers.co.uk/assets/uploads/UKGC-logo-v2.PNG" },
                { "name": "MGA", "website": "https://www.mga.org.mt/", "logo": "https://www.mga.org.mt/app/uploads/mga.png" },
                { "name": "Gibraltar Gaming", "website": "https://www.gibraltar.gov.gi/", "logo": "https://www.gibraltar.gov.gi/assets/img/logo-white.png" }
            ]
        }
    },
    {
        "path": "fortune-tree",
        "name": "ต้นไม้แห่งโชคลาภอันมั่งคั่ง (Fortune Tree)",
        "img": "/media/imgs/forture_tree.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต ต้นไม้แห่งโชคลาภอันมั่งคั่ง (Fortune Tree)</h2>
    <p>
      <strong>Fortune Tree</strong> จากค่าย <strong>Jili Games</strong>  
      เป็นเกมสล็อตธีมเอเชียสุดหรูที่เปิดตัวในปี 2021  
      ตัวเกมตั้งอยู่ใต้ต้นซากุระทองคำ พร้อมเหรียญทองมากมายที่ร่วงหล่นจากฟ้า  
      ใช้รูปแบบวงล้อ <strong>5 รีล 3 แถว</strong> และมี <strong>30 เพย์ไลน์</strong>  
      ชนะได้จากซ้ายไปขวาเริ่มที่รีลซ้ายสุด
    </p>
    <p>
      ภาพกราฟิกระดับพรีเมียมและเสียงเพลงแนวเอเชียผ่อนคลาย  
      ผสมผสานบรรยากาศแบบวัดโบราณและกลีบดอกซากุระลอยละลิ่วในอากาศ  
      เกมนี้สามารถเล่นได้ทั้งบน <strong>มือถือ Android และ iOS</strong> อย่างลื่นไหล
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fortune Tree</h2>
    <p>
      ผู้เล่นสามารถวางเดิมพันได้ตั้งแต่ <strong>฿3.50</strong> ถึง <strong>฿7,000</strong> ต่อรอบ  
      (ขึ้นอยู่กับคาสิโนที่ให้บริการ)  
      เพียงเลือกจำนวนเดิมพัน กดปุ่มหมุน แล้วรอให้สัญลักษณ์เรียงตรงกันบนเพย์ไลน์  
      สัญลักษณ์ <strong>Wild</strong> และ <strong>Scatter</strong>  
      จะช่วยปลดล็อคฟีเจอร์พิเศษและโบนัสได้ง่ายขึ้น
    </p>
    <p>
      สัญลักษณ์ที่จ่ายสูงคือ <strong>มังกรทอง</strong> และ <strong>เหรียญทอง</strong>  
      ส่วนสัญลักษณ์รองลงมาคือกบ เต่า และปลาคาร์ฟ  
      สัญลักษณ์ไม้ไผ่และดอกบัวให้รางวัลระดับกลาง  
      ส่วนตัวอักษร A, K, Q, J คือรางวัลต่ำ
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและคุณสมบัติพิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Golden Tree Feature:</strong>  
        ฟีเจอร์สุ่มที่อาจเกิดขึ้นหลังการหมุนแต่ละครั้ง  
        โดยจะมีเหรียญทอง 2–5 เหรียญตกลงมาจากต้นไม้  
        และเปลี่ยนสัญลักษณ์บนรีลให้กลายเป็น Wild เพิ่มโอกาสชนะ
      </li>
      <li>
        <strong>Fortune Pig Bonus:</strong>  
        เมื่อได้สัญลักษณ์หมูทองคำ 3 ตัวบนรีล 1, 3, 5  
        จะเข้าสู่เกมโบนัส “Pick Object” ที่ให้คุณเลือกเหรียญทอง 7–15 ครั้ง  
        เพื่อเปิดเผยถุงรางวัลสีต่าง ๆ พร้อมรางวัลคูณตั้งแต่ 1x ถึง 888x
      </li>
      <li>
        <strong>Wild Symbol:</strong>  
        สัญลักษณ์เหรียญทองและมังกรครามทำหน้าที่แทนสัญลักษณ์อื่น ๆ  
        ยกเว้น Scatter และยังมอบรางวัลสูงสุดถึง 1,200 เหรียญ
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Fortune Tree</h2>
    <p>
      <strong>ต้นไม้แห่งโชคลาภอันมั่งคั่ง</strong>  
      เป็นเกมสล็อตแนวผ่อนคลายที่มีทั้งกราฟิกสวยและเพลงประกอบที่นุ่มนวล  
      มาพร้อมค่า RTP สูงถึง <strong>97%</strong>  
      และความผันผวนระดับ <strong>ต่ำถึงปานกลาง</strong>  
      เหมาะสำหรับผู้เล่นทุกระดับที่ต้องการเล่นแบบยาว ๆ และทำกำไรแบบมั่นคง
    </p>
    <p>
      ถึงแม้จะไม่มีฟรีสปินหรือแจ็กพอตขนาดใหญ่  
      แต่โบนัส Pick Object ที่จ่ายสูงสุดถึง <strong>1,000x</strong>  
      ก็เพียงพอให้เกมนี้กลายเป็นหนึ่งในสล็อตเอเชียที่คุ้มค่าและน่าลองที่สุด
    </p>
  </section>
  `,
        "meta": {
            "rtp": "97%",
            "volatility": "ต่ำถึงปานกลาง",
            "maximum_Win": "฿7,000,000.00",
            "provider": "Jili Games",
            "provider_img": "https://www.jili-slot.com/img/logo-123vip-30.webp",
            "release_Date": "2021",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.50",
            "maxBet": "฿7,000.00",
            "licensing": [
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" }
            ]
        }
    }
    ,
    {
        "path": "double-fortune",
        "name": "คู่รักแห่งโชคลาภ (Double Fortune)",
        "img": "/media/imgs/double_fortune.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต คู่รักแห่งโชคลาภ (Double Fortune)</h2>
    <p>
      เกมสล็อต <strong>Double Fortune</strong> จากค่าย <strong>PG Soft</strong>  
      จะพาผู้เล่นเข้าสู่บรรยากาศของงานแต่งแบบจีนสุดหรู  
      ที่เต็มไปด้วยสีแดงแห่งความมงคล โคมไฟทองคำ และตัวอักษร "囍"  
      ซึ่งเป็นสัญลักษณ์ของ “ความสุขสองเท่า” ตามวัฒนธรรมจีน  
      มอบบรรยากาศแห่งการเฉลิมฉลองและโชคลาภอันยิ่งใหญ่
    </p>
    <p>
      เกมนี้โดดเด่นด้วยระบบรีลคู่ (Double Reels)  
      และสัญลักษณ์พิเศษอย่าง <strong>Double Wild</strong>  
      ที่สามารถนับเป็น 2 สัญลักษณ์ในชุดรางวัลเดียว  
      พร้อมโอกาสคว้ารางวัลสูงสุดถึง <strong>100,000x ของเงินเดิมพัน</strong>!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Double Fortune</h2>
    <p>
      เกมนี้ใช้รูปแบบวงล้อ <strong>5 รีล 3 แถว</strong> และมี <strong>30 เพย์ไลน์</strong>  
      ผู้เล่นสามารถเลือกวางเดิมพันตั้งแต่ <strong>฿10.50</strong> ถึง <strong>฿2,100</strong> ต่อการหมุนหนึ่งครั้ง  
      เพียงกดปุ่ม “สปิน” เพื่อเริ่มเกมและรอให้สัญลักษณ์ตรงกันบนเส้นจ่ายเงินจากซ้ายไปขวา
    </p>
    <p>
      ในระหว่างเล่น สัญลักษณ์ <strong>Double Wild</strong>  
      จะช่วยเพิ่มโอกาสชนะมากขึ้น เพราะนับเป็นสองตำแหน่งในชุดรางวัลเดียวกัน  
      หากเข้าสู่รอบฟรีสปิน จะมีการเพิ่มกระดานอีกชุดให้หมุนพร้อมกัน  
      เพื่อเพิ่มโอกาสชนะสองเท่า!
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษและโบนัส</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Double Wilds:</strong>  
        สัญลักษณ์รูปคู่บ่าวสาว สามารถนับเป็น 2 สัญลักษณ์ในชุดรางวัลเดียว  
        และแทนที่สัญลักษณ์อื่นได้ทั้งหมด (ยกเว้น Scatter)
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ Scatter 3 ตัวบนรีล 2, 3 และ 4  
        จะเปิดรอบฟรีสปินจำนวน <strong>8 ครั้ง</strong>  
        โดยมีการเพิ่มวงล้ออีกหนึ่งชุด ทำให้หมุนได้พร้อมกัน 2 กระดาน  
        หากทั้งสองชุดชนะพร้อมกัน จะได้รับ <strong>ตัวคูณ 8x</strong>  
        และสามารถรับฟรีสปินเพิ่มได้ +1 ต่อ Scatter ที่ปรากฏในรอบโบนัส
      </li>
      <li>
        <strong>Double Reel Mode:</strong>  
        ระบบรีลคู่ที่เปิดในรอบโบนัส ทำให้คุณได้ลุ้นรางวัลสองกระดานในครั้งเดียว  
        ถือเป็นจุดเด่นของเกมที่เพิ่มความตื่นเต้นและผลตอบแทนมากกว่าเดิม
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Double Fortune</h2>
    <p>
      <strong>คู่รักแห่งโชคลาภ (Double Fortune)</strong>  
      เป็นเกมสล็อตธีมงานแต่งแบบจีนที่ทั้งสวยงามและให้บรรยากาศแห่งความมั่งคั่ง  
      มีค่า RTP ที่ <strong>96.22%</strong> และความผันผวนระดับ <strong>สูง</strong>  
      เหมาะกับผู้เล่นที่ชอบความท้าทายและโอกาสชนะรางวัลใหญ่
    </p>
    <p>
      จุดเด่นคือระบบ <strong>Double Wilds</strong> และ <strong>Double Reel Bonus</strong>  
      ที่ให้ลุ้นชนะสองเท่าในรอบฟรีสปิน  
      พร้อมโอกาสชนะสูงสุดถึง <strong>฿10,000,000.00</strong>  
      บนภาพกราฟิกแนวตั้งที่ออกแบบมาให้เหมาะกับการเล่นบนมือถือโดยเฉพาะ
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.22%",
            "volatility": "สูง",
            "maximum_Win": "฿10,000,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "07/2019",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.50",
            "maxBet": "฿2,100.00",
            "licensing": [
                { "name": "MGA", "website": "https://www.mga.org.mt/", "logo": "https://www.mga.org.mt/app/uploads/mga.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    }
    ,
    {
        "path": "leprechaun-riches",
        "name": "สมบัติภูตทอง (Leprechaun Riches)",
        "img": "/media/imgs/leprechaun_riches.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต สมบัติภูตทอง (Leprechaun Riches)</h2>
    <p>
      เกมสล็อต <strong>Leprechaun Riches</strong> จากค่าย <strong>PG Soft</strong>  
      เป็นเกมแนวไอริชที่เต็มไปด้วยเสน่ห์ของ “ภูตทองแห่งโชคลาภ”  
      ภาพกราฟิกสวยสดใสในบรรยากาศต้นไม้โบราณกลางป่ามหัศจรรย์  
      มาพร้อมวงล้อขนาด <strong>6x6</strong> และระบบจ่ายเงินแบบ  
      <strong>Cluster Pays</strong> ที่สร้างการชนะได้ต่อเนื่องแบบลูกโซ่ (Cascading Reels)
    </p>
    <p>
      ด้วยค่า RTP สูงถึง <strong>97.35%</strong> และความผันผวนระดับ <strong>ปานกลาง</strong>  
      เกมนี้ให้ทั้งความสนุกและโอกาสทำเงินอย่างต่อเนื่อง  
      เหมาะกับผู้เล่นทุกระดับที่ชื่นชอบสล็อตแนวแฟนตาซีและรางวัลมหาศาล!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Leprechaun Riches</h2>
    <p>
      เกมนี้เล่นบนวงล้อ <strong>6 รีล 6 แถว</strong>  
      ใช้ระบบ <strong>Cluster Pays</strong>  
      โดยสัญลักษณ์ที่เหมือนกัน 3 ตัวขึ้นไปในแนวตั้งหรือแนวนอน  
      จะสร้างชุดการชนะและสัญลักษณ์เหล่านั้นจะหายไป  
      เพื่อเปิดทางให้สัญลักษณ์ใหม่ตกลงมาแทนที่  
      เพิ่มโอกาสชนะซ้ำในรอบเดียว!
    </p>
    <p>
      ผู้เล่นสามารถวางเดิมพันได้ตั้งแต่ <strong>฿20</strong> ถึง <strong>฿6,000</strong> ต่อรอบ  
      ด้วยโอกาสชนะสูงสุดถึง <strong>100,000x ของเงินเดิมพัน</strong>  
      หรือรางวัลสูงสุดกว่า <strong>฿18,000,000.00</strong> ต่อรอบ!
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและคุณสมบัติพิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Expanded Symbols:</strong>  
        สัญลักษณ์ขยายตัว 2–4 ช่องที่สามารถปรากฏบนรีลกลาง  
        เพื่อเพิ่มโอกาสในการสร้างชุดการชนะมากขึ้น
      </li>
      <li>
        <strong>Wilds & Wilds-on-the-Way:</strong>  
        สัญลักษณ์กรอบเงินเมื่อชนะจะเปลี่ยนเป็นกรอบทอง  
        และกรอบทองเมื่อชนะจะกลายเป็นสัญลักษณ์ <strong>Wild</strong>  
        ซึ่งสามารถแทนสัญลักษณ์อื่นได้ทั้งหมด
      </li>
      <li>
        <strong>Free Spins:</strong>  
        ได้รับ 15 ฟรีสปินเมื่อมี Scatter 4 ตัวขึ้นไปบนหน้าจอ  
        และ +2 ฟรีสปินเพิ่มเติมต่อ Scatter ที่เกินมา  
        ในรอบฟรีสปินจะมีตัวคูณเริ่มต้นที่ <strong>x1</strong>  
        และเพิ่มขึ้น +1 ทุกครั้งที่มีการชนะซ้ำในรอบเดียว
      </li>
      <li>
        <strong>Multiplier Cascade:</strong>  
        ตัวคูณเพิ่มขึ้นเรื่อย ๆ ในระหว่างการชนะต่อเนื่อง  
        ทำให้สามารถสะสมรางวัลแบบทวีคูณได้ไม่จำกัด
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Leprechaun Riches</h2>
    <p>
      <strong>สมบัติภูตทอง</strong> เป็นหนึ่งในเกมสล็อตแนวไอริชที่ได้รับความนิยมสูงสุดของ PG Soft  
      ด้วยระบบการเล่นแบบ <strong>Cluster + Cascading</strong> ที่ให้ความสนุกต่อเนื่อง  
      และค่า RTP สูงกว่าเกมส่วนใหญ่ในหมวดเดียวกัน  
      เกมนี้มอบประสบการณ์การเล่นที่ทั้งผ่อนคลายและเร้าใจ  
      พร้อมรางวัลสูงสุดกว่า <strong>฿18,000,000</strong> ต่อรอบ!
    </p>
    <p>
      เหมาะสำหรับผู้เล่นที่ต้องการเกมที่สมดุลทั้งความสนุกและกำไร  
      หากคุณชอบเกมแนวเทพนิยายที่มีฟีเจอร์เยอะและเล่นได้นาน  
      <strong>Leprechaun Riches</strong> คือตัวเลือกที่ห้ามพลาดครับ 🍀
    </p>
  </section>
  `,
        "meta": {
            "rtp": "97.35%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿18,000,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "06/09/2019",
            "reels": "6",
            "rows": "6",
            "minBet": "฿20.00",
            "maxBet": "฿6,000.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" }
            ]
        }
    },
    {
        "path": "geishas-revenge",
        "name": "การล้างแค้นของเกอิชา (Geisha’s Revenge)",
        "img": "/media/imgs/geisha's_revenge.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต การล้างแค้นของเกอิชา (Geisha’s Revenge)</h2>
    <p>
      <strong>Geisha’s Revenge</strong> จากค่ายเกมมือถือชื่อดัง <strong>PG Soft</strong>  
      เปิดตัวในเดือนกุมภาพันธ์ ปี 2025 พร้อมธีมญี่ปุ่นยุคโบราณสุดอลังการ  
      เรื่องราวของเกอิชา ผู้หญิงผู้มีศิลปะการร่ายรำและดนตรีขั้นสูง  
      ที่กลับมาในบทบาทใหม่เพื่อทวงคืนศักดิ์ศรีและความยุติธรรม
    </p>
    <p>
      เกมนี้มาพร้อมกราฟิกระดับภาพยนตร์, เสียงพากย์ภาษาญี่ปุ่นแท้,  
      และระบบ <strong>Multiplier Windows</strong> สุดล้ำ  
      ที่ให้ตัวคูณสะสมระหว่างการหมุนและคงอยู่ต่อเนื่องในรอบฟรีสปิน  
      เรียกได้ว่าเป็นหนึ่งในเกมที่โดดเด่นที่สุดของปี 2025 เลยทีเดียว!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Geisha’s Revenge</h2>
    <p>
      เกมนี้ใช้วงล้อ <strong>5 รีล</strong> โดยรีลแรกมี 5 แถว  
      และรีลที่ 2–5 มี 6 แถว ทำให้มีเส้นทางชนะมากถึง  
      <strong>6,480 วิธี (Multiway Mechanics)</strong>  
      สัญลักษณ์สามารถมีขนาดตั้งแต่ 1x1 ถึง 4x1  
      เพื่อสร้างรูปแบบการชนะที่หลากหลาย
    </p>
    <p>
      เดิมพันได้ตั้งแต่ <strong>฿7</strong> ถึง <strong>฿35,000</strong> ต่อรอบ  
      (ขึ้นอยู่กับแพลตฟอร์มที่ให้บริการ)  
      เกมนี้มาพร้อมโหมด <strong>Turbo Spin</strong>, <strong>Autoplay</strong>  
      และสามารถปรับเสียงหรือภาพผ่านเมนู Settings ได้  
      รวมถึงรองรับการเล่นบนมือถือทุกระบบ
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและคุณสมบัติพิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Collapsing Reels:</strong>  
        ทุกครั้งที่ชนะ สัญลักษณ์ที่เกี่ยวข้องจะระเบิดหายไป  
        และสัญลักษณ์ใหม่จะตกลงมาแทนที่ ทำให้สามารถชนะซ้ำได้ต่อเนื่อง  
        จนกว่าจะไม่มีชุดชนะเหลืออยู่
      </li>
      <li>
        <strong>Multiplier Windows:</strong>  
        ระบบตัวคูณพิเศษทางซ้ายของรีลที่มีทั้งหมด 5 ช่อง  
        เมื่อเกิดการชนะจากรีลใด จะเปิดหน้าต่างตัวคูณของรีลนั้น  
        และหากชนะต่อเนื่อง ตัวคูณจะเพิ่มขึ้นทีละ <strong>x2</strong>  
        เมื่อรอบหมุนจบ ตัวคูณทั้งหมดจะถูกรวมและนำไปคูณกับเงินรางวัลรวม
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ Scatter 3 ตัวขึ้นไป จะได้รับ <strong>10 ฟรีสปิน</strong>  
        และบวกเพิ่ม +2 ฟรีสปินต่อ Scatter ที่เกินจาก 3 ตัว  
        ในรอบนี้ตัวคูณทั้งหมดจะไม่รีเซ็ตและสะสมต่อเนื่องจนจบรอบโบนัส!
      </li>
      <li>
        <strong>Bonus Buy:</strong>  
        ผู้เล่นสามารถซื้อเข้ารอบฟรีสปินได้ทันที (ขึ้นอยู่กับประเทศที่อนุญาต)
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Geisha’s Revenge</h2>
    <p>
      <strong>Geisha’s Revenge</strong> เป็นเกมสล็อตแนวญี่ปุ่น  
      ที่โดดเด่นทั้งด้านภาพ เสียง และระบบการเล่น  
      ด้วยค่า RTP สูงถึง <strong>96.81%</strong>  
      และความผันผวนระดับ <strong>สูง</strong>  
      ทำให้เหมาะกับผู้เล่นที่ชอบความท้าทายและรางวัลใหญ่
    </p>
    <p>
      จุดเด่นอยู่ที่ระบบ <strong>Multiplier Windows</strong>  
      ที่ให้ตัวคูณต่อเนื่องระหว่างการชนะ  
      และสะสมต่อเนื่องในรอบฟรีสปิน  
      พร้อมรางวัลสูงสุดกว่า <strong>฿500,000.00</strong> ต่อการหมุนหนึ่งครั้ง!  
      ถ้าคุณหลงใหลในบรรยากาศญี่ปุ่นยุคซามูไร  
      เกมนี้จะมอบทั้งความสง่างามและความตื่นเต้นในเวลาเดียวกัน
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.81%",
            "volatility": "สูง",
            "maximum_Win": "฿500,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "02/2025",
            "reels": "5",
            "rows": "6",
            "minBet": "฿7.00",
            "maxBet": "฿35,000.00",
            "licensing": [
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" },
                { "name": "BMM Testlabs", "website": "https://bmm.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/160740/e951855cd0.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" }
            ]
        }
    },
    {
        "path": "jurassic-kingdom",
        "name": "อาณาจักรจูราสสิค (Jurassic Kingdom)",
        "img": "/media/imgs/jurassic_kingdom.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต อาณาจักรจูราสสิค (Jurassic Kingdom)</h2>
    <p>
      ร่วมผจญภัยไปในยุคไดโนเสาร์สุดตื่นเต้นกับเกมสล็อต  
      <strong>Jurassic Kingdom</strong> จากค่ายชื่อดัง <strong>Microgaming</strong>  
      เกมนี้ได้รับแรงบันดาลใจจากภาพยนตร์ระดับตำนาน “Jurassic Park”  
      ที่เต็มไปด้วยเอฟเฟกต์สุดอลังการ ภาพสวยสมจริง และเสียงประกอบระดับภาพยนตร์  
      ทำให้ผู้เล่นรู้สึกเหมือนได้หลุดเข้าไปในป่าลึกที่เต็มไปด้วยสัตว์ดึกดำบรรพ์!
    </p>
    <p>
      ด้วยค่า <strong>RTP 96.67%</strong> และความผันผวนระดับ <strong>ปานกลาง</strong>  
      เกมนี้เหมาะกับผู้เล่นที่ชอบการลุ้นต่อเนื่อง  
      พร้อมระบบฟีเจอร์ฟรีสปิน 5 แบบ ที่อัดแน่นด้วยตัวคูณ, wild พิเศษ  
      และฉากสุดเท่จากภาพยนตร์ต้นฉบับ!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Jurassic Kingdom</h2>
    <p>
      เกมนี้ใช้รูปแบบ <strong>5 รีล 3 แถว</strong> และระบบการชนะ <strong>243 วิธี</strong>  
      โดยไม่ต้องมีเส้นจ่ายแบบเดิม ผู้เล่นสามารถเลือกมูลค่าเหรียญได้ตั้งแต่ <strong>฿0.35</strong>  
      และเดิมพันสูงสุดได้ถึง <strong>฿525.00 ต่อการหมุน</strong>  
      (คิดตามเรทค่าเงินจากต้นฉบับ €0.01 – €15.00)
    </p>
    <p>
      สัญลักษณ์ประกอบด้วยตัวละครจากหนัง เช่น  
      <strong>Alan Grant</strong> และ <strong>Ellie Sattler</strong> ที่ให้รางวัลสูงสุด  
      รวมถึงไดโนเสาร์หลากหลายสายพันธุ์ เช่น  
      ทีเร็กซ์, แร็พเตอร์, ไตรเซอราทอปส์ และ บราคิโอซอรัส  
      ซึ่งแต่ละตัวมีคุณสมบัติพิเศษในรอบฟรีสปิน
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>T-Rex Alert Mode:</strong>  
        ฟีเจอร์สุ่มที่เพิ่มสัญลักษณ์ Wild มากถึง 35 ตัวบนวงล้อ  
        และอยู่ต่อเนื่อง 6 รอบหมุน เพิ่มโอกาสชนะอย่างมาก!
      </li>
      <li>
        <strong>Free Spins Mode:</strong>  
        ฟีเจอร์หลักของเกมที่มีทั้งหมด <strong>5 แบบ</strong>  
        โดยแต่ละโหมดจะอิงตามไดโนเสาร์ชนิดต่าง ๆ เช่น  
        Tyrannosaurus, Velociraptor, Triceratops, Brachiosaurus, และ Dilophosaurus  
        ผู้เล่นเริ่มต้นที่โหมดแรก และปลดล็อคโหมดอื่นหลังจากเล่นฟรีสปินครบ 25 ครั้ง  
        ทุกโหมดมอบฟรีสปิน <strong>12 ครั้ง</strong> พร้อมความสามารถเฉพาะตัว เช่น  
        ตัวคูณสุ่ม, Wild ขยายเต็มรีล, และสัญลักษณ์แยกสองเท่า
      </li>
      <li>
        <strong>Wild Symbol:</strong>  
        โลโก้ Jurassic Park ใช้แทนสัญลักษณ์อื่นทั้งหมด  
        และสามารถปรากฏแบบซ้อนเต็มรีลเพื่อเพิ่มรางวัล
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Jurassic Kingdom</h2>
    <p>
      เกมสล็อต <strong>Jurassic Kingdom</strong> คือการผสมผสานระหว่างความทรงจำจากภาพยนตร์  
      กับประสบการณ์การเล่นสุดระทึกจาก Microgaming  
      ด้วยภาพเคลื่อนไหว 3D สมจริง เสียงประกอบแนวผจญภัย  
      และฟีเจอร์โบนัสสุดอลังการ 5 แบบ  
      ทำให้เกมนี้เป็นหนึ่งในสล็อตแนวไดโนเสาร์ที่ดีที่สุด
    </p>
    <p>
      หากคุณชื่นชอบความตื่นเต้นของยุคจูราสสิคและโอกาสลุ้นรางวัลสูงสุดกว่า  
      <strong>฿3,325,000.00</strong> ต่อรอบหมุน (เทียบจาก €95,000.00)  
      เกมนี้คือ “ตั๋วทองคำ” ที่คุณไม่ควรพลาดครับ 🦕🔥
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.67%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿3,325,000.00",
            "provider": "Microgaming",
            "provider_img": "https://www.gamesglobal.com/images/4.0/logo/main-logo.png",
            "release_Date": "06/08/2014",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.35",
            "maxBet": "฿525.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "golden-west",
        "name": "โกลเด้นเวสต์ (Golden West)",
        "img": "/media/imgs/golden_west.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต โกลเด้นเวสต์ (Golden West)</h2>
    <p>
      เตรียมตัวให้พร้อมสำหรับการดวลปืนในโลกตะวันตกสุดคลาสสิกกับเกม <strong>Golden West</strong>  
      จากค่ายเกมชื่อดัง <strong>Pragmatic Play</strong> ที่มาพร้อมบรรยากาศแบบคาวบอยแท้ ๆ  
      ทั้งเสียงกีตาร์แนว Western และกราฟิกสุดอลังการที่ชวนให้นึกถึงภาพยนตร์ตะวันตกยุคทอง  
      เกมนี้คือการต่อยอดความสำเร็จจากซีรีส์ <strong>Wild West Gold</strong>  
      ที่แฟนเกมสล็อตทั่วโลกต่างหลงใหล
    </p>
    <p>
      ด้วยค่า <strong>RTP 96.48%</strong> และความผันผวนระดับ <strong>สูง</strong>  
      Golden West มอบโอกาสให้ผู้เล่นคว้ารางวัลสูงสุดกว่า <strong>฿129,600,000.00</strong>  
      ต่อการหมุนเพียงครั้งเดียว! เหมาะสำหรับนักล่ารางวัลที่ชอบความเสี่ยงและความเร้าใจแบบดิบ ๆ  
      ในบรรยากาศคาวบอยแท้ ๆ 🪙🔥
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Golden West</h2>
    <p>
      Golden West ใช้รูปแบบวงล้อ <strong>5 รีล 5 แถว</strong>  
      และระบบการจ่ายแบบ <strong>Cluster Pays</strong>  
      ผู้เล่นจะชนะเมื่อมีสัญลักษณ์เหมือนกันอย่างน้อย 5 ตัวขึ้นไป  
      ปรากฏติดกันในกลุ่มใดก็ได้บนกระดาน
    </p>
    <p>
      เกมนี้เปิดให้เดิมพันตั้งแต่ <strong>฿7.00</strong> ถึง <strong>฿16,800.00</strong> ต่อรอบหมุน  
      (อิงจาก €0.20 – €480) และสามารถเปิดโหมด <strong>Autoplay</strong>  
      เพื่อให้วงล้อหมุนอัตโนมัติได้ตามจำนวนรอบที่กำหนด  
      พร้อมฟังก์ชัน <strong>Ante Bet</strong> ที่สามารถเพิ่มโอกาสเข้าฟรีสปินได้สูงถึง 6 เท่า!
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Wild Multipliers:</strong>  
        สัญลักษณ์ Wild สามารถปรากฏพร้อมตัวคูณ x2, x3 หรือ x5  
        เพื่อเพิ่มมูลค่ารางวัลในทุกการชนะ
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ Scatter 3 ตัวขึ้นไป จะได้รับ <strong>10 ฟรีสปิน</strong>  
        พร้อม Wild แบบ Sticky ที่คงอยู่ตลอดรอบโบนัส  
        โดยจำนวน Scatter จะกำหนดระดับของตัวคูณสูงสุด:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>3 Scatter = x2, x3, x5</li>
          <li>4 Scatter = x2, x5, x10</li>
          <li>5 Scatter = x10, x15, x25</li>
        </ul>
      </li>
      <li>
        <strong>Ante Bet:</strong>  
        เพิ่มเงินเดิมพันสองเท่าเพื่อเพิ่มโอกาสเข้าฟีเจอร์ฟรีสปินมากขึ้น 6 เท่า
      </li>
      <li>
        <strong>Bonus Buy:</strong>  
        ซื้อรอบฟรีสปินได้ทันทีในราคา 100x ของเงินเดิมพัน  
        หรือเลือกซื้อ <strong>Super Free Spins</strong> ที่มีตัวคูณสูงสุดในราคา 500x!
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Golden West</h2>
    <p>
      <strong>Golden West</strong> คือเกมที่ผสมผสานกลิ่นอายของคาวบอยและกลไกการเล่นสุดมันส์  
      จาก Pragmatic Play ได้อย่างลงตัว  
      ด้วยภาพสวย เสียงดนตรีแนวตะวันตก และฟีเจอร์โบนัสที่ให้รางวัลหนัก  
      โดยเฉพาะ Sticky Wilds และ Multiplier ที่ระเบิดความมันส์ได้ทุกครั้งที่หมุน!
    </p>
    <p>
      หากคุณเป็นแฟนเกมแนวคาวบอยอย่าง <strong>Wild West Gold</strong> หรือ <strong>Wanted Dead or a Wild</strong>  
      เกมนี้คือ “ภาคใหม่” ที่คุณไม่ควรพลาดเด็ดขาด  
      เพราะมันจะพาคุณเข้าสู่โลกของทองคำ ปืน และรางวัลระดับมหาศาล 💰🤠
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.48%",
            "volatility": "สูง",
            "maximum_Win": "฿129,600,000.00",
            "provider": "Pragmatic Play",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/89026/5917cabdb1.png",
            "release_Date": "02/2025",
            "reels": "5",
            "rows": "5",
            "minBet": "฿7.00",
            "maxBet": "฿16,800.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "fortune-toad",
        "name": "ฟอร์จูนโทด (Fortune Toad)",
        "img": "/media/imgs/fortune_toad.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต ฟอร์จูนโทด (Fortune Toad)</h2>
    <p>
      พบกับภาคต่อสุดร้อนแรงของเกมกบในตำนานจากค่าย <strong>Play’n GO</strong>  
      ในเกมสล็อต <strong>Fortune Toad</strong> ที่มาพร้อมกราฟิกสุดอลังการ  
      เอฟเฟกต์แสงไฟจากลาวา และเสียงประกอบที่เต็มไปด้วยพลังของโชคลาภ!  
      ภาคใหม่นี้ได้เพิ่มฟีเจอร์โบนัสสุดพิเศษและอัตราการคูณรางวัลที่สูงกว่าเดิม  
      พร้อมค่าผลตอบแทนผู้เล่น (RTP) ที่ <strong>96.20%</strong>  
      และความผันผวนระดับ <strong>สูง</strong> เหมาะสำหรับผู้เล่นที่ชอบความท้าทาย  
      และการลุ้นโบนัสครั้งใหญ่!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Fortune Toad</h2>
    <p>
      Fortune Toad เป็นเกมสล็อตขนาด <strong>5 รีล 4 แถว</strong>  
      พร้อมระบบจ่ายเงินแบบ <strong>1,024 วิธี</strong>  
      ผู้เล่นจะชนะได้เมื่อมีสัญลักษณ์เหมือนกันอย่างน้อย 3 ตัว  
      จากซ้ายไปขวาในรีลที่อยู่ติดกัน  
    </p>
    <p>
      เดิมพันเริ่มต้นเพียง <strong>฿3.50</strong> และสูงสุดถึง <strong>฿3,500.00</strong> ต่อการหมุนหนึ่งครั้ง  
      (คำนวณจาก €0.10 – €100) เกมนี้ไม่มีระบบซื้อโบนัส (Bonus Buy)  
      แต่สามารถตั้งค่า <strong>Autoplay</strong> เพื่อหมุนอัตโนมัติได้ตามต้องการ  
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Toad Upgrade:</strong>  
        หากได้สัญลักษณ์ Scatter (Firefly) เพียง 2 ตัว  
        จะทำให้สัญลักษณ์กบบนรีลถูกอัปเกรดเป็นเวอร์ชันที่มีมูลค่ามากขึ้น
      </li>
      <li>
        <strong>Golden Lilypad:</strong>  
        เมื่อสัญลักษณ์นี้ปรากฏและชนะรางวัล  
        กบจะสามารถ "แบ่งตัว" เพื่อเพิ่มจำนวนสัญลักษณ์และขยายการชนะในรอบเดียวกัน
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ Scatter 3 ตัวขึ้นไป จะเข้าสู่โหมดฟรีสปิน  
        โดยมีให้เลือก 2 แบบ:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>9 ฟรีสปินแบบปกติ – มีสัญลักษณ์กบทุกระดับปรากฏบนรีล</li>
          <li>5 ฟรีสปินแบบ High Volatility – เริ่มต้นด้วยสัญลักษณ์ที่มีมูลค่าสูงสุด</li>
        </ul>
        ในโหมดฟรีสปิน สัญลักษณ์ Golden Lilypad จะอยู่ในรีลกลางเสมอ
      </li>
      <li>
        <strong>Re-trigger Free Spins:</strong>  
        ได้ Scatter เพิ่มระหว่างฟรีสปินจะขยายจำนวนรอบโบนัสได้สูงสุดถึง <strong>60 ครั้ง!</strong>
      </li>
      <li>
        <strong>Inferno Spins:</strong>  
        หากระหว่างฟรีสปินได้สัญลักษณ์ Inferno 5 ตัวขึ้นไป  
        จะได้รับโบนัสรีสปิน 3 ครั้ง และกบทั้งหมดจะคงอยู่ต่อไปในรอบถัดไป
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Fortune Toad</h2>
    <p>
      <strong>Fortune Toad</strong> คือภาคต่อที่พัฒนาอย่างชาญฉลาดจากเกม Fire Toad ดั้งเดิม  
      มอบความสนุกในธีมธรรมชาติร้อนแรง ผสานความแฟนตาซีแบบเอเชีย  
      ฟีเจอร์อัปเกรดกบและรีสปินโบนัสเพิ่มความลุ้นในทุกการหมุน  
      แม้จะไม่มี Bonus Buy แต่รางวัลสูงสุดถึง <strong>฿18,550,000.00</strong>  
      (คำนวณจาก 5,300x ของเดิมพันสูงสุด)  
      ทำให้เกมนี้เป็นอีกหนึ่งเกมที่ผู้เล่นสายล่ารางวัลไม่ควรพลาดครับ 🐸🔥
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.20%",
            "volatility": "สูง",
            "maximum_Win": "฿18,550,000.00",
            "provider": "Play’n GO",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/203927/5035602057.png",
            "release_Date": "02/09/2025",
            "reels": "5",
            "rows": "4",
            "minBet": "฿3.50",
            "maxBet": "฿3,500.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "buffalo-king",
        "name": "บัฟฟาโล่คิง (Buffalo King)",
        "img": "/media/imgs/buffalo_king.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต บัฟฟาโล่คิง (Buffalo King)</h2>
    <p>
      ค่าย <strong>Pragmatic Play</strong> พาผู้เล่นออกเดินทางสู่ทุ่งหญ้าแห่งอเมริกาเหนือ  
      ในเกมสล็อตธีมสัตว์ป่าที่เต็มไปด้วยพลังอย่าง <strong>Buffalo King</strong>  
      เกมนี้ใช้ระบบ <strong>4,096 วิธีในการชนะ</strong>  
      พร้อมกราฟิกสวยงามระดับ HD ที่เต็มไปด้วยฝุ่นทรายและเสียงคำรามของกระทิง!
    </p>
    <p>
      แม้ธีมจะดูเรียบง่าย แต่ด้วยอัตราการชนะสูงสุดกว่า  
      <strong>93,750x ของเงินเดิมพัน</strong> (หรือราว <strong>฿337,500,000.00</strong>)  
      และค่าผลตอบแทนผู้เล่น (RTP) <strong>96.06%</strong>  
      ทำให้ Buffalo King กลายเป็นเกมที่เรียบง่ายแต่รางวัลใหญ่อย่างแท้จริง!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Buffalo King</h2>
    <p>
      Buffalo King มาพร้อมรีลขนาด <strong>6 รีล 4 แถว</strong>  
      และระบบการจ่ายแบบ <strong>4,096 วิธี</strong>  
      ชนะได้เมื่อมีสัญลักษณ์เหมือนกัน 3 ตัวขึ้นไปในรีลที่อยู่ติดกันจากซ้ายไปขวา  
      สัญลักษณ์หลักคือกระทิงทอง ซึ่งให้รางวัลสูงสุดถึง 7.5 เท่าของเงินเดิมพัน  
      ส่วนสัตว์อื่น ๆ เช่น สิงโตภูเขา หมาป่า และอินทรี ก็จ่ายรางวัลรองลงมา
    </p>
    <p>
      เกมนี้เปิดให้เดิมพันตั้งแต่ <strong>฿14.00</strong> ถึง <strong>฿2,100.00</strong> ต่อการหมุน  
      (อิงจาก €0.40 – €60) และสามารถเปิดโหมด <strong>Autoplay</strong> ได้สูงสุด 100 รอบ  
      เพื่อหมุนอัตโนมัติอย่างต่อเนื่อง
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Wild Symbol:</strong>  
        สัญลักษณ์ Wild จะปรากฏบนรีล 2 ถึง 6 และแทนที่สัญลักษณ์อื่นเพื่อสร้างชุดชนะ
      </li>
      <li>
        <strong>Scatter Symbol:</strong>  
        สัญลักษณ์เหรียญทอง Scatter 3 ตัวขึ้นไปจะเปิดฟีเจอร์ฟรีสปิน:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>3 Scatter = 8 ฟรีสปิน</li>
          <li>4 Scatter = 15 ฟรีสปิน</li>
          <li>5 Scatter = 25 ฟรีสปิน</li>
          <li>6 Scatter = 100 ฟรีสปิน</li>
        </ul>
      </li>
      <li>
        <strong>Multiplier Wilds:</strong>  
        ในรอบฟรีสปิน Wild ทุกตัวจะมีตัวคูณแบบสุ่ม x2, x3 หรือ x5  
        หากมีหลาย Wild ในรอบเดียวกัน ตัวคูณจะถูกนำมาคูณรวมกันได้สูงสุดถึง <strong>x3,125!</strong>
      </li>
      <li>
        <strong>Re-trigger Free Spins:</strong>  
        ได้ Scatter เพิ่มระหว่างโบนัสฟรีสปินเพื่อขยายรอบต่อเนื่องโดยไม่มีลิมิต
      </li>
      <li>
        <strong>Bonus Buy:</strong>  
        สามารถซื้อรอบฟรีสปินได้ทันทีในราคา 100x ของเงินเดิมพัน
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Buffalo King</h2>
    <p>
      <strong>Buffalo King</strong> เป็นเกมสล็อตแนวสัตว์ป่าสุดคลาสสิกที่ให้ทั้งความตื่นเต้น  
      และรางวัลใหญ่แบบไม่อั้น ด้วยความผันผวนสูงและโอกาสคูณรางวัลมหาศาล  
      เกมนี้เหมาะกับทั้งผู้เล่นใหม่และมือโปรที่ชอบเสี่ยงแบบเน้นกำไรหนัก ๆ  
      การชนะสูงสุดถึง <strong>93,750x</strong> คือสิ่งที่ทำให้เกมนี้ยังคงครองใจผู้เล่นทั่วโลก
    </p>
    <p>
      หากคุณชื่นชอบเกมแนวธรรมชาติแบบอเมริกัน  
      ลองเล่นเกมภาคต่ออย่าง <strong>Buffalo King Megaways</strong> หรือ  
      <strong>Buffalo King Untamed Megaways</strong> ก็ได้เช่นกัน 🦬💥
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.06%",
            "volatility": "สูง",
            "maximum_Win": "฿337,500,000.00",
            "provider": "Pragmatic Play",
            "provider_img": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/89026/5917cabdb1.png",
            "release_Date": "09/01/2020",
            "reels": "6",
            "rows": "4",
            "minBet": "฿0.5",
            "maxBet": "฿2,100.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "mahjong-ways-2",
        "name": "มาจองเวย์ 2 (Mahjong Ways 2)",
        "img": "/media/imgs/mahjongways_2.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต มาจองเวย์ 2 (Mahjong Ways 2)</h2>
    <p>
      ค่าย <strong>PG Soft</strong> กลับมาพร้อมภาคต่อของเกมยอดฮิตอย่าง  
      <strong>Mahjong Ways 2</strong> ที่ได้รับแรงบันดาลใจจากเกมไพ่นกกระจอกดั้งเดิมของจีน  
      เพิ่มฟีเจอร์ตัวคูณต่อเนื่องและระบบ Tumble ที่ทำให้การชนะติดต่อกันเป็นไปได้หลายรอบต่อการหมุนเพียงครั้งเดียว!
    </p>
    <p>
      ด้วยค่า RTP สูงถึง <strong>96.95%</strong> และความผันผวนระดับ <strong>ปานกลาง</strong>  
      Mahjong Ways 2 เหมาะกับทั้งผู้เล่นสายสบายและผู้เล่นที่ชอบรางวัลต่อเนื่องแบบมีจังหวะ  
      นอกจากนี้ยังมีโอกาสชนะสูงสุดถึง <strong>1,708x</strong> ของเงินเดิมพันอีกด้วย!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Mahjong Ways 2</h2>
    <p>
      เกมนี้มาในรูปแบบรีล 5x5 ที่มีโครงสร้างไม่เท่ากัน (4-5-5-5-4)  
      ให้รูปแบบการชนะทั้งหมด <strong>2,000 วิธี</strong>  
      โดยเมื่อชนะ สัญลักษณ์ที่ชนะจะหายไปและสัญลักษณ์ใหม่จะตกลงมาแทน  
      ทำให้สามารถชนะได้หลายครั้งในรอบเดียวด้วยระบบ <strong>Tumble Feature</strong>.
    </p>
    <p>
      เดิมพันเริ่มต้นเพียง <strong>฿0.5</strong> และสูงสุดถึง <strong>฿150.00</strong> ต่อการหมุน  
      (อิงจาก €0.60 – €180) เหมาะสำหรับผู้เล่นทุกระดับ  
      กดปุ่ม “Spin” เพื่อเริ่มหมุน หรือใช้ฟังก์ชัน “Autoplay” สำหรับหมุนอัตโนมัติ
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Gold Symbols:</strong>  
        ปรากฏบนรีล 2, 3 และ 4 — เมื่ออยู่ในชุดที่ชนะจะเปลี่ยนเป็นสัญลักษณ์ Wild โดยอัตโนมัติ.
      </li>
      <li>
        <strong>Multiplier Feature:</strong>  
        ตัวคูณด้านบนรีลจะเพิ่มขึ้นทุกครั้งที่ชนะต่อเนื่อง —  
        เริ่มจาก 1x และสามารถเพิ่มได้ถึง 5x ในเกมปกติ.
      </li>
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้ Scatter 3 ตัวขึ้นไปจะปลดล็อกฟรีสปิน 10 ครั้ง  
        ระหว่างฟรีสปิน รีลกลางจะเต็มไปด้วยสัญลักษณ์ทองทั้งหมด  
        และตัวคูณจะเริ่มที่ 2x–10x ทำให้รางวัลสูงขึ้นอย่างมาก!
      </li>
      <li>
        <strong>Re-trigger:</strong>  
        ทุกครั้งที่ได้ Scatter เพิ่มในระหว่างรอบฟรีสปิน จะได้เพิ่มฟรีสปิน +2 ครั้งโดยไม่จำกัดจำนวน.
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Mahjong Ways 2</h2>
    <p>
      <strong>Mahjong Ways 2</strong> คือภาคต่อที่พัฒนาอย่างลงตัวจากภาคแรก  
      ด้วยตัวคูณที่ต่อเนื่องและระบบสัญลักษณ์ทองที่ช่วยให้ชนะได้บ่อยขึ้น  
      ทำให้เกมนี้กลายเป็นหนึ่งในเกมสล็อตยอดนิยมของ <strong>PG Soft</strong>  
      ที่ให้ทั้งความสนุกและโอกาสทำกำไรที่ยอดเยี่ยม  
      ใครที่ชอบแนวเอเชียแบบคลาสสิกพร้อมโบนัสต่อเนื่อง — เกมนี้คือคำตอบครับ 🀄✨
    </p>
    <p>
      ถ้าชอบเกมนี้ แนะนำลองเล่นเกมแนวใกล้เคียงอย่าง  
      <strong>Lucky Twins Link & Win</strong> (จาก Games Global)  
      หรือ <strong>Temple of Prosperity</strong> (จาก Play’n GO) ด้วยครับ.
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.95%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿6,153,000.00",
            "provider": "PG Soft",
            "provider_img": "https://www.pgsoft.com/_nuxt/img/nav_common_logo_black@2x.b4708a2.png",
            "release_Date": "01/07/2020",
            "reels": "5",
            "rows": "5",
            "minBet": "฿0.5",
            "maxBet": "฿150.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },

    {
        "path": "golden-dragon-wealth",
        "name": "โกลเด้น ดราก้อน เวลธ์ (Golden Dragon Wealth)",
        "img": "/media/imgs/gates_of_wealth.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต โกลเด้น ดราก้อน เวลธ์ (Golden Dragon Wealth)</h2>
    <p>
      ร่วมสัมผัสความมั่งคั่งในโลกแห่งตำนานจีนโบราณกับเกม 
      <strong>Golden Dragon Wealth</strong> จากค่ายเกมชื่อดัง <strong>Gaming Corps</strong>  
      เกมนี้พาผู้เล่นเข้าสู่หุบเขาลึกลับที่มีมังกรทองเฝ้าขุมทรัพย์ พร้อมโอกาสชนะรางวัลสูงสุดถึง  
      <strong>5,000x ของเงินเดิมพัน</strong>!
    </p>
    <p>
      ด้วยกราฟิกสไตล์จีนโบราณ เสียงดนตรีแบบตะวันออก และบรรยากาศที่สงบลึกลับ  
      เกมนี้เหมาะสำหรับผู้เล่นที่ชอบความเรียบง่ายแต่มีเอกลักษณ์โดดเด่น  
      พร้อมระบบฟรีสปินและตัวคูณหลากหลายรูปแบบที่จะช่วยเพิ่มความตื่นเต้นในทุกการหมุน
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Golden Dragon Wealth</h2>
    <p>
      ตัวเกมใช้รูปแบบรีล <strong>5 รีล 3 แถว</strong> และมีระบบการชนะแบบ  
      <strong>243 วิธี (Ways to Win)</strong> ซึ่งไม่จำเป็นต้องเรียงในเพย์ไลน์ใด ๆ  
      เพียงแค่มีสัญลักษณ์เหมือนกันในรีลที่อยู่ติดกันจากซ้ายไปขวาก็จะถือว่าชนะได้ทันที.
    </p>
    <p>
      การวางเดิมพันเริ่มต้นเพียง <strong>฿0.5</strong> และสูงสุดถึง <strong>฿250.00</strong> ต่อการหมุน  
      (อิงจาก €0.10 – €50)  
      ผู้เล่นสามารถปรับเงินเดิมพันได้ง่าย ๆ ผ่านปุ่ม “+ / –” ด้านล่างหน้าจอ  
      หรือเปิดโหมด <strong>Autoplay</strong> สำหรับการหมุนอัตโนมัติ.
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Free Spins:</strong>  
        ฟีเจอร์หลักของเกมคือรอบฟรีสปิน ซึ่งจะเริ่มเมื่อได้ Scatter 3 ตัวขึ้นไป  
        จากนั้นผู้เล่นจะสามารถเลือกหนึ่งใน 4 รูปแบบฟรีสปิน:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>8 ฟรีสปิน พร้อมตัวคูณ 15x–30x</li>
          <li>18 ฟรีสปิน พร้อมตัวคูณ 5x–10x</li>
          <li>28 ฟรีสปิน พร้อมตัวคูณ 2x–5x</li>
          <li>ตัวเลือกปริศนา (สุ่มผสมจำนวนฟรีสปินและตัวคูณ)</li>
        </ul>
      </li>
      <li>
        <strong>Standard Wild:</strong>  
        ใช้แทนสัญลักษณ์ทั่วไปทั้งหมด เพื่อช่วยสร้างชุดชนะได้ง่ายขึ้น.
      </li>
      <li>
        <strong>Dragon Wild:</strong>  
        เมื่อปรากฏบนรีล มังกรทองจะขยายเต็มรีล เพิ่มโอกาสชนะรางวัลใหญ่แบบคอมโบ.
      </li>
      <li>
        <strong>Autoplay Option:</strong>  
        สามารถตั้งค่าให้หมุนอัตโนมัติได้ เหมาะสำหรับผู้เล่นที่ต้องการเกมที่ลื่นไหลต่อเนื่อง.
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Golden Dragon Wealth</h2>
    <p>
      <strong>Golden Dragon Wealth</strong> เป็นเกมสล็อตแนวจีนที่ผสมผสานความเรียบง่ายและภาพสวยระดับพรีเมียม  
      แม้ RTP จะอยู่เพียง <strong>94.18%</strong> แต่ก็ยังมอบความสนุกและความลุ้นในทุกการหมุน  
      โดยเฉพาะฟีเจอร์ฟรีสปินที่เลือกได้หลายแบบ  
      พร้อมตัวคูณสูงสุดถึง <strong>30x</strong> ที่อาจเปลี่ยนเงินเล็ก ๆ ให้กลายเป็นโชคใหญ่ได้!
    </p>
    <p>
      ถ้าคุณชอบเกมธีมมังกรทองแนวจีน ลองเล่นเกมอื่นของค่ายเดียวกัน เช่น  
      <strong>Snoop’s High Rollers</strong> หรือ <strong>Raging Zeus</strong>  
      รับรองว่าคุณจะไม่ผิดหวังแน่นอนครับ 🐲💰
    </p>
  </section>
  `,
        "meta": {
            "rtp": "94.18%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿12,500,000.00",
            "provider": "Gaming Corps",
            "provider_img": "https://www.gamesglobal.com/images/4.0/logo/main-logo.png",
            "release_Date": "12/01/2024",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.5",
            "maxBet": "฿250.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "lucky-streak-3",
        "name": "ลัคกี้สตรีค 3 (Lucky Streak 3)",
        "img": "/media/imgs/lucky_streak.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต ลัคกี้สตรีค 3 (Lucky Streak 3)</h2>
    <p>
      เกมสล็อตคลาสสิกจากค่าย <strong>Endorphina</strong> ที่นำเสนอความเรียบง่ายในสไตล์ตู้สล็อตผลไม้ยุคเก่า  
      โดยในภาคนี้ <strong>Lucky Streak 3</strong> ใช้รูปแบบ 3 รีล 3 แถว พร้อมเพย์ไลน์ 5 เส้น  
      ไม่มีฟีเจอร์ฟรีสปินหรือโบนัสพิเศษใด ๆ เน้นการเล่นแบบดั้งเดิมที่เข้าใจง่ายและสนุกเพลิน ๆ
    </p>
    <p>
      เหมาะสำหรับผู้เล่นที่ชื่นชอบสล็อตแนวเรโทร พร้อมระบบ <strong>Risk Game</strong>  
      ที่ให้คุณเสี่ยงทายไพ่เพื่อคูณเงินรางวัล — สนุกแบบท้าทายและตัดสินใจได้ด้วยตัวเอง!
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Lucky Streak 3</h2>
    <p>
      เกมนี้มาในรูปแบบ <strong>3 รีล 3 แถว</strong> และมีเพย์ไลน์ปรับได้สูงสุด 5 เส้น  
      ผู้เล่นสามารถเลือกจำนวนเส้นที่ต้องการเปิดใช้ได้ โดยการชนะจะเกิดขึ้นเมื่อสัญลักษณ์เหมือนกันเรียงเต็ม 3 รีลในเส้นที่เปิดใช้งาน.
    </p>
    <p>
      เดิมพันขั้นต่ำเพียง <strong>฿0.4</strong> ต่อเส้น และสูงสุดถึง <strong>฿8,000.00</strong> ต่อการหมุน  
      (อิงจาก €0.01 – €200)  
      การควบคุมทั้งหมดอยู่ใต้รีล เช่น ปุ่ม “LINES”, “BET”, “SPIN” รวมถึง “AUTOPLAY” และ “TURBO”.
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษของเกม</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Risk Game (โหมดเสี่ยงโชค):</strong>  
        หลังจากชนะในการหมุนหนึ่งครั้ง ผู้เล่นสามารถเลือกเข้าสู่โหมดเสี่ยงโชคได้  
        โดยจะมีไพ่เจ้ามือหงายอยู่ 1 ใบ และไพ่ปิด 4 ใบให้เลือก  
        หากเปิดได้ไพ่ที่มีแต้มสูงกว่า จะได้รับเงินรางวัลเป็นสองเท่า!
      </li>
      <li>
        <strong>Full Grid Win:</strong>  
        หากสัญลักษณ์ผลไม้ชนิดเดียวกันเต็มทั้งกระดาน จะได้รับการคูณรางวัลเพิ่มขึ้นเป็น 2 เท่าโดยอัตโนมัติ.
      </li>
      <li>
        <strong>Autoplay:</strong>  
        หมุนอัตโนมัติได้เรื่อย ๆ จนกว่าจะกดหยุด เหมาะสำหรับการเล่นแบบสบาย ๆ ไม่ต้องกดบ่อย.
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Lucky Streak 3</h2>
    <p>
      <strong>Lucky Streak 3</strong> เป็นสล็อตแนวคลาสสิกที่เน้นความเรียบง่าย ไม่มีโบนัสซับซ้อน  
      เหมาะกับผู้เล่นที่ชอบความดั้งเดิมแบบตู้สล็อตผลไม้ในคาสิโนจริง  
      โดยมีค่า RTP อยู่ที่ <strong>96.00%</strong> และความผันผวนระดับปานกลาง  
      ซึ่งให้ผลตอบแทนสมดุลระหว่างความเสี่ยงและโอกาสลุ้นรางวัลใหญ่.
    </p>
    <p>
      ถ้าคุณชอบเกมสไตล์นี้ แนะนำให้ลองเล่น  
      <strong>Sizzling Hot</strong> จาก Novomatic หรือ <strong>Fruit Shop</strong> จาก NetEnt  
      ซึ่งเป็นอีกสองเกมผลไม้สุดคลาสสิกที่ได้รับความนิยมไม่แพ้กัน 🍋🍒
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.00%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿6,000,000.00",
            "provider": "Endorphina",
            "provider_img": "https://objects.kaxmedia.com/auto/o/176165/c7bfde5895.png",
            "release_Date": "02/03/2019",
            "reels": "3",
            "rows": "3",
            "minBet": "฿0.4",
            "maxBet": "฿8,000.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "hot-hot-fruit",
        "name": "ฮอต ฮอต ฟรุ๊ต (Hot Hot Fruit)",
        "img": "/media/imgs/hot_fruits.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต ฮอต ฮอต ฟรุ๊ต (Hot Hot Fruit)</h2>
    <p>
      เกมสล็อตผลไม้แนวย้อนยุคจากค่าย <strong>Habanero</strong>  
      ที่นำบรรยากาศแบบคาสิโนคลาสสิกกลับมามีชีวิตอีกครั้งในยุคดิจิทัล  
      <strong>Hot Hot Fruit</strong> มาพร้อมกราฟิกแสงนีออนสไตล์ยุค 80s  
      เสียงประกอบแบบเรโทร และโอกาสลุ้นรางวัลสูงสุดถึง  
      <strong>฿112,500,000</strong> จากระบบตัวคูณและฟีเจอร์พิเศษ!
    </p>
    <p>
      เกมนี้โดดเด่นด้วยค่า RTP สูง <strong>96.84%</strong>  
      และระดับความผันผวนแบบ <strong>สูง (High Volatility)</strong>  
      ที่ให้การลุ้นรางวัลใหญ่สุดเร้าใจทุกครั้งที่หมุนรีล.
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Hot Hot Fruit</h2>
    <p>
      ตัวเกมใช้รูปแบบรีล <strong>5 รีล 3 แถว</strong> พร้อมเส้นจ่ายเงิน (Paylines) ทั้งหมด <strong>15 เส้น</strong>  
      เพื่อเริ่มเล่น เพียงกำหนดค่าเดิมพันโดยใช้ปุ่ม “+” และ “–” บนแท็บ Coin  
      การเดิมพันเริ่มต้นเพียง <strong>฿0.5</strong> และสูงสุดถึง <strong>฿90,000</strong> ต่อรอบ.
    </p>
    <p>
      กดปุ่ม “Spin” เพื่อหมุนวงล้อ หรือใช้โหมด <strong>Autoplay</strong>  
      เพื่อให้หมุนต่อเนื่องโดยไม่ต้องกดเองทุกครั้ง เหมาะสำหรับผู้ที่ชอบเล่นยาว ๆ  
      การชนะเกิดขึ้นเมื่อสัญลักษณ์เหมือนกันปรากฏเรียงจากซ้ายไปขวาบนเส้นจ่ายเงินที่เปิดใช้งาน.
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์โบนัสและสัญลักษณ์พิเศษ</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Hot Hot Feature:</strong>  
        ฟีเจอร์สุ่มที่สามารถคัดลอก (Duplicate) สัญลักษณ์บางประเภทให้ซ้ำได้  
        เช่น Wild, BAR, Plum, Orange, Melon และ 7 (ซึ่งอาจเปลี่ยนเป็น 777 เพื่อเพิ่มรางวัลแบบ 3 เท่า!)
      </li>
      <li>
        <strong>Free Game Bonus:</strong>  
        เมื่อได้สัญลักษณ์ <strong>Wild 3 ตัว</strong> จะได้รับฟรีสปิน 6 ครั้ง  
        ถ้าได้ <strong>Wild 4 ตัว</strong> จะได้รับฟรีสปิน 12 ครั้ง  
        ในโหมดนี้มี <strong>Sticky Symbols</strong> ที่ล็อกสัญลักษณ์ชนะไว้กับที่  
        และยังสามารถเรียกใช้ Hot Hot Feature ซ้ำได้ในรอบโบนัส.
      </li>
      <li>
        <strong>Wild Symbol:</strong>  
        แทนที่สัญลักษณ์อื่น ๆ ทั้งหมด (ยกเว้น Scatter) เพื่อช่วยให้ชนะง่ายขึ้น.
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว Hot Hot Fruit</h2>
    <p>
      <strong>Hot Hot Fruit</strong> คือเกมสล็อตแนวคลาสสิกที่นำความรู้สึกยุคเก่ามาผสมกับความทันสมัย  
      แม้จะไม่มีระบบ Bonus Buy หรือแจ็กพอตแบบโปรเกรสซีฟ  
      แต่ด้วยค่า RTP สูงและฟีเจอร์ Hot Hot ที่สามารถเพิ่มตัวคูณได้หลายระดับ  
      ทำให้เกมนี้ยังคงมีเสน่ห์และลุ้นรางวัลใหญ่ได้ทุกครั้งที่หมุน.
    </p>
    <p>
      หากคุณเป็นแฟนเกมแนวผลไม้สไตล์ดั้งเดิม  
      ขอแนะนำให้ลองเล่น <strong>Fortune Tiger</strong> (PG Soft),  
      <strong>Kenneth Must Die</strong> (Nolimit City),  
      หรือ <strong>Starburst Galaxy</strong> (NetEnt)  
      ซึ่งให้ประสบการณ์ที่สดใหม่และสนุกไม่แพ้กัน 🍒✨
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.84%",
            "volatility": "สูง",
            "maximum_Win": "฿112,500,000.00",
            "provider": "Habanero",
            "provider_img": "https://objects.kaxmedia.com/auto/o/133941/6319bc5d21.png",
            "release_Date": "29/01/2019",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.5",
            "maxBet": "฿90,000.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "GLI", "website": "https://gaminglabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95044/8d4153985f.png" }
            ]
        }
    },
    {
        "path": "greedy-fortune-pig",
        "name": "Greedy Fortune Pig (เจ้าหมูทองคำจอมโลภ)",
        "img": "/media/imgs/summon_fortune_pig.png",
        "review": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">รีวิวเกมสล็อต Greedy Fortune Pig</h2>
    <p>
      เกมสล็อตธีมเอเชียจากค่าย <strong>Pragmatic Play</strong>  
      ที่มาพร้อมกับหมูทองคำสัญลักษณ์แห่งความมั่งคั่งและโชคลาภ  
      <strong>Greedy Fortune Pig</strong> เป็นสล็อตแบบ 5 รีล 3 แถว  
      ที่ให้รางวัลสูงสุดถึง <strong>8,888x</strong> ของเงินเดิมพัน!
    </p>
    <p>
      เกมนี้มีฟีเจอร์ฟรีสปินสุดพิเศษพร้อม <strong>สัญลักษณ์ Wild เคลื่อนที่และขยายเต็มรีล</strong>  
      ซึ่งทำหน้าที่เก็บเหรียญทอง เพิ่มตัวคูณ และจ่ายเงินรางวัลจำนวนมากในรอบโบนัส.  
      ด้วยค่า RTP สูงถึง <strong>96.50%</strong> และความผันผวนระดับปานกลาง  
      เกมนี้จึงเหมาะทั้งมือใหม่และผู้เล่นที่ชอบความสมดุลของความเสี่ยงและรางวัล.
    </p>
  </section>
  `,
        "how_to_play": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">วิธีการเล่น Greedy Fortune Pig</h2>
    <p>
      เกมนี้ใช้รูปแบบรีล <strong>5x3</strong> พร้อมเพย์ไลน์ทั้งหมด <strong>10 เส้น</strong>.  
      ปุ่ม “Spin” อยู่ที่มุมขวาล่าง และสามารถเปิดโหมด <strong>Quick Spin</strong>  
      เพื่อหมุนเร็วขึ้นได้โดยกดค้างที่ปุ่ม “Space”.
    </p>
    <p>
      การเดิมพันเริ่มต้นที่เพียง <strong>฿0.5</strong> ต่อรอบ  
      และสูงสุดได้ถึง <strong>฿12,500</strong> ต่อการหมุน.  
      นอกจากนี้ยังมีปุ่ม <strong>Ante Bet</strong>  
      ที่จะเพิ่มโอกาสได้รับสัญลักษณ์โบนัส โดยเพิ่มค่าเดิมพันขึ้น 50%.
    </p>
  </section>
  `,
        "features": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">ฟีเจอร์พิเศษและโบนัสของเกม</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        <strong>Free Spins:</strong>  
        เมื่อได้สัญลักษณ์โบนัส 3 ตัวบนรีลกลาง จะสุ่มมอบฟรีสปิน 5–8 ครั้ง.  
        ในรอบนี้ สัญลักษณ์ Wild จะขยายเต็มรีลและเริ่มการหมุนซ้ำ (Re-Spin)  
        โดยจะเลื่อนซ้ายทีละช่องจนหายไปจากหน้าจอ.
      </li>
      <li>
        <strong>Money Collect Feature:</strong>  
        ระหว่างที่ Wild ปรากฏบนรีล มันจะเก็บเหรียญทอง (Money Symbol)  
        เพื่อจ่ายรางวัลสุ่มระหว่าง <strong>1x – 100x</strong> ของเงินเดิมพัน.
      </li>
      <li>
        <strong>Multiplier Wild:</strong>  
        Wild พิเศษอีกแบบหนึ่งที่เพิ่มตัวคูณรางวัล (+1x) ทุกครั้งที่ปรากฏ  
        และคงค่าตัวคูณไว้จนจบรอบฟรีสปิน.
      </li>
      <li>
        <strong>Bonus Buy:</strong>  
        ผู้เล่นสามารถซื้อรอบโบนัสได้ทันทีในราคา 100x ของเงินเดิมพันปัจจุบัน.
      </li>
    </ul>
  </section>
  `,
        "recommended": `
  <section class="space-y-4">
    <h2 class="text-2xl font-bold mb-2">สรุปรีวิว & เกมแนะนำ</h2>
    <p>
      แม้ <strong>Greedy Fortune Pig</strong> จะไม่ได้มีฟีเจอร์ใหม่แปลกตา  
      แต่ก็เป็นสล็อตที่สมดุลระหว่างความสนุกและรางวัลอย่างลงตัว.  
      โหมดฟรีสปินพร้อมตัวคูณแบบสะสมทำให้เกมนี้มีโอกาสแตกรางวัลใหญ่ได้จริง  
      เหมาะกับทั้งมือใหม่และสายลุยที่ต้องการความต่อเนื่องในการเล่น.
    </p>
    <p>
      ถ้าคุณชอบแนวเกมโชคลาภแบบเอเชีย แนะนำให้ลอง:  
      <br>🐉 <strong>Wealth Inn</strong> – จากค่าย Habanero  
      <br>🐲 <strong>Floating Dragon Hold & Spin</strong> – จาก Pragmatic Play  
      <br>🐖 <strong>Piggy Blitz Disco Gold</strong> – จาก Play’n GO
    </p>
  </section>
  `,
        "meta": {
            "rtp": "96.50%",
            "volatility": "ปานกลาง",
            "maximum_Win": "฿3,333,000.00",
            "provider": "Pragmatic Play",
            "provider_img": "https://objects.kaxmedia.com/auto/o/89026/5917cabdb1.png",
            "release_Date": "13/02/2025",
            "reels": "5",
            "rows": "3",
            "minBet": "฿0.5",
            "maxBet": "฿12,500.00",
            "licensing": [
                { "name": "eCOGRA", "website": "https://ecogra.org/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95043/5c39cd06ff.png" },
                { "name": "iTechLabs", "website": "https://itechlabs.com/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95045/d13dc57e14.png" },
                { "name": "Quinel", "website": "https://www.quinel.com.mt/", "logo": "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/95046/abca53ff83.png" }
            ]
        }
    }
]

// เพิ่ม rating ให้ทุกเกม
// ฟังก์ชันสุ่มค่า rating
function randomRatingValue() {
  return (Math.random() * (5 - 4.3) + 4.3).toFixed(2); // 4.30–5.00
}

function randomRatingCount() {
  return Math.floor(Math.random() * (1000 - 100 + 1) + 100).toString(); // 100–1000
}

// เพิ่ม rating แบบสุ่ม
const updatedGames = game_list.map((game) => ({
  ...game,
  meta: {
    ...game.meta,
    ratingValue: randomRatingValue(),
    ratingCount: randomRatingCount(),
  },
}));

// บันทึกเป็นไฟล์ใหม่
fs.writeFileSync(
    "./game_list_with_rating.json",
    JSON.stringify(updatedGames, null, 2),
    "utf-8"
);

console.log("✅ เพิ่ม ratingValue และ ratingCount สำเร็จ! บันทึกที่ game_list_with_rating.json");
