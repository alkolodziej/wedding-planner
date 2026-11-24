# Wedding Planner backend

Follow the [project README](../../README.md) to configure and start Spring Boot with Oracle. Docker Compose publishes Oracle on the loopback interface. Run `docker compose logs -f oracle-db` to check readiness.

An existing Oracle volume retains its original database credentials. Reuse the correct credentials for that volume or use a new disposable database. Run `docker compose down` to stop the container and preserve its volume.
