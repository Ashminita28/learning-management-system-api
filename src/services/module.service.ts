import * as moduleModel from '../models/module.model'
 

export const createModuleService = async (data: {
  courseId:number,
  title: string,
}) => {
  const { courseId,title } = data;
 
  const moduleId = await moduleModel.createModule(courseId,title);
 
  return moduleId;
};
 

export const getAllModulesService = async () => {
  const modules = await moduleModel.getAllModules();
  return modules;
};
 

export const getModuleByIdService = async (id: number) => {
  const module = await moduleModel.getModuleById(id);
  return module;
};
 

export const updateModuleService = async (
  id: number,
  data: { courseId:number,
  title: string }
) => {
  await moduleModel.updateModule(id, data.courseId, data.title);
};
 

export const deleteModuleService = async (id: number) => {
  await moduleModel.deleteModule(id);
};