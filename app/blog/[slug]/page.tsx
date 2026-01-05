import { notFound } from "next/navigation";
import { Calendar, Clock, BookOpen, Lightbulb, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define a type for blog post data
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Full content of the blog post
  category: string;
  date: string;
  readTime: string;
  image: string;
  gradient: string;
  featured?: boolean;
  trending?: boolean;
}

// Dummy data for blog posts (expanded with full content)
const blogPosts: BlogPost[] = [
  {
    slug: "1",
    title:
      "The Rise of AI in Web Development: Tools That Are Changing the Game",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing web development, from code generation to automated testing.",
    content: `
  <p class="mb-6 text-lg leading-relaxed">
    Artificial Intelligence (AI) is no longer just a thing of the future. It’s now becoming a part of our daily life, even in web development. From doing boring tasks automatically to helping write complex code, AI tools are changing how we build websites and apps.
  </p>

  <h3 class="text-3xl font-bold text-gray-900 mb-4">AI for Code Generation and Autocompletion</h3>
  <p class="mb-6 text-lg leading-relaxed">
    Tools like GitHub Copilot and Tabnine help developers by giving smart code suggestions. Sometimes, they can write whole functions just from comments or small parts of code. This helps save time, avoids repeating the same code, and lets developers focus on important logic.
  </p>

  <h3 class="text-3xl font-bold text-gray-900 mb-4">Automated Testing and Debugging</h3>
  <p class="mb-6 text-lg leading-relaxed">
    AI also helps in testing and fixing problems. Some tools can find bugs, suggest solutions, or even create test cases by themselves. This saves time and makes web apps more reliable because it catches mistakes that people might miss.
  </p>

  <h3 class="text-3xl font-bold text-gray-900 mb-4">Personalized User Experiences</h3>
  <p class="mb-6 text-lg leading-relaxed">
    AI also helps improve how users experience a website. It can learn from what users do and show them content or suggestions that match their interests. This makes the app more fun and useful for each person.
  </p>

  <blockquote class="p-6 border-l-4 border-blue-500 bg-blue-50 text-gray-700 italic mb-6">
    "AI is not going to replace developers. Developers who use AI will replace developers who don't." – Unknown. Using AI tools will help you stay ahead.
  </blockquote>

  <h3 class="text-3xl font-bold text-gray-900 mb-4">Challenges and Ethical Considerations</h3>
  <p class="mb-6 text-lg leading-relaxed">
    While AI gives us many benefits, it also brings some problems. People worry about losing jobs, personal data being misused, and unfair AI decisions. Developers should understand these issues and use AI in a fair and responsible way.
  </p>

  <p class="mb-6 text-lg leading-relaxed">
    In short, AI is changing how we build websites and apps. If developers use these tools wisely, they can create faster, smarter, and better web experiences. The future of web development is exciting with AI.
  </p>
`,
    category: "AI & Technology",
    date: "2024-05-17",
    readTime: "7 min read",
    image: "/robotics.jpeg?height=300&width=400&text=AI+Development",
    gradient: "from-blue-500 to-cyan-500",
    trending: true,
  },
  {
    slug: "2",
    title: "Codeigniter Best Practices: Building Scalable PHP Applications",
    excerpt:
      "Essential codeigniter patterns and practices that help create maintainable and scalable web applications.",
    content: `
  <p class="mb-6 text-lg leading-relaxed">
   CodeIgniter is a strong PHP framework that's easy to use and full of useful features. But to build apps that work well as they grow, you need to follow some best practices. These tips will help your app run fast, stay secure, and be easier to manage in the future.
 </p>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">1. Optimize Database Interactions with Active Record</h3>
 <p class="mb-6 text-lg leading-relaxed">
   CodeIgniter's Active Record class simplifies database operations. However, if not used carefully, it can lead to inefficient queries. To avoid performance issues, especially when dealing with related data, retrieve parent records and then fetch related child records in a single batch query using <code>where_in()</code>. For very complex or large data sets, using direct SQL queries might offer better performance.
 </p>

 <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto mb-6"><code>// Efficiently loading related data
// In Model (e.g., application/models/User_model.php)
class User_model extends CI_Model {
    public function get_users_with_posts() {
        $users = $this->db->get('users')->result();
        $user_ids = array_column($users, 'id'); // Extract user IDs

        $posts = [];
        if (!empty($user_ids)) {
            $this->db->where_in('user_id', $user_ids);
            $posts_data = $this->db->get('posts')->result();
            foreach ($posts_data as $post) {
                $posts[$post->user_id][] = $post;
            }
        }

        foreach ($users as $user) {
            $user->posts = isset($posts[$user->id]) ? $posts[$user->id] : [];
        }
        return $users;
    }
}

// Using Active Record for complex queries
$this->db->where('votes >', 100);
$this->db->order_by('name', 'desc');
$query = $this->db->get('users');
$users = $query->result(); // Returns an array of objects
</code></pre>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">2. Keep Controllers Lean</h3>
 <p class="mb-6 text-lg leading-relaxed">
   Your controllers should only handle requests and send back responses. Put the main business logic into Models, Libraries, or Helper files. This keeps your code neat, organized, and much easier to test and maintain.
 </p>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">3. Validate Everything</h3>
 <p class="mb-6 text-lg leading-relaxed">
   Never trust data that comes from users. Always check it first using CodeIgniter’s built-in Form Validation Library. This keeps your app safe from wrong or harmful data and ensures data integrity.
 </p>
 <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto mb-6"><code>// Example of CI3 Form Validation
$this->load->library('form_validation');

$this->form_validation->set_rules('username', 'Username', 'required|min_length[5]|max_length[12]');
$this->form_validation->set_rules('password', 'Password', 'required|matches[passconf]');
$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required');
$this->form_validation->set_rules('email', 'Email', 'required|valid_email|is_unique[users.email]');

if ($this->form_validation->run() == FALSE) {
    // Validation failed, show errors
    echo validation_errors();
} else {
    // Validation passed, process data
    $username = $this->input->post('username');
    // ...
}
</code></pre>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">4. Use Caching for Speed</h3>
 <p class="mb-6 text-lg leading-relaxed">
   Caching helps your app load faster by storing frequently accessed data, reducing the need to re-generate it. You can store things like database results, API responses, or rendered views, so the app doesn’t repeat the same work. CodeIgniter supports various caching drivers including file-based, APCu, Memcached, and Redis.
 </p>
 <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto mb-6"><code>// Example of CI3 Caching
$this->load->driver('cache');

// Try to get data from cache
$users = $this->cache->get('all_users');

if ($users === FALSE) {
    // Data not found in cache, fetch from DB
    $users = $this->db->get('users')->result();
    // Save data to cache for 60 seconds
    $this->cache->save('all_users', $users, 60);
}

// $users now contains data, either from cache or DB
</code></pre>

 <blockquote class="p-6 border-l-4 border-red-500 bg-red-50 text-gray-700 italic mb-6">
  Don't overthink how to make your code speedy until you actually see it's slow. Focus on being clear and correct first. - Arslan Deshmukh
 </blockquote>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">5. Handle Errors and Logs Properly</h3>
 <p class="mb-6 text-lg leading-relaxed">
   Set up good error handling to catch and log problems. CodeIgniter lets you configure logging thresholds and provides functions like <code>log_message()</code> to record events and errors. Implement external logging tools like Sentry or Bugsnag to monitor for errors in production and fix them quickly.
 </p>

 <h3 class="text-3xl font-bold text-gray-900 mb-4">Conclusion</h3>
 <p class="mb-6 text-lg leading-relaxed">
   Following these best practices will help you build robust CodeIgniter applications that work well, are easy to fix, and stay secure as they grow. Keep improving your code and reviewing it often for long-term success.
 </p>
`,
    category: "PHP & Codeigniter",
    date: "2024-06-28",
    readTime: "6 min read",
    image: "/codeigniter.jpeg?height=300&width=400&text=Laravel+Best+Practices",
    gradient: "from-red-500 to-orange-500",
  },
];

