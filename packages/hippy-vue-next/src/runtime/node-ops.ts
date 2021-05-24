/* eslint-disable import/prefer-default-export */

import document from '../renderer/document-node';

const namespaceMap = {};

function createElement(name) {
  return document.createElement(name);
}

function createElementNS(namespace, name) {
  return document.createElementNS(namespace, name);
}

function createText(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insert(pNode, newNode, referenceNode) {
  if (pNode.childNodes.indexOf(newNode) >= 0) {
    // move it if the node has existed
    pNode.moveChild(newNode, referenceNode);
  } else {
    pNode.insertBefore(newNode, referenceNode);
  }
}

function remove(node) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(elementNode) {
  return elementNode.tagName;
}

function setElementText(el, text) {
  el.setText()
}

function setText(node, text) {
  node.setText(text);
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

function setStyleScope(node, styleScopeId) {
  // Just ignore it so far.
  node.setStyleScope(styleScopeId);
}

export {
  namespaceMap,
  createElement,
  createElementNS,
  createText,
  createComment,
  insert,
  remove,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setElementText,
  setText,
  setAttribute,
  setStyleScope,
};
