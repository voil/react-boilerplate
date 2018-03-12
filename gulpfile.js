/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 08:37:34
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 08:46:30
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

//==============================================================================
// Loading dependencies.
//==============================================================================
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const yargs = require('yargs');
const moment = require('moment');
const rename = require('gulp-rename');
const template = require('gulp-template');

// =============================================================================
// Create global variables.
// =============================================================================
let root = './src';

// =============================================================================
// Create tasks.
// =============================================================================
// Create new component.
gulp.task('component',() => {
  let { name, destPath, type } = prepareParams( yargs , 'rcapp/components' );
  const parent = destPath.split('\\')[3];
  return startTask(setPath(`component`), name, destPath);
});

// Create new action.
// =============================================================================
gulp.task('action',() => {
  let { name, destPath } = prepareParams( yargs , 'rcapp/redux/actions', 'actions' );
  return startTask(setPath('action'), name, destPath, 'actions');
});

// Create new route.
// =============================================================================
gulp.task('route',() => {
  let { name, destPath } = prepareParams( yargs , 'rcapp/routes' );
  return startTask(setPath('route'), name, destPath);
});
//==============================================================================

/**
 * Function to set main path.
 * 
 * @param {string} [dest=''] 
 * @returns 
 */
function setPath(dest = ''){
  return {
    js: resolveToPath('**/*!(.spec.js).js'),
    blankTemplates: path.join( './', 'generators', `${dest}/*.**`)
  };
}

/**
 * Function to set capitalize for string.
 * 
 * @param {string} [name=''] 
 * @returns 
 */
function capitalize(name = ''){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * Set path for new element.
 * 
 * @param {string} [pathCreate=''] 
 * @param {string} [glob=''] 
 * @returns 
 */
function resolveToPath(pathCreate = '', glob = ''){
  return path.join(root, pathCreate, glob);
}

/**
 * Start resolve task.
 * 
 * @param {any} [paths={}] 
 * @param {string} [name=''] 
 * @param {string} [destPath=''] 
 * @param {string} [type=''] 
 * @returns 
 */
function startTask(paths = {}, name = '', destPath = '', type = ''){
  return (type == 'actions')? gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: capitalize(name),
      dateNow : moment().format('YYYY-MM-DD, HH:mm:ss')
    }))
    .pipe(rename((path) => {
        path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath)) :
    gulp.src(paths.blankTemplates)
        .pipe(template({
          name: name,
          upCaseName: capitalize(name),
          dateNow : moment().format('YYYY-MM-DD, HH:mm:ss')
        }))
        .pipe(gulp.dest(destPath)) ;
}

/**
 * Prepare params for task.
 * 
 * @param {any} [yargs={}] 
 * @param {string} [dest=''] 
 * @param {string} [typeAction=''] 
 * @returns 
 */
function prepareParams(yargs = {}, dest = '', typeAction = ''){
  const type = yargs.argv.type || 'dumb';
  const name = yargs.argv.name;
  const destPathMain = yargs.argv.dest || '';
  const parentPath = yargs.argv.parent || '';
  dest = path.join(dest, destPathMain);

  const destPath = typeAction === 'actions'? 
      path.join(resolveToPath(dest), parentPath) : 
      path.join(resolveToPath(dest), parentPath, name);
  return { name, destPath, type };
}