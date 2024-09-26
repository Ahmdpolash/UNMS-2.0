import { model, Schema } from "mongoose";
import { TCourse, TPreRequisiteCourses } from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourses>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const CourseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  prefix: {
    type: String,
    required: true,
    trim: true,
  },

  code: {
    type: Number,
    required: true,
  },

  credits: {
    type: Number,
    required: true,
  },

  preRequisiteCourses: [preRequisiteCoursesSchema],
});

export const Course = model<TCourse>("Course", CourseSchema);
