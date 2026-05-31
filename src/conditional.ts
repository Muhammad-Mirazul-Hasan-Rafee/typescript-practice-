// conditional type = A type that depends on condition(s)

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;


type RichPeopleVehicle = {
    jetplane:string;
    yott:string;
    car:string;
    bike:string;
};

type CheckVehicle <T> = T extends keyof RichPeopleVehicle ? "Yes! I have." : "I don't have!";

type HasBike = CheckVehicle<'jetplane'>; 