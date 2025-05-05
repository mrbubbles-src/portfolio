const CV = () => {
  return (
    <>
      <div className="border rounded shadow overflow-hidden">
        <embed
          src="/cv_manuel_fahrenholz.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full aspect-[8.5/11] min-h-[80vh]"
          type="application/pdf"
        />
      </div>
    </>
  );
};

export default CV;
