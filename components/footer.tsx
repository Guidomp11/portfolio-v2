interface FooterProps {
  translations: any
}

export function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Portfolio. {translations.footer.rights}
          </p>
          <p>{translations.footer.built}</p>
        </div>
      </div>
    </footer>
  )
}
