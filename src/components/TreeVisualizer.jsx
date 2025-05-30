import { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Check if value already exists before inserting
    if (this.search(value)) {
      return false; // Value already exists
    }
    
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    return this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
        return true;
      } else {
        return this._insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
        return true;
      } else {
        return this._insertNode(node.right, newNode);
      }
    }
    return false; // Value is equal to current node
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      return this._searchNode(node.left, value);
    }
    return this._searchNode(node.right, value);
  }

  inorder() {
    const result = [];
    this._inorderTraversal(this.root, result);
    return result;
  }

  _inorderTraversal(node, result) {
    if (node !== null) {
      this._inorderTraversal(node.left, result);
      result.push(node.value);
      this._inorderTraversal(node.right, result);
    }
  }

  preorder() {
    const result = [];
    this._preorderTraversal(this.root, result);
    return result;
  }

  _preorderTraversal(node, result) {
    if (node !== null) {
      result.push(node.value);
      this._preorderTraversal(node.left, result);
      this._preorderTraversal(node.right, result);
    }
  }

  postorder() {
    const result = [];
    this._postorderTraversal(this.root, result);
    return result;
  }

  _postorderTraversal(node, result) {
    if (node !== null) {
      this._postorderTraversal(node.left, result);
      this._postorderTraversal(node.right, result);
      result.push(node.value);
    }
  }


  toD3Tree() {
    return this._convertToD3Format(this.root);
  }

  _convertToD3Format(node) {
    if (!node) return null;
    return {
      name: node.value.toString(),
      children: [
        node.left && this._convertToD3Format(node.left),
        node.right && this._convertToD3Format(node.right),
      ].filter(Boolean),
    };
  }
}

function TreeVisualizer() {
  const [tree] = useState(new BinaryTree());
  const [treeData, setTreeData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [newValue, setNewValue] = useState('');

  const [insertError, setInsertError] = useState('');

  const handleInsert = () => {
    if (newValue.trim() === '') return;
    const value = parseInt(newValue);
    if (isNaN(value)) return;

    const inserted = tree.insert(value);
    if (!inserted) {
      setInsertError('Value already exists in the tree!');
      setTimeout(() => setInsertError(''), 3000); // Clear error after 3 seconds
    } else {
      setInsertError('');
      setTreeData(tree.toD3Tree());
      setNewValue('');

      console.log('Inorder traversal:', tree.inorder());
      console.log('Preorder traversal:', tree.preorder());
      console.log('Postorder traversal:', tree.postorder());
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() === '') return;
    const value = parseInt(searchValue);
    if (isNaN(value)) return;

    const found = tree.search(value);
    setSearchResult(found ? 'Value found in tree!' : 'Value not found in tree.');
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Enter number to insert"
        />
        <button onClick={handleInsert}>Insert</button>
        {insertError && <p style={{ color: 'red', marginTop: '5px' }}>{insertError}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter number to search"
        />
        <button onClick={handleSearch}>Search</button>
        {searchResult && <p>{searchResult}</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Tree Traversals:</h3>
        <p><strong>Inorder:</strong> {tree.inorder().join(' → ')}</p>
        <p><strong>Preorder:</strong> {tree.preorder().join(' → ')}</p>
        <p><strong>Postorder:</strong> {tree.postorder().join(' → ')}</p>
      </div>

      <div style={{ height: '500px', border: '1px solid #ccc' }}>
        {treeData && (
          <Tree
            data={treeData}
            orientation="vertical"
            pathFunc="step"
            translate={{ x: 450, y: 50 }}
            separation={{ siblings: 2, nonSiblings: 2 }}
          />
        )}
      </div>
    </div>
  );
}

export default TreeVisualizer;
