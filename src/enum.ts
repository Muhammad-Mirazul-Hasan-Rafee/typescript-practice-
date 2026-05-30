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

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);