const handleDownload = () => {
  const fileUrl = "/MuhammadSami.pdf";
  const fileName = "MuhammadSami.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleDownload;
