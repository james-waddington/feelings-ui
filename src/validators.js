import projectDefinitions from './dummy-data/project-definitions.json'

const projectExists = project => project in projectDefinitions;

export {
    projectExists
};