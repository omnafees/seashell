"use strict";
/**
 * Seashell.
 * Copyright (C) 2013-2014 The Seashell Maintainers.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * See also 'ADDITIONAL TERMS' at the end of the included LICENSE file.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * handleSaveProject( )
 * This functions handles the save project menu item.
 */
function handleSaveProject() {
  projectSave( );
}

/**
 * handleCompileProject( )
 * This function handles the compile project menu item.
 */
function handleCompileProject() {
  projectCompile();
}

/**
 * handleUndo( )
 * This function handles the undo menu item.
 */
function handleUndo( ) {
  editorUndo();
}

/**
 * handleRedo( )
 * This function handles the redo menu item.
 */
function handleRedo() {
  editorRedo();
}

/**
 * handleCommentLines( )
 * This function handles the comment lines menu item.
 */
function handleCommentLines() {
  // TODO: Implement comments.
}

/**
 * handleCommentSelection( )
 * This function handles the comment selection menu item.
 */
function handleCommentSelection() {
  // TODO: Implement comments.
}

/**
 * handleAutoformat( )
 * This function handles the autoformat menu item.
 */
function handleAutoformat() {
  // TODO: Implement autoformat.
}

/**
 * handleRunProject()
 * This function handles running projects.
 */
function handleRunProject() {
  // TODO: Multiple running projects?
  projectRun();
}

/**
 * Sets up the menu; attaches actions to each menu item that does not already have
 * an action attached to it. */
function setupMenu() {
  $("#menu-save-project").on("click", handleSaveProject);
  $("#toolbar-save-project").on("click", handleSaveProject);

  $("#menu-compile").on("click", handleCompileProject);
  $("#toolbar-compile").on("click", handleCompileProject);

  $("#menu-run").on("click", handleRunProject);
  $("#toolbar-run").on("click", handleRunProject);

  $("#menu-undo").on("click", handleUndo);
  $("#toolbar-undo").on("click", handleUndo);
  $("#menu-redo").on("click", handleRedo);
  $("#toolbar-redo").on("click", handleRedo);

  $("#menu-commentLine").on("click", handleCommentLines);
  $("#menu-commentSelection").on("click", handleCommentSelection);
  $("#menu-autoformat").on("click", handleAutoformat);
}