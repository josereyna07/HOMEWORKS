import { useState } from 'react';
import Tree from 'react-d3-tree';
import styles from '../styles/components/TreeVisualizer.module.scss';


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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Binary Tree Visualizer</h1>
        <p className={styles.subtitle}>
          Insert numbers to create a binary search tree and visualize its structure.
          Search for values and explore different tree traversal methods.
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <h2 className={styles.groupTitle}>Insert Node</h2>
          <div className={styles.inputGroup}>
            <input
              type="number"
              className={styles.input}
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Enter number to insert"
            />
            <button className={styles.button} onClick={handleInsert}>
              Insert
            </button>
          </div>
          {insertError && <p className={styles.errorMessage}>{insertError}</p>}
        </div>

        <div className={styles.controlGroup}>
          <h2 className={styles.groupTitle}>Search Node</h2>
          <div className={styles.inputGroup}>
            <input
              type="number"
              className={styles.input}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter number to search"
            />
            <button className={styles.searchButton} onClick={handleSearch}>
              Search
            </button>
          </div>
          {searchResult && (
            <p className={`${styles.searchResult} ${searchResult.includes('found') ? styles.found : styles.notFound}`}>
              {searchResult}
            </p>
          )}
        </div>
      </div>

      <section className={styles.traversals}>
        <h2 className={styles.traversalsTitle}>Tree Traversals</h2>
        <div className={styles.traversalsList}>
          <div className={styles.traversalItem}>
            <h3 className={styles.traversalLabel}>Inorder</h3>
            <p className={styles.traversalValues}>{tree.inorder().join(' → ')}</p>
          </div>
          <div className={styles.traversalItem}>
            <h3 className={styles.traversalLabel}>Preorder</h3>
            <p className={styles.traversalValues}>{tree.preorder().join(' → ')}</p>
          </div>
          <div className={styles.traversalItem}>
            <h3 className={styles.traversalLabel}>Postorder</h3>
            <p className={styles.traversalValues}>{tree.postorder().join(' → ')}</p>
          </div>
        </div>
      </section>

      <section className={styles.treeContainer}>
        <h2 className={styles.treeTitle}>Tree Visualization</h2>
        <div className={styles.treeWrapper}>
          {treeData && (
            <Tree
              data={treeData}
              orientation="vertical"
              pathFunc="step"
              translate={{ x: 450, y: 50 }}
              separation={{ siblings: 2, nonSiblings: 2 }}
              nodeSize={{ x: 120, y: 100 }}
              zoomable={true}
              collapsible={false}
              transitionDuration={500}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default TreeVisualizer;
