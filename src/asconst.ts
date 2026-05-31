// as const assertion = 

// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// };


const UserRoles =  {
    Admin : 'ADMIN',
    Editor : 'EDITOR',
    Viewer : 'VIEWER',
} as const;



const canEdit = (role: typeof UserRoles [keyof typeof  UserRoles]) => {
    if(role === UserRoles.Admin || role=== UserRoles.Editor){
        return "You are authorized to access the file!";
    }
    else{
        return "Permission denied! Go back!";
    }
};
const isEditPermissable1 = canEdit(UserRoles.Admin);
console.log(isEditPermissable1);

const isEditPermissable2 = canEdit(UserRoles.Editor);
console.log(isEditPermissable2);

const isEditPermissable3 = canEdit(UserRoles.Viewer);
console.log(isEditPermissable3);