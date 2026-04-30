
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function LanguageSelector() {
  const { language, setLanguage, languages } = useLanguage();
  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3 flex items-center gap-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-colors">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium hidden sm:inline-block">{currentLang.name}</span>
          <span className="text-base">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] rounded-xl border-border/50 shadow-lg bg-card/95 backdrop-blur-md">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 cursor-pointer rounded-lg my-0.5 ${
              language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground/80 hover:text-foreground'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
