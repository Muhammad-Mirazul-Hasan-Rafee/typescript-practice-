// enum = is a type =  defines(keep) a set of fixed string literal in one place


//type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}
const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role=== UserRoles.Editor){
        return true;
    }
    else{
        return false;
    }
};
const isEditPermissable1 = canEdit(UserRoles.Admin);
console.log(isEditPermissable1);
const isEditPermissable2 = canEdit(UserRoles.Editor);
console.log(isEditPermissable2);