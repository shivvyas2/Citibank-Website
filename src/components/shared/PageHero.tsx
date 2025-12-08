import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-end pb-20 lg:pb-32 bg-gradient-to-br from-primary/10 to-primary/5 pt-32">
      <div className="container mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-tight tracking-tight text-foreground">
            {title}
          </h1>
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
    </section>
  );
}

