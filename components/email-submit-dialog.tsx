"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Mail, Chrome } from "lucide-react"

interface EmailSubmitDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mailtoLink: string
  gmailLink: string
  title: string
  description: string
}

export default function EmailSubmitDialog({
  open,
  onOpenChange,
  mailtoLink,
  gmailLink,
  title,
  description,
}: EmailSubmitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-3 w-full p-4 rounded-lg border border-light-gray hover:border-gold-orange hover:bg-secondary transition-all duration-300 cursor-pointer group"
          >
            <Chrome className="w-5 h-5 text-gold-orange group-hover:scale-110 transition-transform" />
            <div className="text-left flex-1">
              <p className="font-semibold text-foreground">Gmail (Web)</p>
              <p className="text-xs text-muted-foreground">Open in browser</p>
            </div>
          </a>

          <a
            href={mailtoLink}
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-3 w-full p-4 rounded-lg border border-light-gray hover:border-gold-orange hover:bg-secondary transition-all duration-300 cursor-pointer group"
          >
            <Mail className="w-5 h-5 text-gold-orange group-hover:scale-110 transition-transform" />
            <div className="text-left flex-1">
              <p className="font-semibold text-foreground">Email Client</p>
              <p className="text-xs text-muted-foreground">Default email app</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
