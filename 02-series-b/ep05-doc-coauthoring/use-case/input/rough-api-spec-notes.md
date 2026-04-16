# webhook stuff — spec notes

> last updated after planning call with Sarah + Raj
> TODO: ask Matt about the retry SLA before we finalize

## what we're building

basically an outbound webhook system so customers can subscribe to events on the Helix platform
rather than polling the API all the time. they register an endpoint URL, we send HTTP POST whenever
something happens

events we need to support:
- payment.completed
- payment.failed
- subscription.created
- subscription.cancelled
- user.invited
- user.deactivated
- maybe more later, need to check with product

## requirements (from the call)

- customers register up to 10 endpoints per account (I think? check with Raj)
- each endpoint can subscribe to specific event types or all events
- we need to retry if delivery fails — exponential backoff? TBD how many retries
- the payload should include the event type, timestamp, and the full resource object
- customers need a way to verify the payload is from us (signing?)
- we should have a dashboard or at least an API to see delivery logs
- events should be delivered in order? or at least best effort? unclear

## non-functional stuff

- latency: deliver within 5 seconds of event triggering (p95)
- uptime: the webhook delivery service should be highly available (99.9?)
- payload size limit: probably 256KB max, need to confirm
- customer endpoints must be HTTPS (no plain HTTP)
- we should be able to scale to 10k events/min without degradation

## schema ideas

roughly what the payload should look like:

```json
{
  "id": "evt_abc123",
  "type": "payment.completed",
  "created_at": "...",
  "data": {
    // the full resource object
  }
}
```

maybe also need:
- api_version field?
- account_id so customers can filter if they have multiple accounts?
- signature in the header, not the body (like Stripe does it)

## error handling

- if customer endpoint returns non-2xx, retry
- after max retries, mark as failed and log
- 4xx vs 5xx — should we treat them differently? (4xx = their problem, 5xx = transient?)
- what about timeouts? we should have a timeout per delivery attempt (5s? 10s?)
- customers should be able to manually trigger a replay

## open questions

- how many retry attempts? 3? 5? more?
- what's the retention period for delivery logs?
- do we need webhooks to be configurable per environment (prod vs staging)?
- signing algorithm — HMAC-SHA256 like Stripe or something else?
- ask Matt about retry SLA — is there a compliance requirement?
- do we support mTLS for high-security customers?
