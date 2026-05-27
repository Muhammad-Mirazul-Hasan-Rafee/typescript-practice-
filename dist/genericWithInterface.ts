interface Developer<T,X=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?:X;
};

interface WatchWithoutBrand  {
    heartRate: string;
    stopwatch: boolean;
};

interface WatchWithBrand {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AIFeature: boolean;
};
const poorDeveloper: Developer<WatchWithoutBrand , {brand: 'Suzuki' , engineCapacity:'600cc'}> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: 'Y21',
        releasedYear: '2022',
    },
    smartWatch: {
        heartRate: '140',
        stopwatch: true,
    }

};

const richDeveloper: Developer<WatchWithBrand> = {
    name: 'Mr. Rich',
    salary: 50,
    device: {
        brand: 'Sony',
        model: 'X2026 ',
        releasedYear: '2026',
    },
    smartWatch: {
        heartRate: '140',
        callSupport: true,
        calculator: true,
        AIFeature: true,
    }

};