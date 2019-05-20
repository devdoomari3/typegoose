import * as mongoose from 'mongoose';
import { Ref } from '../../prop';
import { Typegoose } from '../../typegoose';
import { Car } from './car';
import { User } from './user';
export declare class Rating extends Typegoose {
    car: Ref<Car>;
    user: Ref<User>;
    stars: number;
    location: [[number]];
}
export declare const model: mongoose.Model<import("../../../../../../../../Users/saferunner/workspace/web/typegoose/src/typegoose").InstanceType<Rating>> & Rating & typeof Rating;
