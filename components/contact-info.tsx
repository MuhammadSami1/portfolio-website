import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
          <p className="group-hover:text-blue-500 transition-colors">
            muhammadsami1242@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
          <p className="group-hover:text-blue-500 transition-colors">
            +92 (307) 403-1207
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:animate-bounce">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
          <p className="group-hover:text-blue-500 transition-colors">
            Lahore, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
}
