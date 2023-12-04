// Pildi URL-id
const imageUrls = [
    'https://images.hellomagazine.com/horizon/landscape/8ed6b8ac85da-amazon-prime-day-2023.jpg',
    'https://img2.wallspic.com/crops/7/5/6/1/11657/11657-paper-danbo-robot-amazon-macro_photography-1920x1080.jpg',
    'https://qtxasset.com/quartz/qcloud4/media/image/package-at-doorstep.jpg?VersionId=I_m1Pzg5bzdOMLX40Fmo8LTkNlbm8lj6',
    'https://cdn.geekwire.com/wp-content/uploads/2016/11/20161128_Amazon_Fulfillment_center_144.jpg',
    'https://legacyscs.com/wp-content/uploads/2020/08/LEGACY-Supply-Chain-Services-Last-Miley-Delivery.jpg',
    'https://image.cnbcfm.com/api/v1/image/105821343-1553842141852gettyimages-1131898584.jpeg?v=1681914887&w=1920&h=1080',
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imageUrls.length;
    
}

// Vahetab pilti iga x ms tagand
setInterval(changeBackground, 5000);

changeBackground();