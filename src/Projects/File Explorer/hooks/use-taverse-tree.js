const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id == folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: item,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  const deleteNode = function () {};
  const updateNode = function () {};
  return { insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
