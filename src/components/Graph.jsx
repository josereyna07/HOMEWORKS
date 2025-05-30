import { Graph as D3Graph } from 'react-d3-graph';

const Graph = ({ nodes, links, config, onNodeClick }) => {
  const handleNodeClick = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId);
    if (node && node.type === 'city') {
      onNodeClick(nodeId);
    }
  };

  return (
    <div className="graph-container">
      <h3>Friends and Cities Graph</h3>
      <p>Click on a city (square) to see its residents</p>
      <D3Graph
        id="graph-id"
        data={{ nodes, links }}
        config={config}
        onClickNode={handleNodeClick}
      />
    </div>
  );
};

export default Graph;
