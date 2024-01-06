interface User {
    id: number;
    username: string;
    admin: boolean;
    email: string;
    victories: number;
    defeats: number;
    profile_picture: string | null;
}

export default User;