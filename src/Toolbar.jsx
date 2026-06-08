import AlertButton from './AlertButton';

function Toolbar() {
  return (
    <div className="toolbar">
      <AlertButton message="Now playing your favorite track!">
        Play
      </AlertButton>
      <AlertButton message="Uploading your file...">
        Upload
      </AlertButton>
      <AlertButton message="Downloading content...">
        Download
      </AlertButton>
    </div>
  );
}

export default Toolbar;
