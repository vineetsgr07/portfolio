export default {
  title: `Uber Backend `,
  tags: ['System Design', 'DDD'],
  spoiler: `When to Choose Microservices over Monolithic. Introduction to message broker 
  and it's variety, Load balancer and algorithms used behind it, Why Domain Driven 
  Development prior development and Sagas to maintain concurrency in a microservice 
  architecture`,
  getContent: () => import('./document.mdx'),
}