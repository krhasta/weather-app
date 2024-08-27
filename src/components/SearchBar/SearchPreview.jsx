import './SearchBar.css';

export default function SearchPreview({ preview }) {
  return (
    <>
      {/* <div className="pad-dummy"></div> */}
      <div className="preview-container flex">
        {preview.map((item) => {
          return (
            <>
              <div className="preview-list">{item}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
