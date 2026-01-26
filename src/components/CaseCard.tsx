import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface CaseCardProps {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  metrics?: string;
  imageUrl?: string;
}

export function CaseCard({ id, title, client, description, tags, metrics, imageUrl }: CaseCardProps) {
  return (
    <Link 
      to={`/cases/${id}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift animate-fade-in-up"
    >
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{title.charAt(0)}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-primary font-medium mb-2">{client}</p>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">{metrics}</span>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
