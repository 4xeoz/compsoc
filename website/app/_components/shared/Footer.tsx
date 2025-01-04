import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaDiscord, FaTiktok, FaTwitch } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: FaDiscord, href: "https://www.discord.com", label: "Discord" },
  { icon: FaTiktok, href: "https://www.tiktok.com", label: "TikTok" },
  { icon: FaTwitch, href: "https://www.twitch.com", label: "Twitch" },
]

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CompSoc Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">CompSoc</h2>
            <p className="mt-2">University of Surrey</p>
            <p className="mt-1">ussu.computing@surrey.ac.uk</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" aria-label={link.label} />
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Spotted a typo?</h4>
                <p className="text-sm text-muted-foreground">We're on GitHub, reach out to us</p>
              </div>
              <div>
                <h4 className="font-medium">Found a major issue?</h4>
                <p className="text-sm text-muted-foreground">Contact the WebMaster</p>
                <Link href="https://mohamediyadcherifi.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  mohamediyadcherifi.com
                </Link>
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Our Sponsors</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Image src="/students_Union.png" alt="Students' Union" width={150} height={50} className="object-contain" />
              <Image src="/Huzzle.png" alt="Huzzle" width={150} height={50} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} CompSoc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

