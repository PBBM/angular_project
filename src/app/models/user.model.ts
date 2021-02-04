export class User {
    constructor(
        public id: string,
        public connexionId: string,
        public password: string,
        public lastName: string,
        public firstName: string,
        public email: string,
        public preferences: string[]
    ) {}
}