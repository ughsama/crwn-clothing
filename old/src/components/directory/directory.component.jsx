import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <DirectoryItem key={item.id} category={item} />
      ))}
    </div>
  );
}

export default Directory;
