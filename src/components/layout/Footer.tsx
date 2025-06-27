export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Siddas Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