// Helper functions (copied from Blog component for consistency)
const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: any } = {
    "Career Journey": BookOpen,
    "AI & Technology": Lightbulb,
    "PHP & Laravel": BookOpen,
    Database: BookOpen,
  };
  return icons[category] || BookOpen;
};

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Career Journey": "bg-purple-100 text-purple-800 border-purple-200",
    "AI & Technology": "bg-blue-100 text-blue-800 border-blue-200",
    "PHP & Laravel": "bg-red-100 text-red-800 border-red-200",
    Database: "bg-indigo-100 text-indigo-800 border-indigo-200",
  };
  return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug == slug);

  if (!post) {
    notFound();
  }

  const CategoryIcon = getCategoryIcon(post.category);

  return (
    <div className="relative py-16 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
        <div className="absolute top-20 left-10 w-72 lg:w-96 h-72 lg:h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 lg:w-96 h-72 lg:h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Back to blog button */}
          <div className="p-6 lg:p-8">
            <Link href="/#blog" passHref>
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-purple-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
              <Badge
                className={`${getCategoryColor(
                  post.category
                )} border px-3 py-1 text-sm font-semibold flex items-center gap-1 w-fit mb-3`}
              >
                <CategoryIcon className="w-4 h-4" />
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-200 text-sm md:text-base">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Blog content */}
          <div className="p-6 lg:p-8 text-gray-800 prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author info */}
          <div className="p-6 lg:p-8 border-t border-gray-200 bg-gray-50 flex items-center gap-4">
            <img
              src="/logo.jpg?height=64&width=64&text=Author"
              alt="Arslan Deshmukh"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
            />
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Arslan Deshmukh
              </h4>
              <p className="text-gray-600 text-sm">
                Full Stack Developer & Tech Enthusiast
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Passionate about building scalable web applications and sharing
                insights on modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
