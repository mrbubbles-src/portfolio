export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center animate-pulse">
      <div className="text-2xl font-mono text-muted-foreground mb-2">
        &gt; compiling UI...
      </div>
      <div className="h-1 w-48 bg-muted rounded overflow-hidden relative">
        <div className="absolute inset-0 bg-primary animate-ping" />
      </div>
    </div>
  );
}
