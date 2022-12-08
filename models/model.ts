import { Model, model, Schema } from "mongoose";
import { JobAttributes } from "../types/jobInterface";

const JobSchema: Schema<JobAttributes> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const JobModel: Model<JobAttributes> = model("job", JobSchema);
