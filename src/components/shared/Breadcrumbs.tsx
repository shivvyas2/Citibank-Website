import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-3 text-sm font-body font-medium text-foreground/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : ""}>
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ArrowRight
                  size={16}
                  className="text-primary"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

