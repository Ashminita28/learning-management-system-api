import * as moduleModel from '../models/module.model'
 

export const createModuleService = async (data: {
  title: string,
  description: string,
}) => {
  const { title,description } = data;
 
  const moduleId = await moduleModel.createModule(title,description);
 
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
  data: { title: string,
  description: string }
) => {
  await moduleModel.updateModule(id, data.title, data.description);
};
 

export const deleteModuleService = async (id: number) => {
  await moduleModel.deleteModule(id);
};