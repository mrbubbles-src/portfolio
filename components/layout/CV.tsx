const CV = () => {
  return (
    <div className="rounded shadow overflow-hidden w-full mx-auto">
      <iframe
        src="/cv_manuel_fahrenholz_view.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=100&view=FitH"
        className="w-full h-[90vh] border-none"
        title="Curriculum Vitae"
      />
    </div>
  );
};

export default CV;
