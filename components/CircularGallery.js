 "use client";

export default function MediaGallery() {
  const mediaStyle = {
    height: "600px",
    objectFit: "cover",
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Video 1 */}
        <div className="col-md-6">
          <video
            className="w-100 rounded shadow"
            controls
            muted
            playsInline
            autoPlay
            loop
            style={mediaStyle}
          >
            <source src="/assets/video/work.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Photo 1 */}
        <div className="col-md-6">
          <img
            src="/assets/video/work.JPG"
            alt="Sample 1"
            className="w-100 rounded shadow"
            style={mediaStyle}
          />
        </div>

        {/* Video 2 */}
        <div className="col-md-6">
          <video
            className="w-100 rounded shadow"
            controls
            muted
            playsInline
            autoPlay
            loop
            style={mediaStyle}
          >
            <source src="/assets/video/studio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Photo 2 */}
        <div className="col-md-6">
          <img
            src="/assets/video/v1.JPG"
            alt="Sample 2"
            className="w-100 rounded shadow"
            style={mediaStyle}
          />
        </div>
      </div>
    </div>
  );
}
