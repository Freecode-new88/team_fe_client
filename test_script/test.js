const fs = require('fs');
const path = require('path');
const axios = require('axios');

const data = [
    {
        "name": "Mahjong Ways",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/43904a57ccd348f6ad22e1954b449411.png"
    },
    {
        "name": "Treasures of Aztec",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/08a4fcfb3e9d4d55a089569ace391e06.png"
    },
    {
        "name": "Mahjong Ways 2",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/7f7d9caf30184eea83276c8e3d466aab.png"
    },
    {
        "name": "Wild Bounty Showdown",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/f721927f704441bb8fa63a195999f1ff.png"
    },
    {
        "name": "Lucky Neko",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/4dba20a06d3c40adb04a2a15146f2225.png"
    },
    {
        "name": "Wild Bandito",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/cf4b78a1b99b46a285edc96b92962786.png"
    },
    {
        "name": "Ways of the Qilin",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/09ec2bc444994546a89179944d2959c1.png"
    },
    {
        "name": "Fortune Rabbit",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/7642775bdd39438ba5ef37f3f58d2f98.png"
    },
    {
        "name": "Cocktail Nights",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/90944fd648f94c0f9d78d36c572997ff.png"
    },
    {
        "name": "Caishen Wins",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/b0b0645d31a541b48e648043f715d714.png"
    },
    {
        "name": "Ganesha Fortune",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/6e7a9c6a3ba54376af4135c84b7b554e.png"
    },
    {
        "name": "Wild Fireworks",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/d4c0c8d58acc4d1b9fb52365f1b53b58.png"
    },
    {
        "name": "Dreams of Macau",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/1d911aa060364ea3af7203e4ce0b257d.png"
    },
    {
        "name": "Fortune Dragon",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/062a29d0fb3b4c7da4eae9314a660646.png"
    },
    {
        "name": "Queen of Bounty",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/0b0f6e9cc9fc4a40a533a68e8111fd58.png"
    },
    {
        "name": "Speed Winner",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/766d69c66bf8410ab644d33139b83b49.png"
    },
    {
        "name": "Fortune Mouse",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/56ab3cefc0604881b50960c6c17b6f2a.png"
    },
    {
        "name": "Captain's Bounty",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/0d70f6ef923e4df4b2a365015c6566e1.png"
    },
    {
        "name": "Wild Ape #3258",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/88a628a35d1a4e2f8ea75580e50b89e5.jpg"
    },
    {
        "name": "Legend of Perseus",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/63c0c6d00e0b47a88faae8288e21b431.png"
    },
    {
        "name": "Anubis Wrath",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/5cfdeeb83121486e89ad6f4f0a8dc0cf.png"
    },
    {
        "name": "Zombie Outbreak",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/b3a0c18df06b435bbc3f4462d98a5bfd.png"
    },
    {
        "name": "Asgardian Rising",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/6848c7ea6bd1426992011221cd8b6c4b.png"
    },
    {
        "name": "Pinata Wins",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/c46c4fb5191947c8abe17e9e6eb46176.png"
    },
    {
        "name": "The Great Icescape",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/00b55f6fd3bd4d479bedaf6f1b346ee7.png"
    },
    {
        "name": "ต้นไม้แห่งโชคลาภอันมั่งคั่ง",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/8b00a89a673f499483ae069160dcc0d7.png"
    },
    {
        "name": "Double Fortune",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/790d849581a84cbab141d14c9257ba42.png"
    },
    {
        "name": "Leprechaun Riches",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/da771fc6c1db43a8b3706f11b5aa37d9.png"
    },
    {
        "name": "Geisha's Revenge",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/9ac3236d550c400c8dd7be3da44f3990.png"
    },
    {
        "name": "Jurassic Kingdom",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/PG2/757e7f7d9a0549a780b93e0d9e93bad2.png"
    },
    {
        "name": "Aztec Gold Treasure",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/3dcdd54eddbd418fae11a60fc8c18b3d.png"
    },
    {
        "name": "Roma II",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/ec5d48c1e6d04ed5bc8d24a30a2f1300.png"
    },
    {
        "name": "Roma",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/f8e777e6a80348ba9151757d728b2293.png"
    },
    {
        "name": "Long Long Long",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/4acd77a66aa54ccd8a3818e3c1fa9ab1.png"
    },
    {
        "name": "Lightning Dragon",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/6c3d7c0741f1423597a7509399382a55.png"
    },
    {
        "name": "Golden West",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/5e7f8d2ec2fe4054bd9f152d95425e21.png"
    },
    {
        "name": "Fortune Toad",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/ffdef64cc6dd4f69a523b66df23baefc.png"
    },
    {
        "name": "Classic Fruits 7",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/31f73c23501641e095d2ce8d9ea23b32.png"
    },
    {
        "name": "Big Cai Shen",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/a9d60402023b40cf9ca5ed646642dce8.png"
    },
    {
        "name": "Buffalo King",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/NS/2ca09da2840a41ee87b4453d57c654f3.png"
    },
    {
        "name": "MahjongWays 2",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/905593a434374acc89088d57fc005783.png"
    },
    {
        "name": "Super King",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/5232847ab6834fb48bf69e8f9ac7ab7d.png"
    },
    {
        "name": "Wild Bounty Showdown",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/6e76a4d893564a9da3f0a524178479c5.png"
    },
    {
        "name": "MahjongWays",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/f80397fb7d334ae4b4ce30681b4da121.png"
    },
    {
        "name": "Golden City4",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/4f94d6e1af994941957d30d7021565c3.png"
    },
    {
        "name": "Maya Golden City 2",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/4b241b5762ad4dfab4414d766aa2d627.png"
    },
    {
        "name": "Maya Golden City3",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/6a8a3a4d25d84793b8d237a99b6b05b9.png"
    },
    {
        "name": "Treasures of Aztec",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/130a5b85d9d04856808b7d3fb871fdc4.png"
    },
    {
        "name": "Aztec Treasures",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/67f5e9270d3443eaada8bd8c52f5387c.png"
    },
    {
        "name": "GemParty",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/TP/48b48492418448e1bed7464f26995059.png"
    },
    {
        "name": "Gates of wealth",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/c7abc717d2f642049ffe450cf2353ae4.png"
    },
    {
        "name": "Masquerade",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/3a1565ae566e4c83ab29bf259d46753f.png"
    },
    {
        "name": "Lucky Streak",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/f47f0b24e65a444db4d7fd84279c651c.png"
    },
    {
        "name": "Witch's Brew",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/19423ca514cd462d8246e73fe2d7e78b.png"
    },
    {
        "name": "Sizzling Hot",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/ca9efde93e7a4e23b0de9076b6a75d1f.png"
    },
    {
        "name": "Roma",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/f436ad7243f24349ad329cd23c848040.png"
    },
    {
        "name": "Neptune Treasure",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/b033920ed19e4a47bb3cee1890db2359.png"
    },
    {
        "name": "Lady Hawk",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/e6d97eb920e84124ac3a4f3a5283951c.png"
    },
    {
        "name": "Just Jewels Deluxe",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/c46078d456ab4d48ab719dc59bf34a57.png"
    },
    {
        "name": "Hot Fruits",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Joker/5015b6adeacd4209ad338ed42fc3ce1c.png"
    },
    {
        "name": "เมญ่าซิตี้ทองคำ 4",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/25448de608c74307bb34ea50f39865a3.png"
    },
    {
        "name": "YGR เมญ่าซิตี้ทองคำ 3",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/d904a9b9be7649ddae3adec14efb612f.png"
    },
    {
        "name": "เมญ่าซิตี้ทองคำ 5",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/6e6e68ad72b946ac9142912b2727e90e.png"
    },
    {
        "name": "YGR เมญ่าซิตี้ทองคำ 2",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/c77edff0af5b4cbdad5e322d54a26601.png"
    },
    {
        "name": "Maya Golden City8",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/3e2f1a3a37a74d158f0bc478975b526f.png"
    },
    {
        "name": "Summon Fortune Pig",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/865cadf8d037408a954f78c110c7f021.png"
    },
    {
        "name": "Cash Maker 2",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/98fd026846d4470ebc1a12c8bb5ff83e.png"
    },
    {
        "name": "แมวนำโชคสีทอง",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/a57636ce1ec14a7695717be2662e24e3.png"
    },
    {
        "name": "เทพเจ้าแห่งโชคลาภ",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/10a468843d454e1ea2a989101ee84302.png"
    },
    {
        "name": "Maya Golden City7",
        "img": "https://a865c0.swuacktu.net/system-requirement/Multimedia/Ygr/609208c08cb44883bb2f90ddb3fc129f.png"
    }
]

const folder = './media/imgs';

async function downloadImage(url, filename) {
    const filePath = path.join(folder, filename);
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(filePath, response.data);
    return filePath;
}

(async () => {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    for (const item of data) {
        const ext = path.extname(item.img) || '.png';
        const safeName = item.name.replace(/\s+/g, '_').toLowerCase();
        const fileName = `${safeName}${ext}`;
        const localPath = await downloadImage(item.img, fileName);
        item.img = `/media/imgs/${fileName}`;
        console.log(`Saved ${item.name} → ${localPath}`);
    }

    fs.writeFileSync('./updated_data.json', JSON.stringify(data, null, 2));
    console.log('✅ Done! Updated data saved to updated_data.json');
})();
