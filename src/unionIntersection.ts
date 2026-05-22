// union
type UserRole = 'admin' | 'user';


const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    }
    else if (role === 'user') {
        return 'User Dashboard';
    }
    else {
        return 'Guest Dashboard';
    }
}


// Intersection &
type Employee = {
    id: string,
    name: string,
    phoneNo : string,
};

 type Manager = {
    designation: string,
    teamSize: number,
 };

 type EmployeeManager = Employee & Manager;

 const Rafee : EmployeeManager = {
    id: '80000',
    name: 'Hasan Rafee',
    phoneNo: '01444444',
    designation: 'Manager',
    teamSize: 120,

 }
