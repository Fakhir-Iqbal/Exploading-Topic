const generateDataPoints = (length) => {
    const dataPoints = [];
    let currentDate = new Date(2020, 0, 1);

    for (let i = 0; i < length; i++) {
        currentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));

        const yValue = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

        dataPoints.push({
            x: new Date(currentDate),
            y: yValue
        });
    }
    return dataPoints;
}

export const chartDetails = [
    {
        id: 1,
        heading: 'Sitegpt',
        volume: '100k',
        growth: '+600X+',
        desc: 'Sitegpt is an innovative new product that has taken the market by storm, offering unparalleled features and performance that are the industry. With rapid growth and strong adoption, it is poised to become one of the best tools available today.',
        btn: 'Exploding',
        btnLink: '#',
        pro: true,
        dataPoints: generateDataPoints(50)
    },
    {
        id: 2,
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: true,
        dataPoints: generateDataPoints(15)
    },
    {
        id: 3,
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: generateDataPoints(25)
    },
    {
        id: 4,
        heading: 'MarketX',
        volume: '500k',
        growth: '+1200%',
        desc: 'MarketX is a groundbreaking platform that is transforming how businesses and investors analyze market trends and data. Offering powerful analytics tools, real-time insights, and intuitive dashboards, MarketX is setting a new standard in market intelligence.',
        btn: 'Learn More',
        btnLink: '#marketx',
        pro: true,
        dataPoints: generateDataPoints(20)
    },
    {
        id: 5,
        heading: 'GrowthX',
        volume: '600k',
        growth: '+800X+',
        desc: 'GrowthX has shown exponential growth in a short period, becoming a market leader in the digital transformation space. With a broad range of services and a strong customer base, it continues to set new benchmarks.',
        btn: 'Explore More',
        btnLink: '#growthx',
        pro: false,
        dataPoints: generateDataPoints(10)
    },
    {
        id: 6,
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: generateDataPoints(40)
    },
    {
        id: 7,
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: true,
        dataPoints: generateDataPoints(45)
    },
    {
        id: 8,
        heading: 'InnovationHub',
        volume: '1M',
        growth: '+1000X+',
        desc: 'InnovationHub is at the forefront of AI and machine learning applications, enabling businesses to harness the power of data and make intelligent decisions. It is revolutionizing industries and paving the way for a new digital era.',
        btn: 'Discover Hub',
        btnLink: '#innovationhub',
        pro: true,
        dataPoints: generateDataPoints(32)
    },
    {
        id: 9,
        heading: 'FutureTech',
        volume: '800k',
        growth: '+1200X+',
        desc: 'FutureTech is a leading player in the field of augmented reality (AR) and virtual reality (VR), creating immersive experiences and enhancing user interaction across industries.',
        btn: 'Future Insights',
        btnLink: '#futuretech',
        pro: false,
        dataPoints: generateDataPoints(38)
    },
    {
        id: 10,
        heading: 'FinTechX',
        volume: '1.2M',
        growth: '+1500X+',
        desc: 'FinTechX is disrupting the financial sector with its blockchain-based solutions. By creating decentralized financial networks, it is reducing transaction costs and increasing transparency.',
        btn: 'Invest Now',
        btnLink: '#fintechx',
        pro: true,
        dataPoints: generateDataPoints(42)
    },
    {
        id: 11,
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: generateDataPoints(24)
    },
    {
        id: 12,
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: false,
        dataPoints: generateDataPoints(62)
    },
];