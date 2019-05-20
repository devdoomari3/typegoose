/// <reference path="../../../node_modules/@types/mongoose/index.d.ts" />
/// <reference types="mongoose" />
import { Car } from './car';
import { Gender } from '../enums/genders';
import { Job } from './job';
import { Role } from '../enums/role';
import { InstanceType, ModelType, Ref, Typegoose } from '../../typegoose';
export interface FindOrCreateResult<T> {
    created: boolean;
    doc: InstanceType<T>;
}
export declare class User extends Typegoose {
    firstName: string;
    lastName: string;
    fullName: string;
    nick?: string;
    uniqueId?: string;
    username?: string;
    expireAt?: Date;
    age?: number;
    gender: Gender;
    role: Role;
    roles: Role[];
    extraRoles?: Role[];
    job?: Job;
    car?: Ref<Car>;
    languages: string[];
    previousJobs?: Job[];
    futureJobs?: Job[];
    previousCars?: Ref<Car>[];
    static findByAge(this: ModelType<User> & typeof User, age: number): import("mongoose").DocumentQuery<InstanceType<User>, InstanceType<User>>;
    incrementAge(this: InstanceType<User>): Promise<InstanceType<User>>;
    addLanguage(this: InstanceType<User>): Promise<InstanceType<User>>;
    addJob(this: InstanceType<User>, job?: Partial<Job>): Promise<InstanceType<User>>;
    static findOrCreate: (condition: any) => Promise<FindOrCreateResult<User>>;
}
export declare const model: import("mongoose").Model<InstanceType<User>> & User & typeof User;
